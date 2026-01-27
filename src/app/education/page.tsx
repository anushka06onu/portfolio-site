import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
import { site } from "../../content/site";

export default function EducationPage() {
  return (
    <main>
      <div className="relative overflow-hidden bg-[radial-gradient(900px_circle_at_12%_-20%,rgba(16,185,129,0.18),transparent_55%),radial-gradient(900px_circle_at_90%_-10%,rgba(59,130,246,0.18),transparent_55%),linear-gradient(180deg,#0b0f14,rgba(7,10,12,0.96))]">
        <div className="ambient-orb left-6 top-8 h-40 w-40 bg-emerald-400/20" />
        <Container>
          <div className="pt-12 pb-16">
            <SectionTitle
              title="Education"
              subtitle="Academic background and achievements."
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {(site.education ?? []).map((edu) => (
                <div
                  key={`${edu.program}-${edu.institution}`}
                  className="card-glow p-6"
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-base font-semibold text-white">{edu.program}</h3>
                    <p className="text-sm text-neutral-400">{edu.time}</p>
                  </div>
                  <p className="mt-1 text-sm text-neutral-300">
                    {edu.institution} • {edu.location}
                  </p>
                  {edu.notes?.length ? (
                    <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-neutral-300">
                      {edu.notes.map((note) => (
                        <li key={note}>{note}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </div>

            <div className="mt-12">
              <SectionTitle
                title="Courses & Certifications"
                subtitle="Focused coursework to build practical data and backend skills."
              />
              {site.courseNote ? (
                <p className="mb-4 text-sm text-neutral-300">{site.courseNote}</p>
              ) : null}
              <div className="grid gap-4">
                {(site.courses ?? []).map((course) => (
                  <div
                    key={`${course.title}-${course.provider}`}
                    className="card-glow p-6"
                  >
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                      <h3 className="text-base font-semibold text-white">{course.title}</h3>
                      <p className="text-sm text-neutral-400">{course.status}</p>
                    </div>
                    <p className="mt-1 text-sm text-emerald-300">{course.provider}</p>
                    <p className="mt-3 text-sm text-neutral-300">{course.summary}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
}
