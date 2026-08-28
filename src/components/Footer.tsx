import { siteConfig } from "../content/site";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-muted)] py-8 px-4 sm:px-6 transition-colors">
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Name and Brand */}
        <div className="flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded bg-gradient-to-br from-teal-400 to-cyan-600 text-[10px] font-bold text-slate-950">
            F
          </span>
          <span className="text-sm font-semibold text-[var(--text-main)]">
            {siteConfig.name}
          </span>
          <span className="text-xs text-[var(--text-muted)]">
            · © 2026
          </span>
        </div>

        {/* Minimal Links */}
        <div className="flex items-center gap-5 text-xs font-medium">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[var(--text-muted)] hover:text-[var(--primary-accent)] transition-colors"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[var(--text-muted)] hover:text-[#0077B5] transition-colors"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-3.5 h-3.5 text-[#0077B5]" />
            <span>LinkedIn</span>
          </a>
          <a
            href={`mailto:${siteConfig.links.email}`}
            className="flex items-center gap-1.5 text-[var(--text-muted)] hover:text-[var(--primary-accent)] transition-colors"
            aria-label="Email Address"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
