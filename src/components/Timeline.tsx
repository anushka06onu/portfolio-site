import React from "react";

interface TimelineItem {
  title: string;
  org: string;
  time: string;
  description: string;
}

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative border-l-2 border-black/10 dark:border-white/10 ml-3 sm:ml-6 mt-8 space-y-12">
      {items.map((item, idx) => (
        <div key={idx} className="relative pl-8 sm:pl-10 group">
          <div className="absolute left-[-9px] top-1.5 h-4 w-4 rounded-full border-2 border-emerald-500 bg-white dark:bg-[#0b0f14] shadow-[0_0_10px_rgba(16,185,129,0.3)] transition-all duration-300 group-hover:scale-125 group-hover:bg-emerald-500 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white transition-colors group-hover:text-emerald-600 dark:group-hover:text-emerald-300 font-[var(--font-playfair)]">{item.title}</h3>
            <span className="inline-flex rounded-full bg-black/5 dark:bg-white/10 px-3 py-1 text-[10px] font-medium text-neutral-600 dark:text-neutral-300 uppercase tracking-wider backdrop-blur-md">
              {item.time}
            </span>
          </div>
          
          <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium tracking-wide uppercase mb-3">
            {item.org}
          </p>
          <p className="text-neutral-700 dark:text-neutral-400 text-sm leading-relaxed max-w-2xl">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
