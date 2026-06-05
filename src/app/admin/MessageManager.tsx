"use client";

import { useState, useEffect } from "react";
import { collection, getDocs, updateDoc, deleteDoc, doc, orderBy, query } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { Trash2, Mail, MailOpen } from "lucide-react";

interface MessageData {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: any;
  read: boolean;
}

export default function MessageManager() {
  const [messages, setMessages] = useState<MessageData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));
      const querySnapshot = (await Promise.race([
        getDocs(q),
        new Promise((_, reject) => setTimeout(() => reject(new Error("⚠️ ACTION REQUIRED: Your Firebase Firestore Database is not created yet! Go to console.firebase.google.com -> Your Project -> Firestore Database -> Click 'Create Database' (Test Mode).")), 5000))
      ])) as any;
      const data: MessageData[] = [];
      querySnapshot.forEach((doc: any) => {
        data.push({ id: doc.id, ...doc.data() } as MessageData);
      });
      setMessages(data);
    } catch (err: any) {
      console.error("Error fetching messages:", err);
      if (err.message?.includes("PERMISSION_DENIED")) {
        setError("Cloud Firestore is not enabled. Go to the Firebase Console -> Build -> Firestore Database and click 'Create Database' to enable the CMS.");
      } else {
        setError(err.message || "Failed to load messages.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleToggleRead = async (id: string, currentReadStatus: boolean) => {
    try {
      await updateDoc(doc(db, "messages", id), { read: !currentReadStatus });
      setMessages(messages.map(m => m.id === id ? { ...m, read: !currentReadStatus } : m));
    } catch (error) {
      console.error("Error updating message", error);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this message?")) {
      await deleteDoc(doc(db, "messages", id));
      setMessages(messages.filter(m => m.id !== id));
    }
  };

  if (loading) return <div className="text-neutral-500">Loading messages...</div>;

  return (
    <div className="space-y-6">
      {error && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400">
          <p className="font-bold">Database Error</p>
          <p className="text-sm mt-1">{error}</p>
        </div>
      )}
      <div className="flex justify-between items-center border-b border-black/10 dark:border-white/10 pb-4">
        <h2 className="text-xl font-bold text-neutral-900 dark:text-white">Messages</h2>
      </div>

      <div className="grid gap-4">
        {messages.map((m) => (
          <div key={m.id} className={`p-4 rounded-xl border border-black/10 dark:border-white/10 shadow-sm transition-colors ${m.read ? "bg-white/50 dark:bg-white/5 opacity-70" : "bg-white dark:bg-black/20 border-l-4 border-l-emerald-500"}`}>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-neutral-900 dark:text-white font-semibold">{m.name}</h3>
                <a href={`mailto:${m.email}`} className="text-sm text-sky-600 dark:text-sky-400 hover:underline">{m.email}</a>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => handleToggleRead(m.id, m.read)} 
                  className="p-2 text-neutral-500 hover:bg-black/5 dark:hover:bg-white/10 rounded-lg transition-colors"
                  title={m.read ? "Mark as unread" : "Mark as read"}
                >
                  {m.read ? <MailOpen className="w-4 h-4" /> : <Mail className="w-4 h-4" />}
                </button>
                <button 
                  onClick={() => handleDelete(m.id)} 
                  className="p-2 text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-400/10 rounded-lg transition-colors"
                  title="Delete message"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            <p className="text-neutral-700 dark:text-neutral-300 mt-2 text-sm whitespace-pre-wrap bg-black/5 dark:bg-white/5 p-3 rounded-lg">
              {m.message}
            </p>
            <div className="mt-3 text-xs text-neutral-400">
              {m.createdAt?.toDate ? m.createdAt.toDate().toLocaleString() : "Recently"}
            </div>
          </div>
        ))}
        {messages.length === 0 && <p className="text-neutral-500 italic">No messages received yet.</p>}
      </div>
    </div>
  );
}
