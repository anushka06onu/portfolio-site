import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
import { site } from "../../content/site";

export default function ContactPage() {
  return (
    <main>
      <div className="relative overflow-hidden bg-[radial-gradient(900px_circle_at_15%_-20%,rgba(16,185,129,0.2),transparent_55%),radial-gradient(900px_circle_at_85%_-10%,rgba(59,130,246,0.2),transparent_55%),linear-gradient(180deg,#0b0f14,rgba(7,10,12,0.96))]">
        <div className="ambient-orb right-10 top-10 h-40 w-40 bg-emerald-400/25 animate-[float-slow_9s_ease-in-out_infinite]" />
        <div className="ambient-orb left-12 bottom-10 h-32 w-32 bg-sky-400/25 animate-[float-slow_11s_ease-in-out_infinite]" />
        <Container>
          <div className="pt-16 pb-20">
          <SectionTitle
            title="Contact"
            subtitle="If you’d like to discuss a project or collaboration, feel free to reach out."
          />

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="card-glow rounded-3xl p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">
                Let’s connect
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                Open to internships, research, and collaboration.
              </h3>
              <p className="mt-3 text-sm text-neutral-300">
                I reply to emails quickly and I’m happy to discuss projects, research
                ideas, or portfolio feedback.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  className="btn-base btn-lg btn-emerald btn-hover btn-shine hover:bg-emerald-500"
                  href={`mailto:${site.links.email}`}
                >
                  Send Email
                </a>
                <a
                  className="btn-base btn-lg btn-sky btn-hover btn-shine hover:bg-sky-500"
                  href={site.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open LinkedIn
                </a>
                {site.links.github ? (
                  <a
                    className="btn-base btn-lg btn-glass btn-hover btn-shine hover:bg-white/20"
                    href={site.links.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open GitHub
                  </a>
                ) : (
                  <span className="rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-neutral-300">
                    GitHub not linked
                  </span>
                )}
              </div>
            </div>

            <div className="card-glow rounded-3xl p-8">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(280px_circle_at_20%_0%,rgba(16,185,129,0.25),transparent_60%)]" />
              <p className="text-sm uppercase tracking-[0.25em] text-sky-300">
                Availability
              </p>
              <h4 className="mt-3 text-xl font-semibold text-white">
                Usually replies within 24 hours.
              </h4>
              <p className="mt-3 text-sm text-neutral-300">
                Preferred channels: Email, then LinkedIn. GitHub is for code sharing
                and project updates.
              </p>
              <div className="mt-6 flex items-center gap-3 text-sm text-neutral-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-[float-slow_4s_ease-in-out_infinite]" />
                Available for new opportunities
              </div>
            </div>
          </div>
        </div>
        </Container>
      </div>
    </main>
  );
}
