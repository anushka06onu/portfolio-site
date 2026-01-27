import Link from "next/link";
import { site } from "../content/site";

const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/education", label: "Education" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0f14]/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="font-semibold text-white">
          {site.name}
        </Link>

        <nav className="flex gap-2 text-sm">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="relative rounded-full px-3 py-1.5 text-neutral-200 transition-all duration-300 hover:-translate-y-0.5 hover:text-white hover:bg-white/10 hover:shadow-[0_10px_30px_rgba(56,189,248,0.18)]"
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
