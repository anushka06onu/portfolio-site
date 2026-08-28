import { ExperienceRole } from "../content/types";
import { Building2, Calendar } from "lucide-react";

interface ExperienceItemProps {
  role: ExperienceRole;
  showTech?: boolean;
}

export default function ExperienceItem({ role, showTech = false }: ExperienceItemProps) {
  return (
    <div className="editorial-card p-6 sm:p-7 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-[var(--border-subtle)] pb-3.5">
        <div>
          <h4 className="text-lg sm:text-xl font-bold text-[var(--text-main)]">
            {role.title}
          </h4>
          <p className="text-sm font-medium text-[var(--primary-accent)] flex items-center gap-1.5 mt-0.5">
            <Building2 className="w-4 h-4" />
            <span>{role.organization} · {role.location}</span>
          </p>
        </div>
        <div className="flex items-center gap-2 mt-1 sm:mt-0">
          <span className="text-sm text-[var(--text-muted)] flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-[var(--text-muted)]" />
            {role.period}
          </span>
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)] font-medium">
            {role.type}
          </span>
        </div>
      </div>

      <ul className="space-y-2.5">
        {role.bullets.slice(0, 3).map((bullet, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-[var(--text-muted)] leading-7">
            <span className="text-[var(--primary-accent)] font-bold mt-1 text-base">•</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      {showTech && role.technologies && role.technologies.length > 0 && (
        <div className="pt-3 border-t border-[var(--border-subtle)] flex flex-wrap gap-1.5 items-center">
          <span className="text-xs font-semibold text-[var(--text-muted)] mr-1">Stack:</span>
          {role.technologies.map((t) => (
            <span
              key={t}
              className="text-xs px-2.5 py-0.5 rounded-md bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)] font-medium"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
