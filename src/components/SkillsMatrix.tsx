import { siteConfig } from "../content/site";
import { Cpu, Server, Network, Layout, Wrench } from "lucide-react";

export default function SkillsMatrix() {
  const categoryIcons = [
    <Cpu key="1" className="w-4 h-4 text-teal-500" />,
    <Server key="2" className="w-4 h-4 text-blue-500" />,
    <Network key="3" className="w-4 h-4 text-cyan-500" />,
    <Layout key="4" className="w-4 h-4 text-emerald-500" />,
    <Wrench key="5" className="w-4 h-4 text-purple-500" />
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {siteConfig.skills.map((group, idx) => (
        <div key={group.category} className="editorial-card p-6 space-y-4 flex flex-col justify-between">
          <div className="space-y-2">
            <h4 className="text-base font-bold text-[var(--text-main)] flex items-center gap-2.5">
              <div className="p-1.5 rounded-md bg-[var(--surface-subtle)] border border-[var(--border-subtle)]">
                {categoryIcons[idx % categoryIcons.length]}
              </div>
              <span>{group.category}</span>
            </h4>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
              {group.description}
            </p>
          </div>

          <div className="pt-3 border-t border-[var(--border-subtle)] flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <span
                key={skill}
                className="text-xs px-2.5 py-1 rounded-md bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)] font-medium hover:border-[var(--primary-accent)]/50 transition-colors"
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
