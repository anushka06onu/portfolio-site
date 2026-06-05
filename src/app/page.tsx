import Link from "next/link";
import Image from "next/image";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import Badge from "../components/Badge";
import { site } from "../content/site";
import ContactCTA from "../components/ContactCTA";
import Timeline from "../components/Timeline";
import CertificationCard from "../components/CertificationCard";
import ProjectShowcaseCard from "../components/ProjectShowcaseCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";

export const revalidate = 60; // Revalidate every 60 seconds

async function fetchProjects() {
  try {
    const querySnapshot = await getDocs(collection(db, "projects"));
    if (querySnapshot.empty) return site.projects;
    const data: any[] = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    return data;
  } catch (error) {
    console.error("Firebase fetch failed, falling back to static site.ts:", error);
    return site.projects;
  }
}

async function fetchCertifications() {
  try {
    const querySnapshot = await getDocs(collection(db, "certifications"));
    if (querySnapshot.empty) return site.certifications;
    const data: any[] = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    return data;
  } catch (error) {
    console.error("Firebase fetch failed, falling back to static site.ts:", error);
    return site.certifications;
  }
}

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
    <div className="relative overflow-hidden rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 p-5 shadow-lg backdrop-blur-xl transition-colors duration-300">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-emerald-400 via-sky-400 to-purple-500 opacity-60 dark:opacity-100" />
      <p className="text-[11px] uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-neutral-900 dark:text-white">{value}</p>
      {detail ? <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{detail}</p> : null}
    </div>
  );
}

