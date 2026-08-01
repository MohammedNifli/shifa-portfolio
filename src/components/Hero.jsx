import React from 'react';
import { motion } from 'framer-motion';
import { HERO_DATA } from '../constants';

const Hero = () => {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById("projects");
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-black">
      
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={HERO_DATA.videoUrl} type="video/mp4" />
      </video>

      {/* 40% Subtle Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Hero Text Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        
        <motion.h1 
          className="text-3xl sm:text-5xl md:text-6xl font-light tracking-[0.2em] text-white uppercase mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {HERO_DATA.headline}
        </motion.h1>

        <motion.p 
          className="text-sm sm:text-base md:text-lg text-zinc-300 font-light max-w-2xl tracking-wider mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {HERO_DATA.subtitle}
        </motion.p>

        <motion.a 
          href="#projects"
          onClick={scrollToProjects}
          className="px-8 py-3.5 bg-white text-black font-medium text-xs uppercase tracking-[0.25em] hover:bg-zinc-200 transition-all duration-300 border border-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          {HERO_DATA.ctaText}
        </motion.a>

      </div>

      {/* Scroll indicator line */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400">Scroll</span>
        <div className="w-[1px] h-8 bg-zinc-600 animate-pulse" />
      </div>

    </section>
  );
};

export default Hero;