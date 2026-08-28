import { siteConfig } from "../content/site";
import { Cpu, Server, Network, Layout, Wrench } from "lucide-react";

export default function SkillsMatrix() {
  const categoryIcons = [
    <Cpu key="1" className="w-4 h-4 text-teal-400" />,
    <Server key="2" className="w-4 h-4 text-blue-400" />,
    <Network key="3" className="w-4 h-4 text-cyan-400" />,
    <Layout key="4" className="w-4 h-4 text-emerald-400" />,
    <Wrench key="5" className="w-4 h-4 text-purple-400" />
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {siteConfig.skills.map((group, idx) => (
        <div key={group.category} className="editorial-card p-5 space-y-3 flex flex-col justify-between">
          <div className="space-y-1.5">
            <h4 className="text-sm font-bold font-mono text-[var(--text-main)] flex items-center gap-2">
              <div className="p-1 rounded-md bg-[var(--surface-subtle)] border border-[var(--border-subtle)]">
                {categoryIcons[idx % categoryIcons.length]}
              </div>
              <span>{group.category}</span>
            </h4>
            <p className="text-xs text-[var(--text-muted)]">
              {group.description}
            </p>
          </div>

          <div className="pt-2.5 border-t border-[var(--border-subtle)] flex flex-wrap gap-1.5">
            {group.skills.map((skill) => (
              <span
                key={skill}
                className="mono-tag px-2 py-0.5 rounded-md bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)] text-[11px] font-medium hover:border-[var(--primary-accent)]/50 transition-colors"
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
