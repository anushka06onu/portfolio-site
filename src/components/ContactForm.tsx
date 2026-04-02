"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError(null);

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get("name")?.toString() ?? "",
      email: formData.get("email")?.toString() ?? "",
      message: formData.get("message")?.toString() ?? ""
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const data = await res.json();

    if (!res.ok || !data.ok) {
      setStatus("error");
      setError(data.error ?? "Something went wrong. Try again.");
      return;
    }

    setStatus("sent");
    event.currentTarget.reset();
    setTimeout(() => setStatus("idle"), 4000);
  }

  const isBusy = status === "loading";

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 via-white/0 to-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl ring-1 ring-white/5">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(520px_circle_at_90%_0%,rgba(56,189,248,0.12),transparent_55%)] opacity-70" />
      <div className="relative">
        <h3 className="text-xl font-semibold text-white">Contact Me</h3>
        <p className="mt-1 text-sm text-neutral-300">
          Send a note and it will be delivered straight to my inbox.
        </p>
      </div>

      <form onSubmit={onSubmit} className="relative mt-6 space-y-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm text-neutral-200">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-emerald-400/60 focus:bg-white/10"
            placeholder="Your name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm text-neutral-200">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-emerald-400/60 focus:bg-white/10"
            placeholder="you@email.com"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm text-neutral-200">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-emerald-400/60 focus:bg-white/10"
            placeholder="How can I help?"
          />
        </div>
        <button
          type="submit"
          disabled={isBusy}
          className="btn-base btn-lg btn-emerald btn-hover btn-shine w-full justify-center shadow-[0_15px_40px_rgba(16,185,129,0.25)] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isBusy ? "Sending..." : status === "sent" ? "Sent!" : "Send Message"}
        </button>

        {error && <p className="text-sm text-rose-300">{error}</p>}
        {status === "sent" && !error && (
          <p className="text-sm text-emerald-200">Message delivered. I’ll reply soon.</p>
        )}
      </form>
    </div>
  );
}
