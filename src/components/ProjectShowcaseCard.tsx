import React from "react";
import Carousel from "./Carousel";

export default function ProjectShowcaseCard({ project, index }: { project: any; index: number }) {
  const isEven = index % 2 === 0;
  
  const desktopImages = project.desktopImages?.length > 0 ? project.desktopImages : project.images || ["/placeholder-1.jpg"];
  const mobileImages = project.mobileImages?.length > 0 ? project.mobileImages : ["/placeholder-2.jpg"];

  return (
    <div className="group relative overflow-hidden rounded-[2rem] border border-black/5 dark:border-white/5 bg-white/70 dark:bg-white/5 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-emerald-500/20 dark:hover:border-emerald-400/20 hover:shadow-[0_30px_60px_rgba(16,185,129,0.1)]">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(800px_circle_at_50%_50%,rgba(56,189,248,0.04),transparent_70%)] dark:bg-[radial-gradient(800px_circle_at_50%_50%,rgba(56,189,248,0.08),transparent_70%)]" />
      
      <div className={`grid lg:grid-cols-[1fr_1.1fr] gap-0 relative z-10`}>
        <div className={`p-8 sm:p-12 flex flex-col justify-center ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
          <p className="text-[11px] uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-300 mb-3 drop-shadow-[0_0_10px_rgba(16,185,129,0.2)] dark:drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]">
            {project.category}
          </p>
          <h3 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-6 font-[var(--font-playfair)]">
            {project.title}
          </h3>
          
          <div className="space-y-6 mb-8">
            <div>
              <h4 className="text-sm font-semibold text-neutral-600 dark:text-neutral-300 mb-2 uppercase tracking-wider text-sky-600 dark:text-sky-200/80">Problem</h4>
              <p className="text-neutral-700 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">{project.problem}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-neutral-600 dark:text-neutral-300 mb-2 uppercase tracking-wider text-purple-600 dark:text-purple-200/80">Solution</h4>
              <p className="text-neutral-700 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">{project.solution}</p>
            </div>
          </div>
          
          <div className="mb-8">
            <h4 className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 mb-3 uppercase tracking-wider">Key Features</h4>
            <ul className="space-y-2">
              {(project.features || []).map((f: string) => (
                <li key={f} className="text-neutral-700 dark:text-neutral-300 text-sm flex items-start">
                  <span className="mr-2 text-emerald-500 dark:text-emerald-400 text-lg leading-none shadow-[0_0_10px_rgba(52,211,153,0.2)] dark:shadow-[0_0_10px_rgba(52,211,153,0.5)]">•</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {(project.tech || []).map((t: string) => (
              <span key={t} className="rounded-full bg-black/5 dark:bg-white/10 px-3 py-1 text-xs text-neutral-700 dark:text-neutral-200 border border-black/5 dark:border-white/5 shadow-inner">
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mt-auto">
            {project.links?.demo && project.links.demo !== "#" && (
              <a href={project.links.demo} target="_blank" rel="noreferrer" className="btn-base btn-md btn-emerald btn-hover btn-shine hover:bg-emerald-500">
                Live Demo
              </a>
            )}
            {project.links?.github && (
              <a href={project.links.github} target="_blank" rel="noreferrer" className="btn-base btn-md btn-glass btn-hover btn-shine">
                GitHub Repo
              </a>
            )}
          </div>
        </div>
        
        {/* Device Frames Section */}
        <div className={`relative p-8 sm:p-12 flex items-center justify-center bg-black/5 dark:bg-black/20 ${isEven ? 'lg:order-2 lg:border-l' : 'lg:order-1 lg:border-r'} border-black/5 dark:border-white/5 overflow-hidden`}>
          <div className="absolute inset-0 bg-[radial-gradient(500px_circle_at_50%_50%,rgba(56,189,248,0.02),transparent_80%)] dark:bg-[radial-gradient(500px_circle_at_50%_50%,rgba(56,189,248,0.05),transparent_80%)]" />
          
          <div className="relative w-full max-w-xl mx-auto flex flex-col items-center justify-center h-full min-h-[500px]">
            {/* Desktop Frame (Upper Half) */}
            <div className="relative w-[90%] sm:w-full max-w-lg z-10 -translate-y-6 sm:-translate-y-8 transition-transform hover:scale-[1.02] duration-500 shadow-2xl">
              <Carousel images={desktopImages} altPrefix={project.title} type="desktop" />
            </div>

            {/* Mobile Frame (Lower Half) - Tucked underneath but visible */}
            <div className="absolute right-[5%] sm:right-[15%] lg:right-[10%] bottom-0 sm:bottom-4 translate-y-6 sm:translate-y-8 z-20 transition-transform hover:scale-[1.05] hover:-translate-y-2 duration-500 shadow-2xl">
              <Carousel images={mobileImages} altPrefix={`${project.title} Mobile`} type="mobile" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
