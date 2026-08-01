import React from 'react';
import { motion } from 'framer-motion';
import { HERO_DATA } from '../constants';

const Hero = ({ onOpenResume }) => {
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
    <section id="hero" className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-black select-none">
      
      {/* Watermark-Free Fullscreen Video Container */}
      <div className="video-container absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover transform scale-[1.10] origin-center filter contrast-105 brightness-95"
        >
          <source src={HERO_DATA.videoUrl} type="video/mp4" />
        </video>
      </div>

      {/* 40% Subtle Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/80 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        
        {/* Subtle Top Badge */}
        <motion.div
          className="inline-block px-4 py-1.5 border border-white/20 bg-black/40 backdrop-blur-md text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-300 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Rhino 8 3D CAD Specialist | Titan Authorized Vendor Sulu
        </motion.div>

        {/* Headline */}
        <motion.h1 
          className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[0.15em] text-white uppercase mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {HERO_DATA.headline}
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          className="text-sm sm:text-base md:text-lg text-zinc-300 font-light max-w-2xl tracking-wider mb-10 leading-relaxed font-sans"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          {HERO_DATA.subtitle}
        </motion.p>

        {/* CTA Action Buttons */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-4"
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
            className="px-8 py-3.5 bg-black/60 backdrop-blur-md text-white font-semibold text-xs uppercase tracking-[0.25em] hover:bg-white hover:text-black transition-all duration-300 border border-zinc-700 hover:scale-105"
          >
            {HERO_DATA.ctaResume}
          </button>
        </motion.div>

      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-mono">Scroll Down</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-zinc-400 to-transparent animate-pulse" />
      </motion.div>

    </section>
  );
};

export default Hero;