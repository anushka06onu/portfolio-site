import Image from "next/image";
import Link from "next/link";
import { Project } from "../content/types";
import { ExternalLink, ArrowRight, ShieldCheck } from "lucide-react";
import { GithubIcon } from "./Icons";

interface ProjectCardProps {
  project: Project;
  imagePath?: string;
}

export default function ProjectCard({ project, imagePath }: ProjectCardProps) {
  const defaultScreenshot = `/projects/${project.slug}/${
    project.slug === "computepulse" || project.slug === "academic-analytics"
      ? "dashboard.png?v=2"
      : "overview.png?v=2"
  }`;

  const imageSrc = imagePath || defaultScreenshot;

  return (
    <article className="editorial-card editorial-card-accent p-6 sm:p-7 flex flex-col justify-between gap-6">
      {/* Top Metadata */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-3.5">
          <span className="mono-tag text-xs font-semibold text-[var(--primary-accent)] tracking-wide">
            {project.categoryTrack}
          </span>
          <span className="mono-tag px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[var(--surface-subtle)] text-[var(--text-muted)] border border-[var(--border-color)]">
            {project.statusLabel}
          </span>
        </div>

        {/* Title and Tagline */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-main)] group">
            <Link
              href={project.links.caseStudy}
              className="inline-flex items-center gap-1.5 hover:text-[var(--primary-accent)] transition-colors"
            >
              <span>{project.title}</span>
              <ArrowRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[var(--primary-accent)]" />
            </Link>
          </h3>
          <p className="mt-1 text-xs sm:text-sm font-medium text-[var(--secondary-accent)]">
            {project.tagline}
          </p>
        </div>

        {/* Genuine Application Screenshot Preview */}
        <div className="relative w-full h-48 sm:h-56 rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--surface-subtle)] shadow-inner">
          <Image
            src={imageSrc}
            alt={`${project.title} Interface Screenshot`}
            fill
            unoptimized
            className="object-cover object-top transition-transform duration-300 hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          />
        </div>

        {/* One-Sentence Outcome */}
        <p className="text-sm text-[var(--text-main)] leading-relaxed">
          {project.summary}
        </p>

        {/* Why it Matters & Contribution Box */}
        <div className="space-y-2 text-xs bg-[var(--surface-subtle)]/70 p-3.5 rounded-xl border border-[var(--border-subtle)]">
          <div>
            <span className="font-semibold font-mono text-[var(--text-main)] uppercase tracking-wider text-[10px] block text-[var(--primary-accent)]">
              Why it matters
            </span>
            <p className="mt-0.5 text-[var(--text-muted)] leading-relaxed">
              {project.whyItMatters}
            </p>
          </div>
          <div className="pt-2 border-t border-[var(--border-color)]">
            <span className="font-semibold font-mono text-[var(--text-main)] uppercase tracking-wider text-[10px] block text-[var(--secondary-accent)]">
              My contribution
            </span>
            <p className="mt-0.5 text-[var(--text-muted)] leading-relaxed">
              {project.myContribution}
            </p>
          </div>
        </div>

        {/* Verified Evidence Points */}
        <div className="space-y-1.5 pt-0.5">
          <span className="mono-tag font-semibold text-[var(--text-main)] block text-[11px]">
            Verified Evidence &amp; Verification
          </span>
          <ul className="space-y-1">
            {project.evidence.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                <ShieldCheck className="w-3.5 h-3.5 text-[var(--primary-accent)] shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer: Tech Stack & Action Links */}
      <div className="pt-3 border-t border-[var(--border-color)] space-y-3.5">
        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="mono-tag px-2 py-0.5 rounded-md bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)] text-[11px] font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5 pt-1 text-xs font-mono">
          <Link
            href={project.links.caseStudy}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-bold shadow-md shadow-teal-500/15 transition-all"
          >
            <span>Case Study</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)] hover:border-[var(--primary-accent)] hover:text-[var(--primary-accent)] hover:bg-[var(--surface-subtle)] transition-all"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}

          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)] hover:border-[var(--primary-accent)] hover:text-[var(--primary-accent)] hover:bg-[var(--surface-subtle)] transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Source Code</span>
            </a>
          )}

          {project.links.methodology && (
            <a
              href={project.links.methodology}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-[var(--border-color)] bg-[var(--surface)] text-[var(--secondary-accent)] hover:border-[var(--secondary-accent)] hover:bg-[var(--surface-subtle)] transition-all"
            >
              <span>Methodology</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
