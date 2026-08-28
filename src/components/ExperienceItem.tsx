import { ExperienceRole } from "../content/types";
import { Briefcase, Building2, Calendar } from "lucide-react";

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
          <p className="text-xs sm:text-sm font-mono text-[var(--primary-accent)] font-medium flex items-center gap-1.5 mt-0.5">
            <Building2 className="w-3.5 h-3.5" />
            <span>{role.organization} · {role.location}</span>
          </p>
        </div>
        <div className="flex items-center gap-2 mt-1 sm:mt-0">
          <span className="mono-tag text-xs text-[var(--text-muted)] font-medium flex items-center gap-1">
            <Calendar className="w-3 h-3 text-[var(--text-muted)]" />
            {role.period}
          </span>
          <span className="mono-tag text-[10px] px-2 py-0.5 rounded-full bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)] font-medium">
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
        <div className="pt-2 border-t border-[var(--border-subtle)] flex flex-wrap gap-1.5 items-center">
          <span className="mono-tag text-[10px] text-[var(--text-muted)] mr-1">Stack:</span>
          {role.technologies.map((t) => (
            <span
              key={t}
              className="mono-tag px-2 py-0.5 rounded-md bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)] text-[10px]"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
