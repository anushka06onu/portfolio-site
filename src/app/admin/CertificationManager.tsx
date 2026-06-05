"use client";

import { useState, useEffect } from "react";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { Plus, Pencil, Trash2, X, Save, UploadCloud } from "lucide-react";
import { site } from "../../content/site";

export interface CertificationData {
  id?: string;
  title: string;
  provider: string;
  status: string;
  description: string;
  learned: string[];
  imageUrl: string;
}

export default function CertificationManager() {
  const [certs, setCerts] = useState<CertificationData[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingCert, setEditingCert] = useState<CertificationData | null>(null);

  useEffect(() => {
    fetchCerts();
  }, []);

  const fetchCerts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "certifications"));
      const data: CertificationData[] = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() } as CertificationData);
      });
      setCerts(data);
    } catch (error) {
      console.error("Error fetching certifications:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleMigrate = async () => {
    if (confirm("This will copy your static certifications from site.ts into Firebase. Continue?")) {
      setLoading(true);
      try {
        for (const cert of site.certifications) {
          const c = { ...cert, imageUrl: cert.imageUrl || "" };
          await addDoc(collection(db, "certifications"), c);
        }
        await fetchCerts();
      } catch (error) {
        console.error("Migration failed", error);
        alert("Failed to migrate. Make sure Firebase is properly configured.");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this certification?")) {
      await deleteDoc(doc(db, "certifications", id));
      fetchCerts();
    }
  };

  const handleSave = async (cert: CertificationData) => {
    const dataToSave = { ...cert };
    delete dataToSave.id;

    if (cert.id) {
      await updateDoc(doc(db, "certifications", cert.id), dataToSave as any);
    } else {
      await addDoc(collection(db, "certifications"), dataToSave);
    }
    setEditingCert(null);
    fetchCerts();
  };

  if (loading) return <div className="text-neutral-500 dark:text-neutral-400">Loading certifications...</div>;

  return (
    <div>
      {editingCert ? (
        <CertForm
          cert={editingCert}
          onSave={handleSave}
          onCancel={() => setEditingCert(null)}
        />
      ) : (
        <>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white">Manage Certifications</h2>
            <div className="flex gap-2">
              {certs.length === 0 && (
                <button
                  onClick={handleMigrate}
                  className="btn-base btn-sm btn-glass flex items-center gap-2"
                >
                  <UploadCloud className="w-4 h-4" /> Migrate from Code
                </button>
              )}
              <button
                onClick={() =>
                  setEditingCert({
                    title: "", provider: "", status: "", description: "", learned: [], imageUrl: "",
                  })
                }
                className="btn-base btn-sm btn-emerald flex items-center gap-2"
              >
                <Plus className="w-4 h-4" /> Add Certification
              </button>
            </div>
          </div>

          <div className="grid gap-4">
            {certs.map((c) => (
              <div key={c.id} className="flex items-center justify-between p-4 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm">
                <div>
                  <h3 className="text-neutral-900 dark:text-white font-semibold">{c.title}</h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">{c.provider}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => setEditingCert(c)} className="p-2 text-sky-600 hover:bg-sky-50 dark:text-sky-400 dark:hover:bg-sky-400/10 rounded-lg transition-colors">
                    <Pencil className="w-4 h-4" />
                  </button>
                  <button onClick={() => handleDelete(c.id!)} className="p-2 text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-400/10 rounded-lg transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
            {certs.length === 0 && <p className="text-neutral-500 italic">No certifications found. Add one or migrate from code.</p>}
          </div>
        </>
      )}
    </div>
  );
}

function CertForm({ cert, onSave, onCancel }: { cert: CertificationData, onSave: (c: CertificationData) => void, onCancel: () => void }) {
  const [formData, setFormData] = useState<CertificationData>(cert);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleArrayChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const values = e.target.value.split("\n").filter((v) => v.trim() !== "");
    setFormData((prev) => ({ ...prev, learned: values }));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b border-black/10 dark:border-white/10 pb-4">
        <h3 className="text-lg font-bold text-neutral-900 dark:text-white">{cert.id ? "Edit Certification" : "New Certification"}</h3>
        <button onClick={onCancel} className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"><X className="w-5 h-5" /></button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <label className="block text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">Title</label>
          <input name="title" value={formData.title} onChange={handleChange} className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-2 text-neutral-900 dark:text-white outline-none focus:border-emerald-500/50" />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">Provider</label>
          <input name="provider" value={formData.provider} onChange={handleChange} className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-2 text-neutral-900 dark:text-white outline-none focus:border-emerald-500/50" />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">Status (e.g. Completed, In Progress)</label>
          <input name="status" value={formData.status} onChange={handleChange} className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-2 text-neutral-900 dark:text-white outline-none focus:border-emerald-500/50" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">Description</label>
          <textarea name="description" value={formData.description} onChange={handleChange} rows={3} className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-2 text-neutral-900 dark:text-white outline-none focus:border-emerald-500/50" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">What I Learned (One per line)</label>
          <textarea value={formData.learned?.join("\n")} onChange={handleArrayChange} rows={4} className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-2 text-neutral-900 dark:text-white outline-none focus:border-emerald-500/50" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">Cloudinary Image URL</label>
          <input name="imageUrl" value={formData.imageUrl} onChange={handleChange} placeholder="https://res.cloudinary.com/..." className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-2 text-neutral-900 dark:text-white outline-none focus:border-emerald-500/50" />
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-4 border-t border-black/10 dark:border-white/10">
        <button onClick={onCancel} className="btn-base btn-sm btn-glass">Cancel</button>
        <button onClick={() => onSave(formData)} className="btn-base btn-sm btn-emerald flex items-center gap-2">
          <Save className="w-4 h-4" /> Save Certification
        </button>
      </div>
    </div>
  );
}