export default async function HomePage() {
  const awardsCount = site.academics?.awards?.length ?? 0;
  const awardTerms = site.academics?.awards?.map((a) => a.term).join(", ");
  const skillEntries = Object.entries(site.skills ?? {});

  // Fetch dynamic data, with static fallback
  const projects = await fetchProjects();
  const certifications = await fetchCertifications();

  return (
    <main className="relative isolate overflow-hidden bg-neutral-50 dark:bg-[#0b0f14] text-neutral-900 dark:text-neutral-100 transition-colors duration-500">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(1200px_circle_at_18%_-10%,rgba(16,185,129,0.08),transparent_60%),radial-gradient(1000px_circle_at_82%_0%,rgba(99,102,241,0.08),transparent_60%),linear-gradient(180deg,#f8fafc,#f1f5f9)] dark:bg-[radial-gradient(1200px_circle_at_18%_-10%,rgba(16,185,129,0.24),transparent_60%),radial-gradient(1000px_circle_at_82%_0%,rgba(99,102,241,0.2),transparent_60%),linear-gradient(180deg,#0b0f14,#06080d)] transition-colors duration-500" />
      <div className="pointer-events-none absolute left-10 top-24 -z-10 h-64 w-64 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 blur-3xl transition-colors duration-500" />
      <div className="pointer-events-none absolute right-[-4rem] top-10 -z-10 h-72 w-72 rounded-full bg-sky-500/10 dark:bg-sky-500/18 blur-3xl transition-colors duration-500" />

      <Container>
        <section className="grid gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center animate-[fade-up_0.65s_ease-out]">
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 dark:border-emerald-400/40 bg-emerald-500/10 dark:bg-emerald-400/10 px-4 py-1 text-[11px] uppercase tracking-[0.2em] text-emerald-800 dark:text-emerald-100">
              <span className="h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400" />
              {site.location} · CS (4th year) · ML / Data / Applied AI
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-5xl lg:text-6xl font-[var(--font-playfair)]">
              {site.name}
            </h1>
            <p className="max-w-2xl text-lg text-neutral-700 dark:text-neutral-200">{site.headline}</p>
            <p className="max-w-2xl text-sm leading-7 text-neutral-600 dark:text-neutral-300 sm:text-base">
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
                  className="btn-base btn-md btn-glass btn-hover btn-shine hover:bg-black/10 dark:hover:bg-white/20"
                >
                  GitHub
                </a>
              ) : null}
              {site.links.resume ? (
                <Link
                  href={site.links.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-base btn-md btn-glass btn-hover btn-shine hover:bg-black/10 dark:hover:bg-white/20"
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
            <div className="relative w-full max-w-[260px] sm:max-w-[300px] overflow-hidden rounded-full border border-black/5 dark:border-white/10 bg-gradient-to-b from-black/5 to-transparent dark:from-white/10 dark:to-white/5 p-3 shadow-2xl backdrop-blur-xl">
              <div className="absolute inset-0 bg-[radial-gradient(320px_circle_at_20%_10%,rgba(56,189,248,0.08),transparent_60%)] dark:bg-[radial-gradient(320px_circle_at_20%_10%,rgba(56,189,248,0.18),transparent_60%)]" />
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

      <div className="border-t border-black/5 dark:border-white/5 bg-white/70 dark:bg-[#05070b]/70 py-14 backdrop-blur transition-colors duration-500">
        <Container>
          
          {/* Achievement Section */}
          <section className="animate-[fade-up_0.7s_ease-out]">
            <SectionTitle
              title="Achievements & Roles"
              subtitle="Key highlights from my academic and extracurricular journey."
            />
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              <StatCard label="Current CGPA" value={site.academics.cgpa} detail="Daffodil Int. University" />
              <StatCard label="Dean’s Awards" value={`${awardsCount}`} detail={awardTerms} />
              <StatCard label="Research" value="Research Assistant" detail="Health Informatics Research Lab" />
              <StatCard label="Leadership" value="President" detail="DIU GCPC" />
            </div>
          </section>

          {/* Research Section */}
          <section className="mt-20 animate-[fade-up_0.75s_ease-out]">
            <SectionTitle
              title="Research Focus"
              subtitle="Dedicated to advancing AI applications in healthcare and NLP."
            />
            <div className="grid gap-6 md:grid-cols-2">
              <div className="card-glow p-8 flex flex-col justify-center">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-sky-400 via-emerald-400 to-purple-500 opacity-60 dark:opacity-70" />
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">{site.research.role}</h3>
                <p className="text-emerald-600 dark:text-emerald-300 text-sm uppercase tracking-wider mb-6">{site.research.lab}</p>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm sm:text-base">
                  {site.research.ongoing}
                </p>
              </div>
              <div className="card-glow p-8 border border-black/5 dark:border-white/10">
                <h4 className="text-sm uppercase tracking-[0.15em] text-neutral-500 dark:text-neutral-400 mb-6">Research Interests</h4>
                <ul className="space-y-3">
                  {site.research.interests.map((interest) => (
                    <li key={interest} className="flex items-center text-neutral-800 dark:text-neutral-200">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 mr-3 shadow-[0_0_8px_rgba(16,185,129,0.5)] dark:shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                      {interest}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Project Showcase */}
          <section className="mt-24 animate-[fade-up_0.8s_ease-out]">
            <SectionTitle
              title="Project Showcase"
              subtitle="Detailed case studies of selected builds."
            />
            <div className="flex flex-col gap-12 sm:gap-16">
              {projects.map((p, index) => (
                <ProjectShowcaseCard key={p.title || index} project={p} index={index} />
              ))}
            </div>
          </section>

          {/* Leadership Timeline */}
          <section className="mt-24 animate-[fade-up_0.85s_ease-out]">
            <SectionTitle
              title="Leadership Journey"
              subtitle="Clubs, coordination, and executive progression."
            />
            <div className="max-w-4xl">
              <Timeline items={site.leadership} />
            </div>
          </section>

          {/* Teaching & Mentorship */}
          <section className="mt-24 animate-[fade-up_0.9s_ease-out]">
            <SectionTitle
              title="Teaching & Mentorship"
              subtitle="Guiding peers in software engineering and foundational concepts."
            />
            <div className="card-glow p-8 md:p-10 border border-black/5 dark:border-white/10 max-w-3xl">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-purple-500 to-sky-400 opacity-50 dark:opacity-60" />
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white font-[var(--font-playfair)]">{site.teaching.role}</h3>
                <span className="inline-flex rounded-full bg-black/5 dark:bg-white/10 px-3 py-1.5 text-xs text-neutral-700 dark:text-neutral-200 backdrop-blur-md">
                  {site.teaching.duration}
                </span>
              </div>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-lg">
                {site.teaching.description}
              </p>
            </div>
          </section>

          {/* Certifications */}
          <section className="mt-24 animate-[fade-up_0.95s_ease-out]">
            <SectionTitle
              title="Certifications"
              subtitle="Continuous learning and professional skill development."
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {certifications.map((cert) => (
                <CertificationCard
                  key={cert.title}
                  title={cert.title}
                  provider={cert.provider}
                  status={cert.status}
                  description={cert.description}
                  learned={cert.learned}
                  imageUrl={cert.imageUrl}
                />
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="mt-24 animate-[fade-up_1s_ease-out]">
            <SectionTitle
              title="Skills"
              subtitle="Tools, languages, and stacks used across projects."
            />
            <div className="grid gap-4 lg:grid-cols-2">
              {skillEntries.map(([group, items]) => (
                <div
                  key={group}
                  className="card-glow p-5"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-sky-400 via-emerald-400 to-purple-500 opacity-40" />
                  <p className="text-xs uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">{group}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {(items as string[]).map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-black/5 dark:bg-white/10 px-3 py-1 text-xs text-neutral-700 dark:text-neutral-200 hover:bg-black/10 dark:hover:bg-white/20 transition-colors cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section className="mt-28 pb-10 animate-[fade-up_1.1s_ease-out]">
            <ContactCTA />
          </section>
          
        </Container>
      </div>
    </main>
  );
}
