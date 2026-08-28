import { ResearchOutput } from "../content/types";
import { Tag } from "lucide-react";

interface ResearchCardProps {
  output: ResearchOutput;
  useShortTitle?: boolean;
  showTopics?: boolean;
}

export default function ResearchCard({
  output,
  useShortTitle = false,
  showTopics = true
}: ResearchCardProps) {
  const displayTitle = useShortTitle && output.shortTitle ? output.shortTitle : output.title;

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
        {/* Top Venue & Status */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-2.5">
          <span className="text-sm font-medium text-[var(--secondary-accent)]">
            {output.venueOrType} · {output.year}
          </span>
          <span className={`text-xs px-2.5 py-0.5 rounded-full border font-medium ${getStatusBadgeStyle(output.status)}`}>
            {output.status}
          </span>
        </div>

        {/* Title */}
        <h4 className="text-lg font-bold text-[var(--text-main)] leading-7">
          {displayTitle}
        </h4>

        {/* Summary */}
        <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
          {output.summary}
        </p>
      </div>

      {/* Topics (Shown on /research, omitted on homepage for clarity) */}
      {showTopics && (
        <div className="pt-3 border-t border-[var(--border-color)] flex flex-wrap gap-1.5 items-center">
          <Tag className="w-3.5 h-3.5 text-[var(--text-muted)] shrink-0 mr-1" />
          {output.topics.map((topic) => (
            <span
              key={topic}
              className="text-xs px-2.5 py-0.5 rounded-md bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)] font-medium"
            >
              {topic}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
