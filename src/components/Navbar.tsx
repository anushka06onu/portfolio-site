"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { siteConfig } from "../content/site";
import { Menu, X, FileDown, ExternalLink, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Selected Work", href: "/#work" },
    { label: "Research", href: "/#research" },
    { label: "Experience", href: "/#experience" },
    { label: "About", href: "/about" },
  ];

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <header className="sticky top-0 z-50 w-full border-b border-[var(--border-color)] bg-[var(--bg-color)]/80 backdrop-blur-xl transition-all">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 h-16">
          <Link
            href="/"
            className="group flex items-center gap-2.5 font-mono text-sm font-semibold tracking-tight text-[var(--text-main)] transition-colors"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-teal-400 to-cyan-600 text-xs font-bold text-slate-950 shadow-sm shadow-teal-500/20">
              F
            </span>
            <span className="group-hover:text-[var(--primary-accent)] transition-colors">
              {siteConfig.name}
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[var(--surface-subtle)] border border-[var(--border-subtle)] text-[11px] font-normal text-[var(--text-muted)]">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
              Health Informatics
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href.replace("/#", "/"));
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-xs font-mono transition-colors ${
                    isActive
                      ? "text-[var(--primary-accent)] font-semibold"
                      : "text-[var(--text-muted)] hover:text-[var(--text-main)]"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}

            <a
              href={siteConfig.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-color)] bg-[var(--surface)] px-3 py-1.5 text-xs font-mono font-medium text-[var(--text-main)] hover:border-[var(--primary-accent)] hover:text-[var(--primary-accent)] hover:shadow-sm transition-all"
            >
              <FileDown className="w-3.5 h-3.5 text-[var(--primary-accent)]" />
              <span>View CV</span>
              <ExternalLink className="w-3 h-3 text-[var(--text-muted)]" />
            </a>

            <ThemeToggle />
          </nav>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="p-2 rounded-lg border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)] hover:bg-[var(--surface-subtle)]"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden border-t border-[var(--border-color)] bg-[var(--surface)]/95 backdrop-blur-lg px-5 py-4 space-y-3 shadow-xl">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-sm py-1.5 font-mono text-[var(--text-muted)] hover:text-[var(--primary-accent)]"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-[var(--border-color)]">
              <a
                href={siteConfig.links.resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-2 text-xs font-mono text-[var(--primary-accent)] font-semibold"
              >
                <FileDown className="w-4 h-4" />
                <span>View Curriculum Vitae (PDF)</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
