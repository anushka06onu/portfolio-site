import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
import { site } from "../../content/site";

export default function ExperiencePage() {
  return (
    <main>
      <div className="relative overflow-hidden bg-[radial-gradient(900px_circle_at_12%_-20%,rgba(16,185,129,0.18),transparent_55%),radial-gradient(900px_circle_at_90%_-10%,rgba(59,130,246,0.18),transparent_55%),linear-gradient(180deg,#0b0f14,rgba(7,10,12,0.96))]">
        <div className="pointer-events-none absolute left-6 top-8 h-40 w-40 rounded-full bg-sky-400/25 blur-3xl" />
        <Container>
          <div className="pt-12 pb-14">
          <SectionTitle
            title="Experience & Leadership"
            subtitle="University leadership and executive roles."
          />

          <div className="grid gap-4">
            {site.experience.map((e) => (
              <div
                key={`${e.title}-${e.org}`}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-xl"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-base font-semibold text-white">{e.title}</h3>
                  <p className="text-sm text-neutral-400">{e.time}</p>
                </div>
                <p className="mt-1 text-sm text-neutral-300">{e.org}</p>
                <ul className="mt-4 list-disc pl-5 text-sm text-neutral-300 space-y-1">
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        </Container>
      </div>
    </main>
  );
}
