"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  images: string[];
  altPrefix: string;
  type?: "desktop" | "mobile";
}

export default function Carousel({ images, altPrefix, type = "desktop" }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered, images.length]);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  if (!images || images.length === 0) return null;

  const isMobile = type === "mobile";
  
  return (
    <div
      className={`group relative overflow-hidden shadow-2xl ${
        isMobile 
          ? "w-[160px] h-[340px] sm:w-[200px] sm:h-[420px] rounded-[2rem] border-[6px] border-neutral-300 bg-neutral-100 dark:border-neutral-800 dark:bg-black" 
          : "w-full aspect-[16/10] rounded-xl border border-neutral-300 dark:border-neutral-700/50 bg-white dark:bg-black"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Desktop Browser Top Bar Mockup */}
      {!isMobile && (
        <div className="absolute top-0 inset-x-0 h-6 bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-300 dark:border-neutral-700/50 flex items-center px-3 gap-1.5 z-30">
          <div className="w-2 h-2 rounded-full bg-red-400 dark:bg-red-500/80"></div>
          <div className="w-2 h-2 rounded-full bg-amber-400 dark:bg-amber-500/80"></div>
          <div className="w-2 h-2 rounded-full bg-green-400 dark:bg-green-500/80"></div>
        </div>
      )}

      {/* Mobile Notch Mockup */}
      {isMobile && (
        <div className="absolute top-0 inset-x-0 h-5 flex justify-center z-30">
          <div className="w-1/2 h-full bg-neutral-300 dark:bg-neutral-800 rounded-b-xl"></div>
        </div>
      )}

      <div className={`absolute inset-0 z-0 bg-black/5 dark:bg-white/5 backdrop-blur-sm ${!isMobile ? "mt-6" : ""}`} />
      
      <div className={`absolute inset-0 z-10 ${!isMobile ? "top-6" : "overflow-hidden rounded-[1.5rem]"}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            {images[currentIndex].startsWith("/") && !images[currentIndex].includes("res.cloudinary") ? (
              <div className="flex h-full w-full items-center justify-center bg-neutral-100 dark:bg-neutral-900 text-xs text-neutral-500 backdrop-blur-md">
                No Image
              </div>
            ) : (
              <Image
                src={images[currentIndex]}
                alt={`${altPrefix} screenshot ${currentIndex + 1}`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full border border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/50 p-1.5 text-neutral-800 dark:text-white opacity-0 shadow-lg backdrop-blur-xl transition-all hover:bg-white/80 dark:hover:bg-white/10 group-hover:opacity-100"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full border border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/50 p-1.5 text-neutral-800 dark:text-white opacity-0 shadow-lg backdrop-blur-xl transition-all hover:bg-white/80 dark:hover:bg-white/10 group-hover:opacity-100"
            aria-label="Next image"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          
          <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-1.5 rounded-full border border-black/10 dark:border-white/10 bg-white/40 dark:bg-black/40 px-2 py-1 backdrop-blur-xl">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-1 sm:h-1.5 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "w-4 sm:w-6 bg-emerald-500 dark:bg-emerald-400" : "w-1 sm:w-1.5 bg-black/40 dark:bg-white/40 hover:bg-black/80 dark:hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
