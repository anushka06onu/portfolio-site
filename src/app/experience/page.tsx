import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
import { site } from "../../content/site";

export default function ExperiencePage() {
  return (
    <main>
      <Container>
        <div className="pt-10">
          <SectionTitle
            title="Experience & Leadership"
            subtitle="University leadership and executive roles."
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
        </div>
      </Container>
    </main>
  );
}
