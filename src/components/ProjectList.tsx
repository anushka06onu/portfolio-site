"use client";

import { useState } from "react";
import ProjectShowcaseCard from "./ProjectShowcaseCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectListProps {
  projects: any[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Sort projects: Pinned first
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    return 0; // maintain original order otherwise
  });

  const totalPages = Math.ceil(sortedProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = sortedProjects.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      // Optional: Scroll to top of project section smoothly
      document.getElementById("project-showcase")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      document.getElementById("project-showcase")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="project-showcase">
      <div className="flex flex-col gap-12 sm:gap-16">
        {currentProjects.map((p, index) => (
          <ProjectShowcaseCard key={p.id || p.title || index} project={p} index={index} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-16 flex items-center justify-center gap-4">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`p-3 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center transition-all ${
              currentPage === 1 
                ? "opacity-50 cursor-not-allowed bg-black/5 dark:bg-white/5" 
                : "bg-white dark:bg-[#0b0f14] hover:bg-black/5 dark:hover:bg-white/10 hover:scale-105 shadow-md"
            }`}
          >
            <ChevronLeft className="w-5 h-5 text-neutral-800 dark:text-white" />
          </button>
          
          <span className="text-sm font-medium text-neutral-600 dark:text-neutral-300">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`p-3 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center transition-all ${
              currentPage === totalPages 
                ? "opacity-50 cursor-not-allowed bg-black/5 dark:bg-white/5" 
                : "bg-white dark:bg-[#0b0f14] hover:bg-black/5 dark:hover:bg-white/10 hover:scale-105 shadow-md"
            }`}
          >
            <ChevronRight className="w-5 h-5 text-neutral-800 dark:text-white" />
          </button>
        </div>
      )}
    </div>
  );
}
