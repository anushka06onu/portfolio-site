import Image from "next/image";
import Link from "next/link";
import { Project } from "../content/types";
import { ExternalLink, ArrowRight, ShieldCheck } from "lucide-react";
import { GithubIcon } from "./Icons";

interface ProjectCardProps {
  project: Project;
  diagramPath?: string;
}

export default function ProjectCard({ project, diagramPath }: ProjectCardProps) {
  const defaultDiagram = `/projects/${project.slug}/${
    project.slug === "computepulse" || project.slug === "academic-analytics"
      ? "dashboard.svg"
      : "overview.svg"
  }`;

  const imageSrc = diagramPath || defaultDiagram;

  return (
    <article className="editorial-card p-6 sm:p-8 flex flex-col justify-between gap-6">
      {/* Top Metadata */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-4">
          <span className="mono-tag font-semibold text-[var(--primary-accent)] uppercase tracking-wider">
            {project.categoryTrack}
          </span>
          <span
            className={`mono-tag px-2.5 py-1 rounded-full text-[11px] border ${
              project.status === "complete"
                ? "bg-[var(--primary-accent-subtle)] text-[var(--primary-accent)] border-[var(--primary-accent)]/30"
                : "bg-[var(--secondary-accent-subtle)] text-[var(--secondary-accent)] border-[var(--secondary-accent)]/30"
            }`}
          >
            {project.statusLabel}
          </span>
        </div>

        {/* Title and Tagline */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-main)]">
            <Link
              href={project.links.caseStudy}
              className="hover:text-[var(--primary-accent)] transition-colors inline-flex items-center gap-1.5"
            >
              {project.title}
            </Link>
          </h3>
          <p className="mt-1 text-sm font-medium text-[var(--secondary-accent)]">
            {project.tagline}
          </p>
        </div>

        {/* Visual Architecture Preview */}
        <div className="relative w-full h-48 sm:h-56 rounded-lg overflow-hidden border border-[var(--border-color)] bg-[var(--surface-subtle)]">
          <Image
            src={imageSrc}
            alt={`${project.title} Architecture and Workflow`}
            fill
            className="object-contain p-2"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          />
        </div>

        {/* One-Sentence Outcome */}
        <p className="text-sm text-[var(--text-main)] font-normal leading-relaxed">
          {project.summary}
        </p>

        {/* Why it Matters & Contribution */}
        <div className="space-y-2.5 text-xs sm:text-sm bg-[var(--surface-subtle)] p-4 rounded-lg border border-[var(--border-subtle)]">
          <div>
            <span className="font-semibold font-mono text-[var(--text-main)] uppercase tracking-wide text-[11px] block">
              Why it matters
            </span>
            <p className="mt-0.5 text-[var(--text-muted)] leading-relaxed">
              {project.whyItMatters}
            </p>
          </div>
          <div className="pt-2 border-t border-[var(--border-color)]">
            <span className="font-semibold font-mono text-[var(--text-main)] uppercase tracking-wide text-[11px] block">
              My contribution
            </span>
            <p className="mt-0.5 text-[var(--text-muted)] leading-relaxed">
              {project.myContribution}
            </p>
          </div>
        </div>

        {/* Verified Evidence Points */}
        <div className="space-y-1.5 pt-1">
          <span className="mono-tag font-semibold text-[var(--text-main)] uppercase block text-[11px]">
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
      <div className="pt-4 border-t border-[var(--border-color)] space-y-4">
        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="mono-tag px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)] text-[11px]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-mono">
          <Link
            href={project.links.caseStudy}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[var(--primary-accent)] text-white font-medium hover:opacity-90 transition-opacity"
          >
            <span>Read Case Study</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)] hover:border-[var(--primary-accent)] hover:text-[var(--primary-accent)] transition-colors"
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
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)] hover:border-[var(--primary-accent)] hover:text-[var(--primary-accent)] transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Source Code</span>
            </a>
          )}

          {project.links.methodology && (
            <a
              href={project.links.methodology}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[var(--border-color)] bg-[var(--surface)] text-[var(--secondary-accent)] hover:border-[var(--secondary-accent)] transition-colors"
            >
              <span>Methodology &amp; Report</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
