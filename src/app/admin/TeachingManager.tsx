"use client";

import { useState, useEffect } from "react";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { Plus, Pencil, Trash2, X, Save, UploadCloud } from "lucide-react";
import { site } from "../../content/site";
import { TeachingDetails } from "../../components/TeachingModal";

export default function TeachingManager() {
  const [items, setItems] = useState<TeachingDetails[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingItem, setEditingItem] = useState<TeachingDetails | null>(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const querySnapshot = (await Promise.race([
        getDocs(collection(db, "teaching")),
        new Promise((_, reject) => setTimeout(() => reject(new Error("⚠️ ACTION REQUIRED: Your Firebase Firestore Database is not created yet! Go to console.firebase.google.com -> Your Project -> Firestore Database -> Click 'Create Database' (Test Mode).")), 5000))
      ])) as any;
      const data: TeachingDetails[] = [];
      querySnapshot.forEach((doc: any) => {
        data.push({ id: doc.id, ...doc.data() } as TeachingDetails);
      });
      setItems(data);
    } catch (err: any) {
      console.error("Error fetching teaching data:", err);
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
    if (confirm("Migrate static teaching data to Firebase?")) {
      setLoading(true);
      try {
        const t = {
          role: site.teaching.role,
          duration: site.teaching.duration,
          description: site.teaching.description,
          tasks: ["Conducted labs", "Graded assignments"],
          imageUrl: ""
        };
        await addDoc(collection(db, "teaching"), t);
        await fetchItems();
      } catch (error) {
        console.error("Migration failed", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this record?")) {
      try {
        await deleteDoc(doc(db, "teaching", id));
        fetchItems();
        setError(null);
      } catch (err: any) {
        console.error("Delete failed:", err);
        setError("Delete failed: " + (err.message || "Permission Denied."));
      }
    }
  };

  const handleSave = async (item: TeachingDetails) => {
    try {
      const dataToSave = { ...item };
      delete dataToSave.id;

      if (item.id) {
        await updateDoc(doc(db, "teaching", item.id), dataToSave as any);
      } else {
        await addDoc(collection(db, "teaching"), dataToSave);
      }
      setEditingItem(null);
      fetchItems();
      setError(null);
    } catch (err: any) {
      console.error("Save failed:", err);
      setError("Save failed: " + (err.message || "Permission Denied. Check Firestore Rules."));
    }
  };

  if (loading) return <div className="text-neutral-500">Loading...</div>;

  return (
    <div>
      {editingItem ? (
        <TeachingForm item={editingItem} onSave={handleSave} onCancel={() => setEditingItem(null)} />
      ) : (
        <>
          {error && (
            <div className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400">
              <p className="font-bold">Database Error</p>
              <p className="text-sm mt-1">{error}</p>
            </div>
          )}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white">Manage Teaching & Mentorship</h2>
            <div className="flex gap-2">
              {items.length === 0 && (
                <button onClick={handleMigrate} className="btn-base btn-sm btn-glass flex items-center gap-2">
                  <UploadCloud className="w-4 h-4" /> Migrate
                </button>
              )}
              <button
                onClick={() => setEditingItem({ role: "", duration: "", description: "", tasks: [], imageUrl: "" })}
                className="btn-base btn-sm btn-emerald flex items-center gap-2"
              >
                <Plus className="w-4 h-4" /> Add Role
              </button>
            </div>
          </div>

          <div className="grid gap-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm">
                <div>
                  <h3 className="text-neutral-900 dark:text-white font-semibold">{item.role}</h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">{item.duration}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => setEditingItem(item)} className="p-2 text-sky-600 hover:bg-sky-50 dark:text-sky-400 dark:hover:bg-sky-400/10 rounded-lg">
                    <Pencil className="w-4 h-4" />
                  </button>
                  <button onClick={() => handleDelete(item.id!)} className="p-2 text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-400/10 rounded-lg">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
            {items.length === 0 && <p className="text-neutral-500 italic">No roles found.</p>}
          </div>
        </>
      )}
    </div>
  );
}

function TeachingForm({ item, onSave, onCancel }: { item: TeachingDetails, onSave: (i: TeachingDetails) => void, onCancel: () => void }) {
  const [formData, setFormData] = useState<TeachingDetails>(item);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleArrayChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const values = e.target.value.split("\n").filter((v) => v.trim() !== "");
    setFormData((prev) => ({ ...prev, tasks: values }));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b border-black/10 dark:border-white/10 pb-4">
        <h3 className="text-lg font-bold text-neutral-900 dark:text-white">{item.id ? "Edit Role" : "New Role"}</h3>
        <button onClick={onCancel} className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"><X className="w-5 h-5" /></button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs uppercase text-neutral-500 dark:text-neutral-400 mb-1">Role Title</label>
          <input name="role" value={formData.role} onChange={handleChange} className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-2 text-neutral-900 dark:text-white outline-none" />
        </div>
        <div>
          <label className="block text-xs uppercase text-neutral-500 dark:text-neutral-400 mb-1">Duration</label>
          <input name="duration" value={formData.duration} onChange={handleChange} className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-2 text-neutral-900 dark:text-white outline-none" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-xs uppercase text-neutral-500 dark:text-neutral-400 mb-1">Description / Overview</label>
          <textarea name="description" value={formData.description} onChange={handleChange} rows={3} className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-2 text-neutral-900 dark:text-white outline-none" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-xs uppercase text-neutral-500 dark:text-neutral-400 mb-1">Responsibilities (One per line)</label>
          <textarea value={formData.tasks?.join("\n")} onChange={handleArrayChange} rows={4} className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-2 text-neutral-900 dark:text-white outline-none" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-xs uppercase text-neutral-500 dark:text-neutral-400 mb-1">Image URL (Cloudinary)</label>
          <input name="imageUrl" value={formData.imageUrl || ""} onChange={handleChange} className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-2 text-neutral-900 dark:text-white outline-none" />
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-4">
        <button onClick={onCancel} className="btn-base btn-sm btn-glass">Cancel</button>
        <button onClick={() => onSave(formData)} className="btn-base btn-sm btn-emerald flex items-center gap-2"><Save className="w-4 h-4" /> Save</button>
      </div>
    </div>
  );
}
