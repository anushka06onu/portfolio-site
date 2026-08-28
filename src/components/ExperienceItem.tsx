import { ExperienceRole } from "../content/types";
import { Briefcase, CheckCircle2 } from "lucide-react";

interface ExperienceItemProps {
  role: ExperienceRole;
}

export default function ExperienceItem({ role }: ExperienceItemProps) {
  return (
    <div className="editorial-card p-6 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-[var(--border-subtle)] pb-3">
        <div>
          <h4 className="text-base sm:text-lg font-bold text-[var(--text-main)]">
            {role.title}
          </h4>
          <p className="text-xs sm:text-sm font-mono text-[var(--primary-accent)]">
            {role.organization} · {role.location}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="mono-tag text-xs text-[var(--text-muted)] font-medium">
            {role.period}
          </span>
          <span className="mono-tag text-[10px] px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--badge-text)]">
            {role.type}
          </span>
        </div>
      </div>

      <ul className="space-y-2">
        {role.bullets.map((bullet, idx) => (
          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
            <span className="text-[var(--primary-accent)] font-bold mt-0.5">•</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      {role.technologies && role.technologies.length > 0 && (
        <div className="pt-2 flex flex-wrap gap-1.5 items-center">
          <span className="mono-tag text-[10px] text-[var(--text-muted)] mr-1">Stack:</span>
          {role.technologies.map((t) => (
            <span
              key={t}
              className="mono-tag px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--badge-text)] text-[10px]"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
