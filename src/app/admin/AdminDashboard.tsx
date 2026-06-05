"use client";

import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../lib/firebase";
import ProjectManager from "./ProjectManager";
import CertificationManager from "./CertificationManager";

export default function AdminDashboard({ user }: { user: any }) {
  const [activeTab, setActiveTab] = useState<"projects" | "certifications">("projects");

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-[#0b0f14] p-4 sm:p-10 font-sans transition-colors duration-500">
      <div className="max-w-6xl mx-auto space-y-8">
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white dark:bg-white/5 p-6 rounded-2xl border border-black/10 dark:border-white/10 shadow-sm backdrop-blur-xl transition-colors">
          <div>
            <h1 className="text-2xl font-bold text-neutral-900 dark:text-white font-[var(--font-playfair)]">Portfolio CMS</h1>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm">Logged in as {user?.email}</p>
          </div>
          <button
            onClick={handleLogout}
            className="btn-base btn-md btn-glass border border-red-500/20 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10"
          >
            Sign Out
          </button>
        </div>

        <div className="flex gap-2 p-1 bg-black/5 dark:bg-white/5 rounded-xl w-fit border border-black/5 dark:border-white/5">
          <button
            onClick={() => setActiveTab("projects")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === "projects" 
                ? "bg-white dark:bg-white/10 text-neutral-900 dark:text-white shadow-sm" 
                : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => setActiveTab("certifications")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === "certifications" 
                ? "bg-white dark:bg-white/10 text-neutral-900 dark:text-white shadow-sm" 
                : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
            }`}
          >
            Certifications
          </button>
        </div>

        <div className="bg-white/70 dark:bg-white/5 p-6 rounded-2xl border border-black/5 dark:border-white/10 shadow-lg backdrop-blur-xl transition-colors min-h-[500px]">
          {activeTab === "projects" ? <ProjectManager /> : <CertificationManager />}
        </div>
      </div>
    </div>
  );
}
