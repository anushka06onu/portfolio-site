import { siteConfig } from "../content/site";
import { Mail, FileDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-muted)] py-10 px-4 sm:px-6 transition-colors">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Name and Description */}
        <div className="text-center md:text-left space-y-1">
          <p className="text-sm font-semibold text-[var(--text-main)] flex items-center justify-center md:justify-start gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded bg-gradient-to-br from-teal-400 to-cyan-600 text-[10px] font-bold text-slate-950">
              F
            </span>
            <span>{siteConfig.name}</span>
          </p>
          <p className="text-xs text-[var(--text-muted)]">
            Health Informatics · Intelligent Systems · Backend Engineering
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-5 text-sm font-medium">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[var(--text-muted)] hover:text-[var(--primary-accent)] transition-colors"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[var(--text-muted)] hover:text-[#0077B5] transition-colors"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4 text-[#0077B5]" />
            <span>LinkedIn</span>
          </a>
          <a
            href={`mailto:${siteConfig.links.email}`}
            className="flex items-center gap-1.5 text-[var(--text-muted)] hover:text-[var(--primary-accent)] transition-colors"
            aria-label="Email Address"
          >
            <Mail className="w-4 h-4" />
            <span>Email</span>
          </a>
          <a
            href={siteConfig.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[var(--text-muted)] hover:text-[var(--primary-accent)] transition-colors"
            aria-label="Curriculum Vitae"
          >
            <FileDown className="w-4 h-4 text-[var(--primary-accent)]" />
            <span>CV</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
