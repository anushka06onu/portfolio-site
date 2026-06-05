"use client";

import { useState, useEffect } from "react";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { Plus, Pencil, Trash2, X, Save, UploadCloud } from "lucide-react";
import { site } from "../../content/site";

export interface ProjectData {
  id?: string;
  title: string;
  category: string;
  status: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  desktopImages: string[];
  mobileImages: string[];
  tech: string[];
  links: {
    github: string;
    demo: string;
  };
}

export default function ProjectManager() {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingProject, setEditingProject] = useState<ProjectData | null>(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "projects"));
      const data: ProjectData[] = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() } as ProjectData);
      });
      setProjects(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleMigrate = async () => {
    if (confirm("This will copy your static projects from site.ts into Firebase. Continue?")) {
      setLoading(true);
      try {
        for (const proj of site.projects) {
          // ensure links object exists
          const p = { ...proj, links: proj.links || { github: "", demo: "" } };
          await addDoc(collection(db, "projects"), p);
        }
        await fetchProjects();
      } catch (error) {
        console.error("Migration failed", error);
        alert("Failed to migrate. Make sure Firebase is properly configured.");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this project?")) {
      await deleteDoc(doc(db, "projects", id));
      fetchProjects();
    }
  };

  const handleSave = async (project: ProjectData) => {
    const dataToSave = { ...project };
    delete dataToSave.id;

    if (project.id) {
      await updateDoc(doc(db, "projects", project.id), dataToSave as any);
    } else {
      await addDoc(collection(db, "projects"), dataToSave);
    }
    setEditingProject(null);
    fetchProjects();
  };

  if (loading) return <div className="text-neutral-500 dark:text-neutral-400">Loading projects...</div>;

  return (
    <div>
      {editingProject ? (
        <ProjectForm
          project={editingProject}
          onSave={handleSave}
          onCancel={() => setEditingProject(null)}
        />
      ) : (
        <>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white">Manage Projects</h2>
            <div className="flex gap-2">
              {projects.length === 0 && (
                <button
                  onClick={handleMigrate}
                  className="btn-base btn-sm btn-glass flex items-center gap-2"
                >
                  <UploadCloud className="w-4 h-4" /> Migrate from Code
                </button>
              )}
              <button
                onClick={() =>
                  setEditingProject({
                    title: "", category: "", status: "", description: "", problem: "",
                    solution: "", features: [], desktopImages: [], mobileImages: [], tech: [],
                    links: { github: "", demo: "" },
                  })
                }
                className="btn-base btn-sm btn-emerald flex items-center gap-2"
              >
                <Plus className="w-4 h-4" /> Add Project
              </button>
            </div>
          </div>

          <div className="grid gap-4">
            {projects.map((p) => (
              <div key={p.id} className="flex items-center justify-between p-4 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm">
                <div>
                  <h3 className="text-neutral-900 dark:text-white font-semibold">{p.title}</h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">{p.category}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => setEditingProject(p)} className="p-2 text-sky-600 hover:bg-sky-50 dark:text-sky-400 dark:hover:bg-sky-400/10 rounded-lg transition-colors">
                    <Pencil className="w-4 h-4" />
                  </button>
                  <button onClick={() => handleDelete(p.id!)} className="p-2 text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-400/10 rounded-lg transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
            {projects.length === 0 && <p className="text-neutral-500 italic">No projects found. Add one or migrate from code.</p>}
          </div>
        </>
      )}
    </div>
  );
}

function ProjectForm({ project, onSave, onCancel }: { project: ProjectData, onSave: (p: ProjectData) => void, onCancel: () => void }) {
  const [formData, setFormData] = useState<ProjectData>(project);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleArrayChange = (e: React.ChangeEvent<HTMLTextAreaElement>, field: "features" | "desktopImages" | "mobileImages" | "tech") => {
    const values = e.target.value.split("\n").filter((v) => v.trim() !== "");
    setFormData((prev) => ({ ...prev, [field]: values }));
  };

  const handleNestedChange = (e: React.ChangeEvent<HTMLInputElement>, parent: "links", field: string) => {
    setFormData((prev) => ({
      ...prev,
      [parent]: { ...prev[parent], [field]: e.target.value }
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b border-black/10 dark:border-white/10 pb-4">
        <h3 className="text-lg font-bold text-neutral-900 dark:text-white">{project.id ? "Edit Project" : "New Project"}</h3>
        <button onClick={onCancel} className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"><X className="w-5 h-5" /></button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">Title</label>
          <input name="title" value={formData.title} onChange={handleChange} className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-2 text-neutral-900 dark:text-white outline-none focus:border-emerald-500/50" />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">Category</label>
          <input name="category" value={formData.category} onChange={handleChange} className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-2 text-neutral-900 dark:text-white outline-none focus:border-emerald-500/50" />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">Status</label>
          <input name="status" value={formData.status} onChange={handleChange} className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-2 text-neutral-900 dark:text-white outline-none focus:border-emerald-500/50" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">Description</label>
          <textarea name="description" value={formData.description} onChange={handleChange} rows={2} className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-2 text-neutral-900 dark:text-white outline-none focus:border-emerald-500/50" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">Problem</label>
          <textarea name="problem" value={formData.problem} onChange={handleChange} rows={2} className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-2 text-neutral-900 dark:text-white outline-none focus:border-emerald-500/50" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">Solution</label>
          <textarea name="solution" value={formData.solution} onChange={handleChange} rows={2} className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-2 text-neutral-900 dark:text-white outline-none focus:border-emerald-500/50" />
        </div>
        
        <div>
          <label className="block text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">Features (One per line)</label>
          <textarea value={formData.features?.join("\n")} onChange={(e) => handleArrayChange(e, "features")} rows={4} className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-2 text-neutral-900 dark:text-white outline-none focus:border-emerald-500/50" />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">Tech Stack (One per line)</label>
          <textarea value={formData.tech?.join("\n")} onChange={(e) => handleArrayChange(e, "tech")} rows={4} className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-2 text-neutral-900 dark:text-white outline-none focus:border-emerald-500/50" />
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">Desktop Cloudinary Links (One per line)</label>
          <textarea value={formData.desktopImages?.join("\n")} onChange={(e) => handleArrayChange(e, "desktopImages")} rows={3} placeholder="https://res.cloudinary.com/..." className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-2 text-neutral-900 dark:text-white outline-none focus:border-emerald-500/50" />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">Mobile Cloudinary Links (One per line)</label>
          <textarea value={formData.mobileImages?.join("\n")} onChange={(e) => handleArrayChange(e, "mobileImages")} rows={3} placeholder="https://res.cloudinary.com/..." className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-2 text-neutral-900 dark:text-white outline-none focus:border-emerald-500/50" />
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">GitHub Link</label>
          <input value={formData.links?.github} onChange={(e) => handleNestedChange(e, "links", "github")} className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-2 text-neutral-900 dark:text-white outline-none focus:border-emerald-500/50" />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">Live Demo Link</label>
          <input value={formData.links?.demo} onChange={(e) => handleNestedChange(e, "links", "demo")} className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-2 text-neutral-900 dark:text-white outline-none focus:border-emerald-500/50" />
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-4 border-t border-black/10 dark:border-white/10">
        <button onClick={onCancel} className="btn-base btn-sm btn-glass">Cancel</button>
        <button onClick={() => onSave(formData)} className="btn-base btn-sm btn-emerald flex items-center gap-2">
          <Save className="w-4 h-4" /> Save Project
        </button>
      </div>
    </div>
  );
}
