"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

export interface TeachingDetails {
  id?: string;
  role: string;
  duration: string;
  description: string;
  tasks?: string[];
  imageUrl?: string;
}

interface TeachingModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: TeachingDetails | null;
}

export default function TeachingModal({ isOpen, onClose, data }: TeachingModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!data) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-white/40 dark:bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2rem] border border-black/10 dark:border-white/10 bg-white/90 dark:bg-[#0b0f14]/90 p-6 sm:p-10 shadow-2xl backdrop-blur-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-purple-500 via-sky-400 to-emerald-400 opacity-30 dark:opacity-60" />
            
            <button
              onClick={onClose}
              className="absolute right-6 top-6 p-2 rounded-full bg-black/5 dark:bg-white/5 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid lg:grid-cols-2 gap-10">
              {/* Left Column: Details */}
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-300 mb-2">
                  Teaching & Mentorship
                </p>
                <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4 font-[var(--font-playfair)]">
                  {data.role}
                </h2>
                <span className="inline-flex rounded-full bg-black/5 dark:bg-white/10 px-3 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-8">
                  {data.duration}
                </span>

                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-neutral-600 dark:text-neutral-300 mb-2 uppercase tracking-wider text-sky-600 dark:text-sky-200/80">Overview</h3>
                  <p className="text-neutral-700 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
                    {data.description}
                  </p>
                </div>

                {data.tasks && data.tasks.length > 0 && (
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-600 dark:text-neutral-300 mb-3 uppercase tracking-wider text-purple-600 dark:text-purple-200/80">Key Responsibilities</h3>
                    <ul className="space-y-2">
                      {data.tasks.map((item, idx) => (
                        <li key={idx} className="text-neutral-700 dark:text-neutral-300 text-sm flex items-start">
                          <span className="mr-2 text-emerald-500 dark:text-emerald-400 text-lg leading-none">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Right Column: Image */}
              <div className="flex items-center justify-center">
                {data.imageUrl ? (
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-black/5 dark:border-white/10 shadow-[0_0_30px_rgba(16,185,129,0.05)] dark:shadow-[0_0_30px_rgba(16,185,129,0.15)] group">
                    <Image
                      src={data.imageUrl}
                      alt={data.role}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                ) : (
                  <div className="w-full aspect-[4/3] rounded-xl border border-dashed border-black/20 dark:border-white/20 bg-black/5 dark:bg-white/5 flex items-center justify-center text-neutral-500 text-sm">
                    No Image Provided
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
