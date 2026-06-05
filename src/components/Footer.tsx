import React from "react";
import Link from "next/link";
import { site } from "../content/site";

const socials = [
  { key: "email", href: `mailto:${site.links.email}`, label: "Email", icon: EmailIcon },
  { key: "linkedin", href: site.links.linkedin, label: "LinkedIn", icon: LinkedInIcon },
  site.links.github
    ? { key: "github", href: site.links.github, label: "GitHub", icon: GitHubIcon }
    : null
].filter(Boolean) as { key: string; href: string; label: string; icon: () => React.ReactNode }[];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-black/5 dark:border-white/5 bg-white dark:bg-[#05070b] py-10 text-sm text-neutral-600 dark:text-neutral-300 transition-colors duration-500">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 dark:via-white/20 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-[-40%] h-48 bg-[radial-gradient(70%_120%_at_50%_120%,rgba(56,189,248,0.15),transparent)]" />
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <Link
          href="/"
          className="text-base font-semibold text-neutral-900 dark:text-white transition hover:text-emerald-500 dark:hover:text-emerald-200"
        >
          Fateha Hossain Anushka
        </Link>
        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <Link
              key={s.key}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noreferrer" : undefined}
              className="group flex h-9 w-9 items-center justify-center rounded-full bg-black/5 dark:bg-white/5 text-neutral-900 dark:text-white transition hover:-translate-y-0.5 hover:bg-black/10 dark:hover:bg-white/10 hover:shadow-[0_10px_25px_rgba(16,185,129,0.15)] dark:hover:shadow-[0_10px_25px_rgba(16,185,129,0.25)]"
              aria-label={s.label}
            >
              <s.icon />
            </Link>
          ))}
        </div>
        <p className="text-neutral-400">© 2026</p>
      </div>
    </footer>
  );
}

function EmailIcon() {
  return (
    <svg
      className="h-4 w-4 text-emerald-600 dark:text-emerald-200 group-hover:text-emerald-700 dark:group-hover:text-emerald-100"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      className="h-4 w-4 text-sky-600 dark:text-sky-200 group-hover:text-sky-700 dark:group-hover:text-sky-100"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8.5h4.56V24H.22zM8.9 8.5h4.37v2.12h.06c.61-1.16 2.1-2.38 4.33-2.38 4.63 0 5.48 3.05 5.48 7.02V24h-4.56v-6.78c0-1.62-.03-3.7-2.25-3.7-2.25 0-2.6 1.76-2.6 3.58V24H8.9z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      className="h-4 w-4 text-neutral-700 dark:text-neutral-200 group-hover:text-black dark:group-hover:text-white"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.43 7.86 10.96.58.1.79-.25.79-.55 0-.27-.01-1.18-.02-2.14-3.2.7-3.88-1.37-3.88-1.37-.53-1.35-1.28-1.7-1.28-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.15 1.17a10.9 10.9 0 0 1 2.87-.39c.97.01 1.95.13 2.87.39 2.18-1.48 3.14-1.17 3.14-1.17.63 1.57.24 2.73.12 3.02.74.8 1.18 1.82 1.18 3.07 0 4.41-2.69 5.39-5.26 5.67.41.35.77 1.04.77 2.1 0 1.52-.01 2.74-.01 3.11 0 .3.21.65.8.54A10.5 10.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  );
}
