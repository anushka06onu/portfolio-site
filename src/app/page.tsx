import Link from "next/link";
import Image from "next/image";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import Badge from "../components/Badge";
import { site } from "../content/site";
import ContactCTA from "../components/ContactCTA";

type Project = (typeof site.projects)[number];
type Experience = (typeof site.experience)[number];

function StatCard({
  label,
  value,
  detail
}: {
  label: string;
  value: string;
  detail?: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg backdrop-blur-xl">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-emerald-400 via-sky-400 to-purple-500" />
      <p className="text-[11px] uppercase tracking-[0.22em] text-neutral-400">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
      {detail ? <p className="mt-1 text-sm text-neutral-300">{detail}</p> : null}
    </div>
  );
}

function ProjectTile({ project }: { project: Project }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-6 shadow-lg backdrop-blur-xl transition-transform duration-300 hover:-translate-y-2 hover:border-emerald-400/30 hover:shadow-[0_20px_50px_rgba(16,185,129,0.18)]">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(520px_circle_at_85%_-10%,rgba(56,189,248,0.18),transparent_60%)]" />
      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-emerald-200/80">{project.category}</p>
          <h3 className="mt-1 text-lg font-semibold text-white">{project.title}</h3>
        </div>
        <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] text-neutral-200">
          {project.status}
        </span>
      </div>
      <p className="relative mt-4 text-sm leading-6 text-neutral-200">{project.description}</p>

      <div className="relative mt-4 flex flex-wrap gap-2">
        {(project.tech ?? []).slice(0, 5).map((t) => (
          <span
            key={t}
            className="rounded-full bg-white/10 px-3 py-1 text-xs text-neutral-200"
          >
            {t}
          </span>
        ))}
      </div>

      {project.links && (project.links.demo || project.links.github) ? (
        <div className="relative mt-6 flex flex-wrap gap-3 text-sm">
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              className="btn-base btn-sm btn-emerald btn-hover btn-shine hover:bg-emerald-500"
            >
              Live
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="btn-base btn-sm btn-glass btn-hover btn-shine hover:bg-white/20"
            >
              GitHub
            </a>
          )}
        </div>
      ) : null}
    </div>
  );
}

