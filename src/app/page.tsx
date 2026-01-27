import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import Badge from "../components/Badge";
import ProjectCard from "../components/ProjectCard";
import { site } from "../content/site";

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg backdrop-blur-xl">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 via-amber-400 to-rose-400" />
      <p className="text-xs uppercase tracking-[0.2em] text-neutral-300">{label}</p>
      <p className="mt-2 text-xl font-semibold text-white">{value}</p>
    </div>
  );
}

export default function HomePage() {
  const skillEntries = Object.entries(site.skills ?? {});

  return (
    <main>
      <div className="relative overflow-hidden bg-[radial-gradient(1200px_circle_at_10%_-20%,rgba(16,185,129,0.2),transparent_55%),radial-gradient(900px_circle_at_90%_-10%,rgba(56,189,248,0.18),transparent_55%),linear-gradient(180deg,#0b0f14,rgba(7,10,12,0.95))]">
        <div className="pointer-events-none absolute left-1/2 top-24 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-400/25 blur-3xl" />
        <div className="pointer-events-none absolute right-8 top-10 h-40 w-40 rounded-full bg-sky-400/25 blur-3xl animate-[float-slow_10s_ease-in-out_infinite]" />
        <Container>
          <section className="pt-14 pb-10 sm:pt-20">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-emerald-200">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  {site.location}
                </div>
                <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl font-[var(--font-playfair)]">
                  {site.name}
                </h1>
                <p className="text-base text-neutral-200 sm:text-lg">
                  {site.headline}
                </p>

                <p className="max-w-2xl text-sm leading-7 text-neutral-300 sm:text-base">
                  {site.about}
                </p>

                <div className="flex flex-wrap gap-3">
                  <a
                    className="btn-base btn-md btn-emerald btn-hover hover:bg-emerald-500"
                    href={`mailto:${site.links.email}`}
                  >
                    Email
                  </a>

                  <a
                    className="btn-base btn-md btn-sky btn-hover hover:bg-sky-500"
                    href={site.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>

                  {site.links.github ? (
                    <a
                      className="btn-base btn-md btn-glass btn-hover hover:bg-white/20"
                      href={site.links.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  ) : (
                    <span className="rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-400">
                      GitHub (not linked)
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {(site.focusAreas ?? []).map((f) => (
                    <Badge key={f}>{f}</Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="relative mx-auto w-full max-w-[280px] overflow-hidden rounded-full border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-xl sm:max-w-[320px]">
                  <div className="absolute inset-0 bg-[radial-gradient(300px_circle_at_20%_0%,rgba(16,185,129,0.22),transparent_60%)]" />
                  <img
                    src="/IMG_6303 copy.jpg"
                    alt={`${site.name} portrait`}
                    className="relative aspect-square w-full rounded-full object-cover"
                    loading="eager"
                  />
                </div>

                <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-xl">
                  <div className="absolute -top-6 left-6 rounded-full bg-amber-400 px-3 py-1 text-xs font-medium text-amber-950 shadow-sm">
                    Current Focus
                  </div>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <StatCard label="CGPA" value={site.academics.cgpa} />
                    <StatCard label="Awards" value={`${site.academics.awards.length}`} />
                    <StatCard label="Projects" value={`${site.projects.length}`} />
                  </div>
                  <div className="mt-6">
                    <p className="text-xs uppercase tracking-[0.2em] text-neutral-300">
                      Skills Snapshot
                    </p>
                    <div className="mt-3 space-y-3">
                      {skillEntries.slice(0, 2).map(([group, items]) => (
                        <div key={group}>
                          <p className="text-sm font-medium text-white/90">{group}</p>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {(items as string[]).slice(0, 5).map((item) => (
                              <span
                                key={item}
                                className="rounded-full bg-white/10 px-3 py-1 text-xs text-neutral-200"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </div>

      <div className="bg-[#0b0f14]">
        <Container>
        <section className="mt-10 animate-[fade-up_0.7s_ease-out]">
          <SectionTitle
            title="Highlights"
            subtitle="Academic performance and recognition (kept clear and factual)."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            <StatCard label="Current CGPA" value={site.academics.cgpa} />
            <StatCard label="Dean’s Awards" value={`${site.academics.awards.length}`} />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg backdrop-blur-xl">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 via-amber-400 to-rose-400" />
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-300">Award Terms</p>
              <p className="mt-2 text-sm text-neutral-200">
                {site.academics.awards.map((a) => a.term).join(", ")}
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14 animate-[fade-up_0.8s_ease-out]">
          <SectionTitle
            title="Featured Projects"
            subtitle="A few selected projects. Some work is learning-focused or not public yet."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {(site.projects ?? []).slice(0, 4).map((p) => (
              <ProjectCard key={p.title} p={p as any} />
            ))}
          </div>
        </section>

        <section className="mt-14 pb-14 animate-[fade-up_0.9s_ease-out]">
          <SectionTitle title="Leadership" subtitle="Student leadership and executive roles." />
          <div className="grid gap-4">
            {(site.experience ?? []).map((e) => (
              <div
                key={`${e.title}-${e.org}`}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-xl"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-base font-semibold text-white">{e.title}</h3>
                  <p className="text-sm text-neutral-400">{e.time}</p>
                </div>
                <p className="mt-1 text-sm text-neutral-300">{e.org}</p>
                <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-neutral-300">
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </Container>
      </div>
    </main>
  );
}
