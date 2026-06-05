"use client";

import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      try {
        await Promise.race([
          addDoc(collection(db, "messages"), {
            ...formData,
            createdAt: serverTimestamp(),
            read: false
          }),
          new Promise((_, reject) => setTimeout(() => reject(new Error("Database timeout")), 5000))
        ]);
      } catch (dbError) {
        console.warn("Database failed or timed out, attempting REST API fallback...", dbError);
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        });
        if (!res.ok) throw new Error("Fallback API failed");
      }
      
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message", error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-emerald-500/10 dark:bg-emerald-400/10 border border-emerald-500/20 rounded-2xl">
        <CheckCircle2 className="w-12 h-12 text-emerald-500 mb-4" />
        <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">Message Sent!</h3>
        <p className="text-neutral-600 dark:text-neutral-300 text-center">
          Thank you for reaching out. I'll get back to you as soon as possible.
        </p>
        <button 
          onClick={() => setStatus("idle")} 
          className="mt-6 text-sm text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {status === "error" && (
        <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-sm rounded-xl">
          Failed to send message. Please try again or email me directly.
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">Name</label>
          <input 
            required
            type="text" 
            value={formData.name}
            onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
            className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-white/5 px-4 py-3 text-neutral-900 dark:text-white outline-none focus:border-emerald-500/50 focus:bg-white dark:focus:bg-white/10 transition-all" 
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">Email</label>
          <input 
            required
            type="email" 
            value={formData.email}
            onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
            className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-white/5 px-4 py-3 text-neutral-900 dark:text-white outline-none focus:border-emerald-500/50 focus:bg-white dark:focus:bg-white/10 transition-all" 
            placeholder="john@example.com"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">Message</label>
        <textarea 
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData(prev => ({...prev, message: e.target.value}))}
          className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-white/5 px-4 py-3 text-neutral-900 dark:text-white outline-none focus:border-emerald-500/50 focus:bg-white dark:focus:bg-white/10 transition-all resize-none" 
          placeholder="Hi Anushka, I'd like to discuss..."
        />
      </div>
      <button 
        type="submit" 
        disabled={status === "loading"}
        className="w-full btn-base btn-lg btn-emerald btn-hover btn-shine hover:bg-emerald-500 flex items-center justify-center gap-2"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
        <Send className="w-4 h-4" />
      </button>
    </form>
  );
}
