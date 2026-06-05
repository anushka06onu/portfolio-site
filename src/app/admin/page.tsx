"use client";

import { useState, useEffect } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../../lib/firebase";
import AdminDashboard from "./AdminDashboard";

export default function AdminPage() {
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
      setError(err.message || "Failed to log in");
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="flex h-[50vh] items-center justify-center text-emerald-600 dark:text-emerald-400">Loading Admin...</div>;
  }

  if (!user) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center p-4">
        <div className="card-glow w-full max-w-md p-8 relative overflow-hidden bg-white/80 dark:bg-[#0b0f14]/80">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-sky-400 via-emerald-400 to-purple-500 opacity-60" />
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6 text-center font-[var(--font-playfair)]">Admin Login</h2>
          
          {error && (
            <div className="mb-4 rounded-xl bg-red-500/10 border border-red-500/50 p-3 text-sm text-red-600 dark:text-red-400 text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-4 py-2 text-neutral-900 dark:text-white outline-none focus:border-emerald-500/50 transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-4 py-2 text-neutral-900 dark:text-white outline-none focus:border-emerald-500/50 transition-colors"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full btn-base btn-md btn-emerald btn-hover btn-shine hover:bg-emerald-500 mt-6"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }

  return <AdminDashboard user={user} />;
}
