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
        <div key={group.category} className="editorial-card p-6 space-y-3.5 flex flex-col justify-between">
          <div className="space-y-1.5">
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

          {/* Clean calm inline text separated by middle dots */}
          <div className="pt-3 border-t border-[var(--border-subtle)]">
            <p className="text-sm leading-6 text-[var(--text-main)]">
              {group.skills.join(" · ")}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
