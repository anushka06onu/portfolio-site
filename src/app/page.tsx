import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import Badge from "../components/Badge";
import ProjectCard from "../components/ProjectCard";
import { site } from "../content/site";

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
      <p className="text-xs text-neutral-500">{label}</p>
      <p className="mt-1 text-lg font-semibold text-neutral-900">{value}</p>
    </div>
  );
}

export default function HomePage() {
  return (
    <main>
      <div className="bg-gradient-to-b from-neutral-100 to-neutral-50">
        <Container>
          <section className="pt-12 pb-8 sm:pt-16">
            <p className="text-sm text-neutral-600">{site.location}</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              {site.name}
            </h1>
            <p className="mt-3 text-neutral-700">{site.headline}</p>

            <p className="mt-5 max-w-2xl text-sm leading-6 text-neutral-600">
              {site.about}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="rounded-xl bg-neutral-900 px-4 py-2 text-sm text-white hover:bg-neutral-800"
                href={`mailto:${site.links.email}`}
              >
                Email
              </a>

              <a
                className="rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm hover:bg-neutral-50"
                href={site.links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              {site.links.github ? (
                <a
                  className="rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm hover:bg-neutral-50"
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

            <div className="mt-6 flex flex-wrap gap-2">
              {site.focusAreas.map((f) => (
                <Badge key={f}>{f}</Badge>
              ))}
            </div>
          </section>
        </Container>
      </div>

      <Container>
        <section className="mt-6">
          <SectionTitle
            title="Highlights"
            subtitle="Academic performance and recognition (kept clear and factual)."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            <StatCard label="Current CGPA" value={site.academics.cgpa} />
            <StatCard label="Dean’s Awards" value={`${site.academics.awards.length}`} />
            <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
              <p className="text-xs text-neutral-500">Award Terms</p>
              <p className="mt-1 text-sm text-neutral-700">
                {site.academics.awards.map((a) => a.term).join(", ")}
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <SectionTitle
            title="Featured Projects"
            subtitle="A few selected projects. Some work is learning-focused or not public yet."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {site.projects.slice(0, 4).map((p) => (
              <ProjectCard key={p.title} p={p as any} />
            ))}
          </div>
        </section>

        <section className="mt-12 pb-12">
          <SectionTitle
            title="Leadership"
            subtitle="Student leadership and executive roles."
          />
          <div className="grid gap-4">
            {site.experience.map((e) => (
              <div
                key={`${e.title}-${e.org}`}
                className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-base font-semibold text-neutral-900">{e.title}</h3>
                  <p className="text-sm text-neutral-500">{e.time}</p>
                </div>
                <p className="mt-1 text-sm text-neutral-700">{e.org}</p>
                <ul className="mt-4 list-disc pl-5 text-sm text-neutral-600 space-y-1">
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
