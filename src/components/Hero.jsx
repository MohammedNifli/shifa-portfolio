import React from 'react';
import { motion } from 'framer-motion';
import { HERO_DATA } from '../constants';

const Hero = ({ isDarkMode, onOpenResume }) => {
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
    <section id="hero" className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      
      {/* Video Container with Scale Hack to remove Corner Watermarks */}
      <div className="video-container absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-[1.09]"
        >
          <source src={HERO_DATA.videoUrl} type="video/mp4" />
        </video>
      </div>

      {/* Subtle Overlay (Dark/Light adapted) */}
      <div className={`absolute inset-0 z-10 transition-colors duration-500 ${
        isDarkMode ? "bg-black/45" : "bg-black/35"
      }`} />

      {/* Hero Text Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono uppercase tracking-widest"
        >
          <span>Rhino 8 & MatrixGold Specialist</span>
        </motion.div>

        <motion.h1 
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[0.2em] text-white uppercase mb-6 leading-tight font-serif-luxury drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {HERO_DATA.headline}
        </motion.h1>

        <motion.p 
          className="text-sm sm:text-base md:text-lg text-zinc-200 font-light max-w-2xl tracking-wider mb-10 leading-relaxed drop-shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          {HERO_DATA.subtitle}
        </motion.p>

        <motion.div 
          className="flex flex-wrap gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <a 
            href="#projects"
            onClick={scrollToProjects}
            className="px-8 py-3.5 bg-white text-black font-semibold text-xs uppercase tracking-[0.25em] hover:bg-zinc-200 transition-all duration-300 border border-white shadow-xl hover:scale-105"
          >
            {HERO_DATA.ctaText}
          </a>

          <button
            onClick={onOpenResume}
            className="px-8 py-3.5 bg-black/50 backdrop-blur-md text-white font-semibold text-xs uppercase tracking-[0.25em] hover:bg-black/70 transition-all duration-300 border border-white/40 hover:scale-105"
          >
            Digital CV
          </button>
        </motion.div>

      </div>

      {/* Scroll indicator line */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/80 font-mono">Scroll</span>
        <div className="w-[1px] h-8 bg-white/60" />
      </motion.div>

    </section>
  );
};

export default Hero;