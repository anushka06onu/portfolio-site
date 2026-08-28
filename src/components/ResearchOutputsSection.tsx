"use client";

import { useState } from "react";
import { ResearchOutput } from "../content/types";
import ResearchCard from "./ResearchCard";
import { ArrowLeft, ArrowRight, Layers, Sparkles } from "lucide-react";

interface ResearchOutputsSectionProps {
  outputs: ResearchOutput[];
}

export default function ResearchOutputsSection({ outputs }: ResearchOutputsSectionProps) {
  const [currentPage, setCurrentPage] = useState<0 | 1>(0);

  const pageSize = 3;
  const totalPages = Math.ceil(outputs.length / pageSize);
  const currentOutputs = outputs.slice(currentPage * pageSize, (currentPage + 1) * pageSize);

  return (
    <div className="space-y-4">
      {/* Top Header & Page Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[var(--surface)] p-3.5 sm:p-4 rounded-xl border border-[var(--border-color)]">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-[var(--surface-subtle)] text-[var(--primary-accent)] border border-[var(--border-subtle)]">
            <Layers className="w-4 h-4" />
          </span>
          <div>
            <h3 className="text-sm font-bold text-[var(--text-main)]">
              {currentPage === 0
                ? "Health Informatics & Vision Foundation Models (1–3)"
                : "Low-Resource Bangla NLP & Machine Translation (4–6)"}
            </h3>
            <p className="text-xs text-[var(--text-muted)]">
              Showing {currentPage * pageSize + 1}–{Math.min((currentPage + 1) * pageSize, outputs.length)} of {outputs.length} manuscripts
            </p>
          </div>
        </div>

        {/* Tab / Page Buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setCurrentPage(0)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              currentPage === 0
                ? "btn-gradient text-slate-950 shadow-sm"
                : "btn-outline border border-[var(--border-color)] text-[var(--text-muted)] bg-[var(--surface-subtle)]"
            }`}
          >
            Track 1: Health AI
          </button>
          <button
            onClick={() => setCurrentPage(1)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              currentPage === 1
                ? "btn-gradient text-slate-950 shadow-sm"
                : "btn-outline border border-[var(--border-color)] text-[var(--text-muted)] bg-[var(--surface-subtle)]"
            }`}
          >
            Track 2: Bangla NLP
          </button>

          <div className="flex items-center gap-1 pl-1 border-l border-[var(--border-subtle)]">
            <button
              onClick={() => setCurrentPage(0)}
              disabled={currentPage === 0}
              aria-label="Previous research page"
              className="p-1.5 rounded-lg border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--text-main)] disabled:opacity-40 disabled:hover:text-[var(--text-muted)] transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
              aria-label="Next research page"
              className="p-1.5 rounded-lg border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--text-main)] disabled:opacity-40 disabled:hover:text-[var(--text-muted)] transition-all"
            >
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* 3 Research Cards Grid for Current Page */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 transition-all duration-300">
        {currentOutputs.map((item, idx) => (
          <ResearchCard
            key={item.title}
            output={item}
            useShortTitle={false}
            showTopics={true}
          />
        ))}
      </div>
    </div>
  );
}
