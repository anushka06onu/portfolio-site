import Link from "next/link";
import { site } from "../content/site";

const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="font-semibold text-neutral-900">
          {site.name.split(" ")[0]} {/* shows Fateha */}
        </Link>

        <nav className="flex gap-4 text-sm text-neutral-700">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-neutral-900">
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
