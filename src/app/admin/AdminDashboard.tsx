"use client";

import { useState } from "react";
import { signOut, User } from "firebase/auth";
import { auth } from "../../lib/firebase";
import ProjectManager from "./ProjectManager";
import CertificationManager from "./CertificationManager";
import TeachingManager from "./TeachingManager";
import MessageManager from "./MessageManager";
import SiteSettingsManager from "./SiteSettingsManager";

export default function AdminDashboard({ user }: { user: User | null }) {
  const [activeTab, setActiveTab] = useState<"projects" | "certifications" | "teaching" | "messages" | "settings">("projects");

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

        <div className="flex flex-wrap gap-4 sm:gap-6 border-b border-black/10 dark:border-white/10">
          <button
            onClick={() => setActiveTab("settings")}
            className={`py-3 px-1 border-b-2 font-medium text-sm transition-colors ${activeTab === "settings" ? "border-emerald-500 text-emerald-600 dark:text-emerald-400" : "border-transparent text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300"}`}
          >
            Site Settings
          </button>
          <button
            onClick={() => setActiveTab("projects")}
            className={`py-3 px-1 border-b-2 font-medium text-sm transition-colors ${activeTab === "projects" ? "border-emerald-500 text-emerald-600 dark:text-emerald-400" : "border-transparent text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300"}`}
          >
            Projects
          </button>
          <button
            onClick={() => setActiveTab("certifications")}
            className={`py-3 px-1 border-b-2 font-medium text-sm transition-colors ${activeTab === "certifications" ? "border-emerald-500 text-emerald-600 dark:text-emerald-400" : "border-transparent text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300"}`}
          >
            Certifications
          </button>
          <button
            onClick={() => setActiveTab("teaching")}
            className={`py-3 px-1 border-b-2 font-medium text-sm transition-colors ${activeTab === "teaching" ? "border-emerald-500 text-emerald-600 dark:text-emerald-400" : "border-transparent text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300"}`}
          >
            Teaching
          </button>
          <button
            onClick={() => setActiveTab("messages")}
            className={`py-3 px-1 border-b-2 font-medium text-sm transition-colors ${activeTab === "messages" ? "border-emerald-500 text-emerald-600 dark:text-emerald-400" : "border-transparent text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300"}`}
          >
            Messages
          </button>
        </div>

        <div className="bg-white/70 dark:bg-white/5 p-6 rounded-2xl border border-black/5 dark:border-white/10 shadow-lg backdrop-blur-xl transition-colors min-h-[500px]">
          {activeTab === "settings" && <SiteSettingsManager />}
          {activeTab === "projects" && <ProjectManager />}
          {activeTab === "certifications" && <CertificationManager />}
          {activeTab === "teaching" && <TeachingManager />}
          {activeTab === "messages" && <MessageManager />}
        </div>
      </div>
    </div>
  );
}
