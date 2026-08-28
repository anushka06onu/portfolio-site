import { ExperienceRole } from "../content/types";
import { Building2, Calendar } from "lucide-react";

interface ExperienceItemProps {
  role: ExperienceRole;
  showTech?: boolean;
}

export default function ExperienceItem({ role, showTech = false }: ExperienceItemProps) {
  return (
    <div className="editorial-card p-6 sm:p-7 space-y-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2.5 border-b border-[var(--border-subtle)] pb-3.5">
        <div>
          <h4 className="text-lg sm:text-xl font-bold text-[var(--text-main)]">
            {role.title}
          </h4>
          <p className="text-sm font-medium text-[var(--primary-accent)] flex items-center gap-1.5 mt-0.5">
            <Building2 className="w-4 h-4 shrink-0" />
            <span>{role.organization} · {role.location}</span>
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[var(--text-muted)] px-2.5 py-1 rounded-md bg-[var(--surface-subtle)] border border-[var(--border-subtle)] whitespace-nowrap">
            <Calendar className="w-3.5 h-3.5 text-[var(--primary-accent)] shrink-0" />
            <span>{role.period}</span>
          </span>
          <span className="text-xs px-2.5 py-1 rounded-md bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)] font-medium shrink-0">
            {role.type}
          </span>
        </div>
      </div>

      <ul className="space-y-2.5">
        {role.bullets.slice(0, 3).map((bullet, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-[var(--text-muted)] leading-7">
            <span className="text-[var(--primary-accent)] font-bold mt-1 text-base shrink-0">•</span>
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
