import { siteConfig } from "../content/site";
import { Layers } from "lucide-react";

export default function SkillsMatrix() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {siteConfig.skills.map((group) => (
        <div key={group.category} className="editorial-card p-5 space-y-3 flex flex-col justify-between">
          <div className="space-y-1.5">
            <h4 className="text-sm font-bold font-mono text-[var(--text-main)] flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-[var(--primary-accent)]" />
              <span>{group.category}</span>
            </h4>
            <p className="text-xs text-[var(--text-muted)]">
              {group.description}
            </p>
          </div>

          <div className="pt-2 border-t border-[var(--border-subtle)] flex flex-wrap gap-1.5">
            {group.skills.map((skill) => (
              <span
                key={skill}
                className="mono-tag px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)] text-[11px]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
