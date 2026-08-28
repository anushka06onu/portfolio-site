import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { featuredProjects, additionalProjects } from "../../content/projects";
import { ArrowLeft, ArrowRight, ExternalLink, Globe } from "lucide-react";
import { GithubIcon } from "../../components/Icons";

export const metadata: Metadata = {
  title: "Projects & Engineering Work",
  description:
    "Software-defined networking prototypes, distributed cluster telemetry, healthcare analytics, and institutional web applications by Fateha Hossain."
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-8 sm:py-14 space-y-12">
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--primary-accent)] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>

      <header className="space-y-3 border-b border-[var(--border-color)] pb-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-[var(--primary-accent)]">
          Engineering Portfolio
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-main)]">
          Projects &amp; Systems
        </h1>
        <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed max-w-2xl">
          Core engineering implementations spanning software-defined networking, cluster monitoring, full-stack web platforms, and Linux infrastructure.
        </p>
      </header>

      {/* Featured Flagship Case Studies */}
      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-main)]">
          Flagship Systems &amp; Case Studies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => {
            const screenshot = `/projects/${project.slug}/${
              project.slug === "computepulse" || project.slug === "academic-analytics"
                ? "dashboard.png?v=2"
                : "overview.png?v=2"
            }`;

            return (
              <div
                key={project.slug}
                className="editorial-card editorial-card-accent p-6 flex flex-col justify-between gap-5"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-2.5">
                    <span className="text-xs font-semibold text-[var(--primary-accent)] uppercase">
                      {project.categoryTrack}
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-[var(--surface-subtle)] text-[var(--text-muted)] border border-[var(--border-color)]">
                      {project.statusLabel}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[var(--text-main)]">
                    <Link
                      href={project.links.caseStudy}
                      className="hover:text-[var(--primary-accent)] transition-colors"
                    >
                      {project.title}
                    </Link>
                  </h3>

                  <div className="relative w-full h-44 rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--surface-subtle)]">
                    <Image
                      src={screenshot}
                      alt={project.title}
                      fill
                      unoptimized
                      className="object-cover object-top hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 500px"
                    />
                  </div>

                  <p className="text-sm leading-6 text-[var(--text-muted)]">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.slice(0, 5).map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-0.5 rounded-md bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)] font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[var(--border-color)] flex flex-wrap items-center gap-3 text-sm font-medium">
                  <Link
                    href={project.links.caseStudy}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-semibold shadow-sm transition-all"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[var(--text-muted)] hover:text-[var(--text-main)]"
                    >
                      <span>Demo</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}

                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[var(--text-muted)] hover:text-[var(--text-main)]"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Supporting Production & Infrastructure Work */}
      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-main)]">
          Additional Production &amp; Systems Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {additionalProjects.map((project, idx) => {
            const screenshot = project.title.includes("GCPC")
              ? "/projects/gcpc-diu/homepage.png?v=3"
              : project.title.includes("Study Hub")
              ? "/projects/study-hub/overview.png?v=3"
              : null;

            return (
              <div
                key={idx}
                className="editorial-card p-5 space-y-3.5 flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <span className="text-xs font-semibold text-[var(--secondary-accent)] uppercase">
                    {project.category}
                  </span>
                  <h3 className="text-base font-bold text-[var(--text-main)]">
                    {project.title}
                  </h3>

                  {screenshot && (
                    <div className="relative w-full h-32 rounded-lg overflow-hidden border border-[var(--border-color)] bg-[var(--surface-subtle)]">
                      <Image
                        src={screenshot}
                        alt={project.title}
                        fill
                        unoptimized
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 300px"
                      />
                    </div>
                  )}

                  <p className="text-xs leading-5 text-[var(--text-muted)]">
                    {project.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-[var(--border-color)] flex items-center gap-3 text-xs font-medium">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[var(--primary-accent)] hover:underline"
                    >
                      <Globe className="w-3 h-3" />
                      <span>Live Site</span>
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[var(--text-muted)] hover:text-[var(--text-main)]"
                    >
                      <GithubIcon className="w-3 h-3" />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