function LeadershipCard({ role }: { role: Experience }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-purple-500 via-emerald-400 to-sky-400" />
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="text-base font-semibold text-white">{role.title}</h3>
        <p className="text-sm text-neutral-400">{role.time}</p>
      </div>
      <p className="mt-1 text-sm text-neutral-300">{role.org}</p>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral-300">
        {role.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

export default function HomePage() {
  const awardsCount = site.academics?.awards?.length ?? 0;
  const awardTerms = site.academics?.awards?.map((a) => a.term).join(", ");
  const labRole = (site.experience ?? []).find((e) =>
    e.title.toLowerCase().includes("lab prefect")
  );
  const leadershipRoles = (site.experience ?? []).filter(
    (e) => !e.title.toLowerCase().includes("lab prefect")
  );
  const projects = (site.projects ?? []).slice(0, 4);
  const skillEntries = Object.entries(site.skills ?? {});

  return (
    <main className="relative isolate overflow-hidden bg-[#0b0f14] text-neutral-100">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(1200px_circle_at_18%_-10%,rgba(16,185,129,0.24),transparent_60%),radial-gradient(1000px_circle_at_82%_0%,rgba(99,102,241,0.2),transparent_60%),linear-gradient(180deg,#0b0f14,#06080d)]" />
      <div className="pointer-events-none absolute left-10 top-24 -z-10 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="pointer-events-none absolute right-[-4rem] top-10 -z-10 h-72 w-72 rounded-full bg-sky-500/18 blur-3xl" />

      <Container>
        <section className="grid gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center animate-[fade-up_0.65s_ease-out]">
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-1 text-[11px] uppercase tracking-[0.2em] text-emerald-100">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              {site.location} · CS (4th year) · ML / Data / Applied AI
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl font-[var(--font-playfair)]">
              {site.name}
            </h1>
            <p className="max-w-2xl text-lg text-neutral-200">{site.headline}</p>
            <p className="max-w-2xl text-sm leading-7 text-neutral-300 sm:text-base">
              {site.about}
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${site.links.email}`}
                className="btn-base btn-md btn-emerald btn-hover btn-shine hover:bg-emerald-500"
              >
                Email
              </a>
              <a
                href={site.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-base btn-md btn-sky btn-hover btn-shine hover:bg-sky-500"
              >
                LinkedIn
              </a>
              {site.links.github ? (
                <a
                  href={site.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-base btn-md btn-glass btn-hover btn-shine hover:bg-white/20"
                >
                  GitHub
                </a>
              ) : null}
              {site.links.resume ? (
                <Link
                  href={site.links.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-base btn-md btn-glass btn-hover btn-shine hover:bg-white/20"
                >
                  Resume
                </Link>
              ) : null}
            </div>

            <div className="flex flex-wrap gap-2">
              {(site.focusAreas ?? []).map((f) => (
                <Badge key={f}>{f}</Badge>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[260px] sm:max-w-[300px] overflow-hidden rounded-full border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-3 shadow-2xl backdrop-blur-xl">
              <div className="absolute inset-0 bg-[radial-gradient(320px_circle_at_20%_10%,rgba(56,189,248,0.18),transparent_60%)]" />
              <div className="relative z-10 aspect-square w-full overflow-hidden rounded-full">
                <Image
                  src="/IMG_6303 copy.jpg"
                  alt={`${site.name} portrait`}
                  width={600}
                  height={600}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>

          </div>
        </section>
      </Container>

      <div className="border-t border-white/5 bg-[#05070b]/70 py-14 backdrop-blur">
        <Container>
          <section className="animate-[fade-up_0.7s_ease-out]">
            <SectionTitle
              title="Highlights"
              subtitle="Academic snapshot in one glance."
            />
            <div className="grid gap-4 sm:grid-cols-3">
              <StatCard label="Current CGPA" value={site.academics.cgpa} />
              <StatCard label="Dean’s Awards" value={`${awardsCount}`} detail="Consistent high achievement" />
              <StatCard label="Award Terms" value={awardTerms ?? "—"} />
            </div>
          </section>

          <section className="mt-16 animate-[fade-up_0.75s_ease-out]">
            <SectionTitle
              title="Projects"
              subtitle="Selected builds across web, systems, and applied AI."
            />
            <div className="grid gap-5 sm:grid-cols-2">
              {projects.map((p) => (
                <ProjectTile key={p.title} project={p} />
              ))}
            </div>
          </section>

          <section className="mt-16 animate-[fade-up_0.8s_ease-out]">
            <SectionTitle
              title="Academic Support & Teaching"
              subtitle="Peer mentoring and lab guidance."
            />
            {labRole ? (
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-xl">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-emerald-400 via-amber-300 to-purple-400" />
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-base font-semibold text-white">{labRole.title}</h3>
                  <p className="text-sm text-neutral-400">{labRole.time}</p>
                </div>
                <p className="mt-1 text-sm text-neutral-300">{labRole.org}</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral-300">
                  {labRole.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="text-sm text-neutral-300">Lab mentoring details will be added soon.</p>
            )}
          </section>

          <section className="mt-16 animate-[fade-up_0.85s_ease-out]">
            <SectionTitle
              title="Leadership"
              subtitle="Clubs, coordination, and executive roles."
            />
            <div className="grid gap-4 md:grid-cols-2">
              {leadershipRoles.map((role) => (
                <LeadershipCard key={`${role.title}-${role.org}`} role={role} />
              ))}
            </div>
          </section>

          <section className="mt-16 animate-[fade-up_0.9s_ease-out]">
            <SectionTitle
              title="Skills"
              subtitle="Tools and stacks used across projects."
            />
            <div className="grid gap-4 lg:grid-cols-2">
              {skillEntries.map(([group, items]) => (
                <div
                  key={group}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg backdrop-blur-xl"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-sky-400 via-emerald-400 to-purple-500" />
                  <p className="text-xs uppercase tracking-[0.22em] text-neutral-400">{group}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {(items as string[]).map((item) => (
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
          </section>

          <section className="mt-20 pb-10 animate-[fade-up_1s_ease-out]">
            <SectionTitle
              title="Contact"
              subtitle="Let’s collaborate on ML/AI, data, or product builds—reach out anytime."
            />
            <ContactCTA />
          </section>
        </Container>
      </div>
    </main>
  );
}
