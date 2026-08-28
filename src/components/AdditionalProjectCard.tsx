import { AdditionalProject } from "../content/types";
import { CheckCircle2 } from "lucide-react";
import { GithubIcon } from "./Icons";

interface AdditionalProjectCardProps {
  project: AdditionalProject;
}

export default function AdditionalProjectCard({ project }: AdditionalProjectCardProps) {
  return (
    <div className="editorial-card p-5 flex flex-col justify-between gap-4">
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <span className="mono-tag text-[11px] text-[var(--secondary-accent)] uppercase tracking-wider">
            {project.category}
          </span>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-[var(--primary-accent)] transition-colors"
              aria-label={`${project.title} GitHub repository`}
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
        </div>

        <h4 className="text-base font-bold text-[var(--text-main)]">
          {project.title}
        </h4>

        <p className="text-xs text-[var(--text-muted)] leading-relaxed">
          {project.description}
        </p>

        <ul className="space-y-1 pt-1">
          {project.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-1.5 text-[11px] text-[var(--text-muted)]">
              <CheckCircle2 className="w-3 h-3 text-[var(--primary-accent)] shrink-0 mt-0.5" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-3 border-t border-[var(--border-color)] flex flex-wrap gap-1">
        {project.technologies.map((t) => (
          <span
            key={t}
            className="mono-tag px-1.5 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--badge-text)] text-[10px]"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
