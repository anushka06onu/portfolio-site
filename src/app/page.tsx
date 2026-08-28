import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "../content/site";
import { featuredProjects, additionalProjects } from "../content/projects";
import { researchDirection, researchOutputs } from "../content/research";
import ProjectCard from "../components/ProjectCard";
import AdditionalProjectCard from "../components/AdditionalProjectCard";
import ResearchCard from "../components/ResearchCard";
import ExperienceItem from "../components/ExperienceItem";
import SkillsMatrix from "../components/SkillsMatrix";
import ContactSection from "../components/ContactSection";
import { GithubIcon, LinkedinIcon } from "../components/Icons";
import {
  ArrowDown,
  ArrowRight,
  FileDown,
  Mail,
  GraduationCap,
  Award,
  Activity,
  ShieldAlert,
  Server
} from "lucide-react";

export default function HomePage() {
  const primaryExperience = siteConfig.experience.slice(0, 2);

  const pillarIcons = [
    <Activity key="1" className="w-4 h-4 text-teal-500" />,
    <ShieldAlert key="2" className="w-4 h-4 text-cyan-500" />,
    <Server key="3" className="w-4 h-4 text-blue-500" />
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Calm ambient glow behind hero */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[550px] hero-ambient-glow -z-10" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-14 space-y-16 sm:space-y-24">
        {/* 1. HERO SECTION */}
        <section className="space-y-8 pt-4 sm:pt-6" aria-labelledby="hero-heading">
          <div className="flex flex-col-reverse lg:flex-row items-start justify-between gap-8 lg:gap-12">
            <div className="flex-1 space-y-5">
              {/* Clean Status Line without Pulsing Dot */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[var(--border-color)] bg-[var(--surface)]/90 backdrop-blur-md text-sm text-[var(--text-muted)] shadow-sm">
                <span>{siteConfig.availability}</span>
              </div>

              {/* Hero Eyebrow */}
              <p className="text-xs font-semibold tracking-wider text-[var(--primary-accent)] uppercase">
                {siteConfig.hero.eyebrow}
              </p>

              {/* Main Headline */}
              <h1
                id="hero-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-main)] leading-[1.15]"
              >
                I build <span className="text-gradient-cyan">reliable intelligent systems</span> for healthcare and complex infrastructure.
              </h1>

              {/* Introduction Paragraph */}
              <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed max-w-2xl font-normal">
                {siteConfig.hero.intro}
              </p>

              {/* Action Buttons & Social Links */}
              <div className="flex flex-wrap items-center gap-3 pt-2 text-sm font-medium">
                <a
                  href={siteConfig.hero.buttons.work.href}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-semibold shadow-lg shadow-teal-500/20 transition-all"
                >
                  <span>{siteConfig.hero.buttons.work.label}</span>
                  <ArrowDown className="w-4 h-4" />
                </a>

                <a
                  href={siteConfig.hero.buttons.research.href}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)] hover:border-[var(--primary-accent)] hover:text-[var(--primary-accent)] hover:bg-[var(--surface-subtle)] transition-all"
                >
                  <span>{siteConfig.hero.buttons.research.label}</span>
                  <ArrowRight className="w-4 h-4 text-[var(--text-muted)]" />
                </a>

                <a
                  href={siteConfig.hero.buttons.cv.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)] hover:border-[var(--primary-accent)] hover:text-[var(--primary-accent)] hover:bg-[var(--surface-subtle)] transition-all"
                  aria-label="View Curriculum Vitae"
                >
                  <FileDown className="w-4 h-4 text-[var(--primary-accent)]" />
                  <span>{siteConfig.hero.buttons.cv.label}</span>
                </a>

                <div className="flex items-center gap-2 pl-1">
                  <a
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-muted)] hover:text-[var(--text-main)] hover:border-[var(--primary-accent)] hover:bg-[var(--surface-subtle)] transition-all"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>

                  <a
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-muted)] hover:text-[#0077B5] hover:border-[#0077B5] hover:bg-[var(--surface-subtle)] transition-all"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>

                  <a
                    href={`mailto:${siteConfig.links.email}`}
                    className="p-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-muted)] hover:text-[var(--primary-accent)] hover:border-[var(--primary-accent)] hover:bg-[var(--surface-subtle)] transition-all"
                    aria-label="Send Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Portrait Asset with Radiant Ring */}
            <div className="shrink-0 w-44 sm:w-52 lg:w-56">
              <div className="relative p-1 rounded-2xl bg-gradient-to-br from-teal-500/30 via-cyan-500/20 to-blue-500/30 shadow-xl shadow-teal-500/10">
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--surface)]">
                  <Image
                    src="/fateha-hossain.jpg"
                    alt="Portrait of Fateha Hossain"
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 176px, (max-width: 1024px) 208px, 224px"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Three Pillars Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-4 border-t border-[var(--border-subtle)]">
            {siteConfig.narrative.threePillars.map((pillar, idx) => (
              <div
                key={idx}
                className="editorial-card p-5 space-y-2"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-md bg-[var(--surface-subtle)] border border-[var(--border-subtle)]">
                    {pillarIcons[idx]}
                  </div>
                  <h3 className="text-base font-semibold text-[var(--text-main)]">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-sm text-[var(--text-muted)] leading-6">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 2. SELECTED WORK SECTION */}
        <section id="work" className="space-y-6 scroll-mt-20" aria-labelledby="work-heading">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[var(--border-color)] pb-3">
            <div>
              <span className="text-xs font-semibold text-[var(--primary-accent)] uppercase tracking-wider">
                01 / Selected Work
              </span>
              <h2
                id="work-heading"
                className="mt-0.5 text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-main)]"
              >
                Selected Work
              </h2>
            </div>
            <p className="text-sm text-[var(--text-muted)] max-w-md">
              Four implementations spanning software-defined networking, infrastructure monitoring, healthcare analytics, and degree planning.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        {/* 3. ADDITIONAL ENGINEERING PROJECTS */}
        <section className="space-y-5" aria-labelledby="additional-work-heading">
          <div className="border-b border-[var(--border-color)] pb-3">
            <span className="text-xs font-semibold text-[var(--secondary-accent)] uppercase tracking-wider">
              02 / Additional Work
            </span>
            <h3
              id="additional-work-heading"
              className="mt-0.5 text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-main)]"
            >
              Additional Engineering Work
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {additionalProjects.map((project, idx) => (
              <AdditionalProjectCard key={idx} project={project} />
            ))}
          </div>
        </section>

        {/* 4. RESEARCH DIRECTION SECTION */}
        <section id="research" className="space-y-6 scroll-mt-20" aria-labelledby="research-heading">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[var(--border-color)] pb-3">
            <div>
              <span className="text-xs font-semibold text-[var(--primary-accent)] uppercase tracking-wider">
                03 / Research
              </span>
              <h2
                id="research-heading"
                className="mt-0.5 text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-main)]"
              >
                {researchDirection.heading}
              </h2>
            </div>
            <Link
              href="/research"
              className="text-sm font-semibold text-[var(--primary-accent)] hover:underline inline-flex items-center gap-1.5"
            >
              <span>All Research</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Narrative & Focus Topics (5 only on homepage) */}
          <div className="editorial-card editorial-card-accent p-6 sm:p-7 space-y-4">
            <p className="text-base leading-7 text-[var(--text-main)]">
              {researchDirection.overview}
            </p>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-[var(--border-subtle)] items-center">
              {researchDirection.homepageTopics.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-md bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)] font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Research Outputs Preview (Short titles, no repeated chips) */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
              Current Research Outputs &amp; Manuscripts
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {researchOutputs.slice(0, 3).map((item, idx) => (
                <ResearchCard
                  key={idx}
                  output={item}
                  useShortTitle={true}
                  showTopics={false}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 5. EXPERIENCE SECTION */}
        <section id="experience" className="space-y-6 scroll-mt-20" aria-labelledby="exp-heading">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[var(--border-color)] pb-3">
            <div>
              <span className="text-xs font-semibold text-[var(--primary-accent)] uppercase tracking-wider">
                04 / Experience
              </span>
              <h2
                id="exp-heading"
                className="mt-0.5 text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-main)]"
              >
                Experience
              </h2>
            </div>
            <Link
              href="/about"
              className="text-sm font-semibold text-[var(--primary-accent)] hover:underline inline-flex items-center gap-1.5"
            >
              <span>More Experience</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {primaryExperience.map((role, idx) => (
              <ExperienceItem key={idx} role={role} />
            ))}
          </div>
        </section>

        {/* 6. TECHNICAL CAPABILITIES SECTION */}
        <section id="capabilities" className="space-y-6 scroll-mt-20" aria-labelledby="skills-heading">
          <div className="border-b border-[var(--border-color)] pb-3">
            <span className="text-xs font-semibold text-[var(--primary-accent)] uppercase tracking-wider">
              05 / Capabilities
            </span>
            <h2
              id="skills-heading"
              className="mt-0.5 text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-main)]"
            >
              Technical Capabilities
            </h2>
          </div>

          <SkillsMatrix />
        </section>

        {/* 7. BRIEF ABOUT & EDUCATION */}
        <section id="about" className="space-y-6 scroll-mt-20" aria-labelledby="about-heading">
          <div className="border-b border-[var(--border-color)] pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs font-semibold text-[var(--primary-accent)] uppercase tracking-wider">
                06 / Education
              </span>
              <h2
                id="about-heading"
                className="mt-0.5 text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-main)]"
              >
                Academic Background
              </h2>
            </div>
            <Link
              href="/about"
              className="text-sm font-semibold text-[var(--primary-accent)] hover:underline inline-flex items-center gap-1.5"
            >
              <span>Read Detailed Bio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="lg:col-span-2 editorial-card p-6 sm:p-7 space-y-3">
              <h3 className="text-lg font-bold text-[var(--text-main)]">
                Engineering Philosophy &amp; Research Focus
              </h3>
              <p className="text-sm sm:text-base text-[var(--text-muted)] leading-7">
                {siteConfig.narrative.aboutText}
              </p>
              <div className="pt-3 border-t border-[var(--border-subtle)]">
                <p className="text-xs text-[var(--text-muted)]">
                  {siteConfig.additionalTraining}
                </p>
              </div>
            </div>

            <div className="editorial-card p-6 sm:p-7 space-y-4 flex flex-col justify-between">
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-[var(--primary-accent)]">
                  <GraduationCap className="w-4 h-4" />
                  <span className="font-bold text-sm">Formal Education</span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-[var(--text-main)]">
                    {siteConfig.education[0].degree}
                  </h4>
                  <p className="text-sm text-[var(--text-muted)] mt-0.5">
                    {siteConfig.education[0].institution} · {siteConfig.education[0].location}
                  </p>
                  <p className="text-sm text-[var(--primary-accent)] mt-0.5 font-semibold">
                    {siteConfig.education[0].period}
                  </p>
                </div>

                {siteConfig.education[0].distinction && (
                  <div className="flex items-start gap-2 p-2.5 rounded-lg bg-[var(--primary-accent-subtle)] border border-[var(--primary-accent)]/20 text-xs text-[var(--primary-accent)] font-medium">
                    <Award className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>Academic distinction: {siteConfig.education[0].distinction}</span>
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-[var(--border-color)]">
                <a
                  href={siteConfig.links.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--surface)] text-sm text-[var(--text-main)] hover:border-[var(--primary-accent)] hover:text-[var(--primary-accent)] hover:bg-[var(--surface-subtle)] transition-all font-medium"
                >
                  <FileDown className="w-4 h-4 text-[var(--primary-accent)]" />
                  <span>View Full Curriculum Vitae</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 8. CONTACT SECTION */}
        <ContactSection />
      </div>
    </div>
  );
}
