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
        return "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/30";
    }
  };

  return (
    <div className="editorial-card p-6 flex flex-col justify-between gap-4">
      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-2.5">
          <span className="mono-tag text-xs text-[var(--secondary-accent)] font-medium">
            {output.venueOrType} · {output.year}
          </span>
          <span className={`mono-tag text-[11px] px-2.5 py-0.5 rounded-full border ${getStatusBadgeStyle(output.status)}`}>
            {output.status}
          </span>
        </div>

        <h4 className="text-base font-bold text-[var(--text-main)] leading-snug">
          {output.title}
        </h4>

        <p className="text-xs font-mono text-[var(--primary-accent)] font-medium">
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

      <div className="pt-2.5 border-t border-[var(--border-color)] flex flex-wrap gap-1.5 items-center">
        <Tag className="w-3 h-3 text-[var(--text-muted)] shrink-0 mr-0.5" />
        {output.topics.map((topic) => (
          <span
            key={topic}
            className="mono-tag px-2 py-0.5 rounded-md bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)] text-[10px]"
          >
            {topic}
          </span>
        ))}
      </div>
    </div>
  );
}
