import { ResearchOutput } from "../content/types";
import { BookOpen, Tag, ExternalLink } from "lucide-react";

interface ResearchCardProps {
  output: ResearchOutput;
}

export default function ResearchCard({ output }: ResearchCardProps) {
  const getStatusBadgeStyle = (status: string) => {
    switch (status) {
      case "Published":
      case "Accepted":
        return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30";
      case "Under review":
      case "Submitted":
        return "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/30";
      case "Manuscript in preparation":
      case "Ongoing":
      default:
        return "bg-[var(--primary-accent-subtle)] text-[var(--primary-accent)] border-[var(--primary-accent)]/30";
    }
  };

  return (
    <div className="editorial-card p-6 flex flex-col justify-between gap-4">
      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-3">
          <span className="mono-tag text-xs text-[var(--secondary-accent)] font-medium">
            {output.venueOrType} · {output.year}
          </span>
          <span className={`mono-tag text-[11px] px-2.5 py-0.5 rounded-full border ${getStatusBadgeStyle(output.status)}`}>
            {output.status}
          </span>
        </div>

        <h4 className="text-base sm:text-lg font-bold text-[var(--text-main)] leading-snug">
          {output.title}
        </h4>

        <p className="text-xs font-mono text-[var(--primary-accent)]">
          Role: {output.role}
        </p>

        <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
          {output.summary}
        </p>

        {output.statusNote && (
          <p className="text-[11px] font-mono text-[var(--text-muted)] italic">
            Status note: {output.statusNote}
          </p>
        )}
      </div>

      <div className="pt-3 border-t border-[var(--border-color)] flex flex-wrap gap-1.5 items-center">
        <Tag className="w-3 h-3 text-[var(--text-muted)] shrink-0 mr-1" />
        {output.topics.map((topic) => (
          <span
            key={topic}
            className="mono-tag px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--badge-text)] text-[10px]"
          >
            {topic}
          </span>
        ))}
      </div>
    </div>
  );
}
