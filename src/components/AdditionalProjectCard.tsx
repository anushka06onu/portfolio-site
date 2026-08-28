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
    <div className="editorial-card editorial-card-accent p-5 flex flex-col justify-between gap-4">
      <div className="space-y-3">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-1.5 border-b border-[var(--border-subtle)] pb-2.5">
          <span className="mono-tag text-[11px] text-[var(--primary-accent)] font-semibold">
            {project.category}
          </span>
          {project.status && (
            <span className="mono-tag text-[10px] px-2 py-0.5 rounded-full bg-[var(--surface-subtle)] text-[var(--text-muted)] border border-[var(--border-color)]">
              {project.status}
            </span>
          )}
        </div>

        {/* Title and Role */}
        <div>
          <h4 className="text-base sm:text-lg font-bold text-[var(--text-main)]">
            {project.title}
          </h4>
          {project.role && (
            <p className="text-xs font-mono text-[var(--secondary-accent)] font-medium mt-0.5">
              {project.role}
            </p>
          )}
        </div>

        {/* Screenshot if available (GCPC / Study Hub) */}
        {screenshot && (
          <div className="relative w-full h-36 rounded-lg overflow-hidden border border-[var(--border-color)] bg-[var(--surface-subtle)] shadow-inner">
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

        {/* Description & Contribution */}
        <p className="text-xs text-[var(--text-muted)] leading-relaxed">
          {project.description}
        </p>

        {project.contribution && (
          <p className="text-[11px] text-[var(--text-main)] bg-[var(--surface-subtle)]/70 p-2.5 rounded-lg border border-[var(--border-subtle)] leading-relaxed">
            <strong className="font-mono text-[var(--primary-accent)]">Contribution: </strong>
            {project.contribution}
          </p>
        )}

        {/* Highlights */}
        <ul className="space-y-1 pt-1">
          {project.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-1.5 text-[11px] text-[var(--text-muted)]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[var(--primary-accent)] shrink-0 mt-0.5" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer: Tech Stack & Action Links */}
      <div className="pt-3 border-t border-[var(--border-color)] space-y-3">
        <div className="flex flex-wrap gap-1">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="mono-tag px-2 py-0.5 rounded-md bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)] text-[10px] font-medium"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-[11px]">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-bold shadow-sm transition-all"
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
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)] hover:border-[var(--primary-accent)] hover:text-[var(--primary-accent)] hover:bg-[var(--surface-subtle)] transition-all"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Source Code</span>
            </a>
          )}

          {project.institution && (
            <a
              href={project.institution}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2 py-1.5 rounded-md border border-[var(--border-subtle)] bg-[var(--surface)] text-[var(--text-muted)] hover:text-[var(--text-main)] hover:border-[var(--border-color)] transition-all"
            >
              <Building className="w-3 h-3" />
              <span>DIU Portal</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-50" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
