export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#0b0f14] text-neutral-100">
      {/* Background elements */}
      <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(1200px_circle_at_18%_-10%,rgba(16,185,129,0.1),transparent_60%),radial-gradient(1000px_circle_at_82%_0%,rgba(99,102,241,0.1),transparent_60%),linear-gradient(180deg,#0b0f14,#06080d)]" />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8 border-b border-white/10 pb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold font-[var(--font-playfair)] tracking-tight text-white">
            Portfolio Admin
          </h1>
          <a href="/" className="text-sm text-neutral-400 hover:text-emerald-400 transition-colors">
            &larr; Back to Site
          </a>
        </header>
        <main>{children}</main>
      </div>
    </div>
  )
}
