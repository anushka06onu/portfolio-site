import Image from "next/image";
import { AdditionalProject } from "../content/types";
import { CheckCircle2, ExternalLink, Globe, Building } from "lucide-react";
import { GithubIcon } from "./Icons";

interface AdditionalProjectCardProps {
  project: AdditionalProject;
}

export default function AdditionalProjectCard({ project }: AdditionalProjectCardProps) {
  const screenshot = project.title.includes("GCPC")
    ? "/projects/gcpc-diu/homepage.png?v=3"
    : project.title.includes("Study Hub")
    ? "/projects/study-hub/overview.png?v=3"
    : null;

  return (
    <div className="editorial-card p-6 flex flex-col justify-between gap-5">
      <div className="space-y-3.5">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-1.5 border-b border-[var(--border-subtle)] pb-2.5">
          <span className="text-sm font-semibold text-[var(--primary-accent)]">
            {project.category}
          </span>
          {project.status && (
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-[var(--surface-subtle)] text-[var(--text-muted)] border border-[var(--border-color)]">
              {project.status.includes("university-managed") || project.status.includes("Official website")
                ? "Institutional deployment"
                : "Active project"}
            </span>
          )}
        </div>

        {/* Title */}
        <div>
          <h4 className="text-lg font-bold text-[var(--text-main)]">
            {project.title}
          </h4>
        </div>

        {/* Screenshot if available (GCPC / Study Hub) */}
        {screenshot && (
          <div className="relative w-full h-40 rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--surface-subtle)] shadow-inner">
            <Image
              src={screenshot}
              alt={`${project.title} Interface`}
              fill
              unoptimized
              className="object-cover object-top hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
        )}

        {/* One-line Real-World Context */}
        <p className="text-sm leading-6 text-[var(--text-muted)]">
          {project.description}
        </p>

        {/* One-Sentence Contribution */}
        {project.contribution && (
          <p className="text-sm leading-6 text-[var(--text-main)] bg-[var(--surface-subtle)]/70 p-3 rounded-lg border border-[var(--border-subtle)]">
            <strong className="text-[var(--primary-accent)] font-semibold">Contribution: </strong>
            {project.contribution}
          </p>
        )}
      </div>

      {/* Footer: Tech Stack & Action Links */}
      <div className="pt-3.5 border-t border-[var(--border-color)] space-y-3.5">
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((t) => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 rounded-md bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)] font-medium"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2 pt-1 text-sm font-medium">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-semibold shadow-sm transition-all"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Visit Website</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)] hover:border-[var(--primary-accent)] hover:text-[var(--primary-accent)] hover:bg-[var(--surface-subtle)] transition-all"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Source Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
