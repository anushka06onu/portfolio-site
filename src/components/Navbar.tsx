"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "../content/site";

const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/education", label: "Education" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0f14]/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-semibold text-white">
          {site.name}
          </Link>
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="rounded-full border border-white/10 bg-white/5 p-2 text-white transition-all hover:bg-white/10 sm:hidden"
          >
            <span className="sr-only">Toggle menu</span>
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded bg-white transition-transform duration-300 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 rounded bg-white transition-opacity duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 bottom-0 h-0.5 w-5 rounded bg-white transition-transform duration-300 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        <div
          className={`overflow-hidden transition-[max-height,opacity,transform] duration-300 ease-out sm:overflow-visible sm:transition-none ${
            open
              ? "max-h-96 opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-2 sm:max-h-none sm:opacity-100 sm:translate-y-0"
          }`}
        >
          <nav className="flex flex-col gap-1 text-xs text-neutral-200 sm:flex sm:flex-row sm:flex-wrap sm:items-center sm:gap-2 sm:text-sm">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="relative rounded-full px-2 py-1 transition-all duration-300 hover:-translate-y-0.5 hover:text-white hover:bg-white/10 hover:shadow-[0_10px_30px_rgba(56,189,248,0.18)] sm:px-3 sm:py-1.5"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
