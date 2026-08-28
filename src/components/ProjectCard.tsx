import Image from "next/image";
import Link from "next/link";
import { Project } from "../content/types";
import { ExternalLink, ArrowRight, CheckCircle2 } from "lucide-react";
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

  // Show up to 3 evidence points and up to 6 technologies on homepage card preview
  const previewEvidence = project.evidence.slice(0, 3);
  const previewTech = project.technologies.slice(0, 6);
  const remainingTechCount = project.technologies.length - previewTech.length;

  return (
    <article className="editorial-card editorial-card-accent p-6 sm:p-7 flex flex-col justify-between gap-6">
      <div className="space-y-4">
        {/* Category & Status */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-3">
          <span className="text-sm font-semibold text-[var(--primary-accent)] tracking-wide">
            {project.categoryTrack}
          </span>
          <span className="text-xs px-2.5 py-0.5 rounded-full font-medium bg-[var(--surface-subtle)] text-[var(--text-muted)] border border-[var(--border-color)]">
            {project.status === "prototype"
              ? "Research prototype"
              : project.slug === "computepulse"
              ? "Hackathon prototype"
              : "Production platform"}
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
          <p className="mt-1 text-sm sm:text-base font-medium text-[var(--secondary-accent)]">
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

        {/* Summary Description */}
        <p className="text-base leading-7 text-[var(--text-main)]">
          {project.summary}
        </p>

        {/* Key Highlights / Evidence (3 points) */}
        <ul className="space-y-1.5 pt-1">
          {previewEvidence.map((point, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm leading-6 text-[var(--text-muted)]">
              <CheckCircle2 className="w-4 h-4 text-[var(--primary-accent)] shrink-0 mt-1" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer: Tech Stack & Action Links */}
      <div className="pt-4 border-t border-[var(--border-color)] space-y-4">
        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5">
          {previewTech.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 rounded-md bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)] font-medium"
            >
              {tech}
            </span>
          ))}
          {remainingTechCount > 0 && (
            <span className="text-xs px-2 py-1 rounded-md bg-[var(--surface-subtle)] text-[var(--text-muted)] font-medium">
              +{remainingTechCount}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5 text-sm font-medium">
          <Link
            href={project.links.caseStudy}
            className="btn-gradient inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-slate-950 font-semibold shadow-md shadow-teal-500/15"
          >
            <span>Case Study</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)]"
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
              className="btn-outline inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)]"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Source Code</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
