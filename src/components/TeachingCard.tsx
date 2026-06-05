"use client";

import { useState } from "react";
import TeachingModal, { TeachingDetails } from "./TeachingModal";

export default function TeachingCard(props: TeachingDetails) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        onClick={() => setIsModalOpen(true)}
        className="card-glow p-8 md:p-10 border border-black/5 dark:border-white/10 max-w-3xl cursor-pointer group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(16,185,129,0.15)]"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-purple-500 to-sky-400 opacity-50 dark:opacity-60 transition-opacity group-hover:opacity-100" />
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors font-[var(--font-playfair)]">
            {props.role}
          </h3>
          <span className="inline-flex rounded-full bg-black/5 dark:bg-white/10 px-3 py-1.5 text-xs text-neutral-700 dark:text-neutral-200 backdrop-blur-md">
            {props.duration}
          </span>
        </div>
        
        <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-lg line-clamp-3">
          {props.description}
        </p>

        <div className="mt-6 flex items-center text-xs text-emerald-600/80 dark:text-emerald-400/70 font-medium tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity">
          View Details &rarr;
        </div>
      </div>

      <TeachingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        data={props} 
      />
    </>
  );
}
