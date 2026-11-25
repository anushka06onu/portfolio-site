import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "../content/site";
import { featuredProjects, retinaGuard } from "../content/projects";
import { authoredBook, thesisDetails, upobhasha } from "../content/research";
import ProjectCard from "../components/ProjectCard";
import CoreToolkit from "../components/CoreToolkit";
import ContactSection from "../components/ContactSection";
import { GithubIcon, LinkedinIcon } from "../components/Icons";
import {
  ArrowRight,
  FileDown,
  ExternalLink,
  Building2,
  Calendar,
  Activity,
  Server,
  GraduationCap
} from "lucide-react";

const selectedEngineering = featuredProjects.filter(
  ({ slug }) => slug === "resilinet" || slug === "computepulse"
);

export default function HomePage() {

  const pillarIcons = [
    <Activity key="1" className="w-4 h-4 text-teal-500" />,
    <Server key="2" className="w-4 h-4 text-cyan-500" />,
    <GraduationCap key="3" className="w-4 h-4 text-blue-500" />
  ];

  const pillars = siteConfig.narrative.threePillars.map((pillar, idx) => ({
    ...pillar,
    icon: pillarIcons[idx] ?? <Activity className="w-4 h-4 text-teal-500" />
  }));

  return (
    <div className="relative overflow-hidden">
      {/* Calm ambient glow behind hero */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] hero-ambient-glow -z-10" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-8 sm:py-12 space-y-16 sm:space-y-20">
        {/* 1. HERO SECTION */}
        <section className="space-y-6 pt-2 sm:pt-4" aria-labelledby="hero-heading">
          <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-8 md:gap-10">
            <div className="flex-1 space-y-4">
              <h1
                id="hero-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-main)] leading-[1.15]"
              >
                Hi, I’m{" "}
                <span className="text-gradient-cyan hero-name-gradient">{siteConfig.fullName}.</span>
              </h1>

              <div className="max-w-xl space-y-3 text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
                <p className="font-semibold">
                  <span className="text-gradient-cyan">{siteConfig.hero.headline}</span>
                </p>
                {siteConfig.hero.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {/* Action Buttons & Social Links */}
              <div className="flex flex-wrap items-center gap-3 pt-1 text-sm font-medium">
                <Link
                  href={siteConfig.hero.buttons.research.href}
                  className="btn-gradient inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-slate-950 font-semibold shadow-md shadow-teal-500/20"
                >
                  <span>{siteConfig.hero.buttons.research.label}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={siteConfig.links.resume}
                  className="btn-outline inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)]"
                  download
                >
                  <FileDown className="w-4 h-4 text-[var(--primary-accent)]" />
                  <span>{siteConfig.hero.buttons.cv.label}</span>
                </a>

                <div className="flex items-center gap-2 pl-1">
                  <a
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline p-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-muted)]"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>

                  <a
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline p-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-muted)]"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Portrait with Radiant Ring */}
            <div className="shrink-0 w-40 sm:w-48 lg:w-52">
              <div className="relative p-1 rounded-2xl bg-gradient-to-br from-teal-500/30 via-cyan-500/20 to-blue-500/30 shadow-xl shadow-teal-500/10">
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--surface)]">
                  <Image
                    src="/anushka.jpg"
                    alt="Portrait of Fateha Hossain Anushka"
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 160px, 208px"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Three Specialization Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-[var(--border-subtle)]">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="editorial-card p-4 space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-md bg-[var(--surface-subtle)] border border-[var(--border-subtle)]">
                    {pillar.icon}
                  </div>
                  <h2 className="text-sm font-bold text-[var(--text-main)]">
                    {pillar.title}
                  </h2>
                </div>
                <p className="text-xs text-[var(--text-muted)] leading-5">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="research" className="space-y-5 scroll-mt-20" aria-labelledby="research-heading">
          <div className="border-b border-[var(--border-color)] pb-3 flex flex-wrap items-baseline justify-between gap-2">
            <h2 id="research-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-main)]">
              Selected Research
            </h2>
            <Link href="/research" className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--primary-accent)] hover:underline">
              View all research <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <article className="editorial-card editorial-card-accent p-5 flex flex-col gap-3">
              <p className="text-xs font-medium text-[var(--primary-accent)]">Undergraduate thesis · Journal manuscript under review</p>
              <h3 className="text-lg font-bold text-[var(--text-main)]">{thesisDetails.shortTitle}</h3>
              <p className="text-sm text-[var(--text-muted)] leading-6">
                I helped benchmark DINOv2-Small on patient-separated DentIRO radiographs. Bottleneck adapters updated 2.63% of its parameters and achieved balanced accuracy comparable to fully fine-tuned ResNet-50.
              </p>
              <Link href="/research#thesis" className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-[var(--primary-accent)] hover:underline">
                See thesis methods <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </article>

            <article className="editorial-card p-5 flex flex-col gap-3">
              <p className="text-xs font-medium text-[var(--primary-accent)]">Published dataset record · Co-curator</p>
              <h3 className="text-lg font-bold text-[var(--text-main)]">{upobhasha.shortTitle}</h3>
              <p className="text-sm text-[var(--text-muted)] leading-6">{upobhasha.summary}</p>
              <a
                href={upobhasha.links[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-[var(--primary-accent)] hover:underline"
              >
                View dataset record <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </article>

            <article className="editorial-card p-5 flex flex-col gap-3">
              <p className="text-xs font-medium text-[var(--primary-accent)]">Medical imaging project</p>
              <h3 className="text-lg font-bold text-[var(--text-main)]">{retinaGuard.title}</h3>
              <p className="text-sm text-[var(--text-muted)] leading-6">
                I trained a model to check retinal image quality and flag uncertain images for review. The DeepDRiD evaluation used a held-out test set of 400 images from 100 patients.
              </p>
              <Link href={retinaGuard.links.caseStudy} className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-[var(--primary-accent)] hover:underline">
                Read RetinaGuard case study <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </article>
          </div>

          <p className="text-sm text-[var(--text-muted)]">
            My ICERIE 2027 accepted papers cover compensated microcytosis and ethnic language identification.{" "}
            <Link href="/research#outputs" className="font-semibold text-[var(--primary-accent)] hover:underline">See research outputs</Link>
          </p>
        </section>

        <section id="leadership" className="space-y-5 scroll-mt-20" aria-labelledby="leadership-heading">
          <h2 id="leadership-heading" className="border-b border-[var(--border-color)] pb-3 text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-main)]">
            Leadership &amp; Teaching
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <article className="editorial-card p-5 space-y-2">
              <h3 className="text-base font-bold text-[var(--text-main)]">Programming Club President</h3>
              <p className="text-sm text-[var(--text-muted)] leading-6">
                Led backend workshops and mentored junior members at the DIU Girls’ Computer Programming Club.
              </p>
              <a href="https://gcpc.daffodilvarsity.edu.bd/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--primary-accent)] hover:underline">
                See the club website <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </article>
            <article className="editorial-card p-5 space-y-2">
              <h3 className="text-base font-bold text-[var(--text-main)]">Java Lab Prefect</h3>
              <p className="text-sm text-[var(--text-muted)] leading-6">
                Guided 100+ undergraduate students through Java and object-oriented programming lab exercises over two semesters.
              </p>
            </article>
            <article className="editorial-card p-5 space-y-2">
              <h3 className="text-base font-bold text-[var(--text-main)]">Compiler Architectonics</h3>
              <p className="text-sm text-[var(--text-muted)] leading-6">
                Wrote an illustrated compiler design companion and lab manual for university students.
              </p>
              <a href={authoredBook.links[0].url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--primary-accent)] hover:underline">
                Read the book <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </article>
          </div>
        </section>

        <section id="work" className="space-y-5 scroll-mt-20" aria-labelledby="work-heading">
          <div className="border-b border-[var(--border-color)] pb-3 flex flex-wrap items-baseline justify-between gap-2">
            <h2 id="work-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-main)]">
              Selected Engineering Work
            </h2>
            <Link href={siteConfig.hero.buttons.work.href} className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--primary-accent)] hover:underline">
              View all projects <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {selectedEngineering.map((project) => <ProjectCard key={project.slug} project={project} />)}
          </div>
        </section>

        {/* 4. EXPERIENCE (2 COMPACT ROLES) */}
        <section id="experience" className="space-y-6 scroll-mt-20" aria-labelledby="exp-heading">
          <div className="border-b border-[var(--border-color)] pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <h2
                id="exp-heading"
                className="mt-0.5 text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-main)]"
              >
                Experience
              </h2>
            </div>
            <Link
              href="/about"
              className="text-xs font-semibold text-[var(--primary-accent)] hover:underline inline-flex items-center gap-1 font-mono"
            >
              <span>More Experience &amp; Bio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* 1. Research Assistant */}
            <div className="editorial-card p-5 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 border-b border-[var(--border-subtle)] pb-2.5">
                <div>
                  <h3 className="text-base font-bold text-[var(--text-main)]">
                    Research Assistant
                  </h3>
                  <p className="text-xs font-medium text-[var(--primary-accent)] flex items-center gap-1 mt-0.5">
                    <Building2 className="w-3.5 h-3.5 shrink-0" />
                    <span>Health Informatics Research Lab</span>
                  </p>
                </div>
                <span className="text-xs font-mono text-[var(--text-muted)] flex items-center gap-1 shrink-0 self-start sm:self-auto">
                  <Calendar className="w-3 h-3 shrink-0" />
                  <span>Apr 2026 – Present</span>
                </span>
              </div>
              <p className="text-sm text-[var(--text-muted)] leading-6">
                Conducting health informatics research focused on medical image analysis, clinical decision support systems, and explainable AI for healthcare.
              </p>
            </div>

            {/* 2. Junior Developer (formerly Backend Developer Intern) */}
            <div className="editorial-card p-5 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 border-b border-[var(--border-subtle)] pb-2.5">
                <div>
                  <h3 className="text-base font-bold text-[var(--text-main)]">
                    Junior Developer
                  </h3>
                  <p className="text-xs font-medium text-[var(--primary-accent)] flex items-center gap-1 mt-0.5">
                    <Building2 className="w-3.5 h-3.5 shrink-0" />
                    <span>CSE-Tech</span>
                  </p>
                </div>
                <span className="text-xs font-mono text-[var(--text-muted)] flex items-center gap-1 shrink-0 self-start sm:self-auto">
                  <Calendar className="w-3 h-3 shrink-0" />
                  <span>Sept 2026 – Present</span>
                </span>
              </div>
              <p className="text-sm text-[var(--text-muted)] leading-6">
                Completed a 6-month backend development internship (March 01 – Sept 01, 2026) before transitioning full-time, building Spring Boot REST APIs and Laravel backend systems.
              </p>
            </div>
          </div>
        </section>

        {/* 5. CORE TOOLKIT */}
        <CoreToolkit />

        {/* 6. CONTACT SECTION */}
        <ContactSection />
      </div>
    </div>
  );
}
