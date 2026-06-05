"use client";

import { useState } from "react";
import CertificationModal, { CertificationDetails } from "./CertificationModal";

export default function CertificationCard(props: CertificationDetails) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        onClick={() => setIsModalOpen(true)}
        className="card-glow p-5 cursor-pointer group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(16,185,129,0.15)]"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-sky-400 via-purple-500 to-emerald-400 opacity-30 dark:opacity-50 transition-opacity group-hover:opacity-60 dark:group-hover:opacity-100" />
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">{props.title}</h3>
          <span className="inline-flex rounded-full bg-emerald-500/10 dark:bg-emerald-400/10 px-2.5 py-0.5 text-[10px] font-medium text-emerald-700 dark:text-emerald-300 uppercase tracking-wider border border-emerald-500/20 dark:border-emerald-400/20 shadow-[0_0_10px_rgba(52,211,153,0.05)] dark:shadow-[0_0_10px_rgba(52,211,153,0.1)]">
            {props.status}
          </span>
        </div>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 uppercase tracking-[0.1em]">{props.provider}</p>
        <div className="mt-4 flex items-center text-xs text-emerald-600/80 dark:text-emerald-400/70 font-medium tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity">
          View Details &rarr;
        </div>
      </div>

      <CertificationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        cert={props} 
      />
    </>
  );
}
