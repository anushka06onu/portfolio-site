"use client";

import { useState, useEffect } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { Save, UploadCloud } from "lucide-react";
import { site } from "../../content/site";

export default function SiteSettingsManager() {
  const [settings, setSettings] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const docSnap = (await Promise.race([
        getDoc(doc(db, "settings", "site-config")),
        new Promise((_, reject) => setTimeout(() => reject(new Error("⚠️ ACTION REQUIRED: Your Firebase Firestore Database is not created yet! Go to console.firebase.google.com -> Your Project -> Firestore Database -> Click 'Create Database' (Test Mode).")), 5000))
      ])) as any;
      if (docSnap.exists()) {
        setSettings(docSnap.data());
      } else {
        setSettings(null);
      }
    } catch (err: any) {
      console.error("Error fetching site settings:", err);
      if (err.message?.includes("PERMISSION_DENIED")) {
        setError("Cloud Firestore is not enabled. Go to the Firebase Console -> Build -> Firestore Database and click 'Create Database'.");
      } else {
        setError(err.message || "Failed to load.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleMigrate = async () => {
    if (confirm("Migrate site.ts settings to Firebase?")) {
      setLoading(true);
      try {
        const config = {
          name: site.name,
          headline: site.headline,
          about: site.about,
          cgpa: site.academics.cgpa,
          researchLab: site.research.lab,
          researchRole: site.research.role,
          researchOngoing: site.research.ongoing,
          researchInterests: site.research.interests,
        };
        await setDoc(doc(db, "settings", "site-config"), config);
        await fetchSettings();
      } catch (error) {
        console.error("Migration failed", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await setDoc(doc(db, "settings", "site-config"), settings);
      alert("Settings saved successfully!");
      setError(null);
    } catch (err: any) {
      console.error("Save failed:", err);
      setError("Save failed: " + (err.message || "Permission Denied. Check Firestore Rules."));
    } finally {
      setSaving(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSettings((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleArrayChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const values = e.target.value.split("\n").filter((v) => v.trim() !== "");
    setSettings((prev: any) => ({ ...prev, researchInterests: values }));
  };

  if (loading) return <div className="text-neutral-500">Loading settings...</div>;

  if (!settings) {
    return (
      <div className="flex flex-col items-center justify-center py-10">
        <p className="mb-4 text-neutral-600 dark:text-neutral-300">No site configuration found in Firebase.</p>
        <button onClick={handleMigrate} className="btn-base btn-md btn-emerald flex items-center gap-2">
          <UploadCloud className="w-4 h-4" /> Initialize from Code
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {error && (
        <div className="p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400">
          <p className="font-bold">Database Error</p>
          <p className="text-sm mt-1">{error}</p>
        </div>
      )}
      <div className="flex justify-between items-center border-b border-black/10 dark:border-white/10 pb-4">
        <h2 className="text-xl font-bold text-neutral-900 dark:text-white">Site Settings</h2>
        <button onClick={handleSave} className="btn-base btn-sm btn-emerald flex items-center gap-2">
          <Save className="w-4 h-4" /> Save Settings
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2 border-b border-black/10 dark:border-white/10 pb-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-500 mb-4">Hero Section</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-xs uppercase text-neutral-500 dark:text-neutral-400 mb-1">Name</label>
              <input name="name" value={settings.name} onChange={handleChange} className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-2 outline-none text-neutral-900 dark:text-white" />
            </div>
            <div>
              <label className="block text-xs uppercase text-neutral-500 dark:text-neutral-400 mb-1">Headline</label>
              <input name="headline" value={settings.headline} onChange={handleChange} className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-2 outline-none text-neutral-900 dark:text-white" />
            </div>
            <div>
              <label className="block text-xs uppercase text-neutral-500 dark:text-neutral-400 mb-1">About Text</label>
              <textarea name="about" value={settings.about} onChange={handleChange} rows={4} className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-2 outline-none text-neutral-900 dark:text-white" />
            </div>
          </div>
        </div>

        <div className="md:col-span-2 border-b border-black/10 dark:border-white/10 pb-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-500 mb-4">Achievements</h3>
          <div>
            <label className="block text-xs uppercase text-neutral-500 dark:text-neutral-400 mb-1">Current CGPA</label>
            <input name="cgpa" value={settings.cgpa} onChange={handleChange} className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-2 outline-none text-neutral-900 dark:text-white" />
          </div>
        </div>

        <div className="md:col-span-2 border-b border-black/10 dark:border-white/10 pb-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-500 mb-4">Research Section</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase text-neutral-500 dark:text-neutral-400 mb-1">Lab</label>
                <input name="researchLab" value={settings.researchLab} onChange={handleChange} className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-2 outline-none text-neutral-900 dark:text-white" />
              </div>
              <div>
                <label className="block text-xs uppercase text-neutral-500 dark:text-neutral-400 mb-1">Role</label>
                <input name="researchRole" value={settings.researchRole} onChange={handleChange} className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-2 outline-none text-neutral-900 dark:text-white" />
              </div>
            </div>
            <div>
              <label className="block text-xs uppercase text-neutral-500 dark:text-neutral-400 mb-1">Ongoing Research Text</label>
              <textarea name="researchOngoing" value={settings.researchOngoing} onChange={handleChange} rows={3} className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-2 outline-none text-neutral-900 dark:text-white" />
            </div>
            <div>
              <label className="block text-xs uppercase text-neutral-500 dark:text-neutral-400 mb-1">Interests (One per line)</label>
              <textarea value={settings.researchInterests?.join("\n")} onChange={handleArrayChange} rows={4} className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-2 outline-none text-neutral-900 dark:text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
