import React from 'react';
import { motion } from 'framer-motion';
import { HERO_DATA, PERSONAL_INFO } from '../constants';
import { FaGem, FaArrowDown, FaBuilding, FaDraftingCompass } from 'react-icons/fa';

const Hero = ({ theme, onOpenResume }) => {
  const isDark = theme === 'dark';

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
      
      {/* Background Video with Corner Watermark Removal Crop (scale-110 & overflow-hidden) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden select-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover transform scale-110 filter brightness-[0.95] contrast-[1.05]"
        >
          <source src={HERO_DATA.videoUrl} type="video/mp4" />
        </video>
      </div>

      {/* Responsive Gradient Overlay - Dark/Light aware */}
      <div className={`absolute inset-0 z-10 transition-opacity duration-500 ${
        isDark 
          ? "bg-gradient-to-b from-black/60 via-black/40 to-black/90" 
          : "bg-gradient-to-b from-black/50 via-black/30 to-black/80"
      }`} />

      {/* Hero Content Overlay Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pt-12">
        
        {/* Floating Top Badge */}
        <motion.div 
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-amber-400/40 text-amber-300 text-xs font-medium uppercase tracking-widest mb-8 shadow-2xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <FaBuilding className="text-amber-400" />
          <span>Titan Vendor (Zulu Design Studio) CAD Designer</span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider text-white uppercase mb-6 leading-[1.15] drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          PRECISION IN <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 italic font-normal">
            3D CAD JEWELRY DESIGN
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          className="text-sm sm:text-base md:text-lg text-zinc-200 font-light max-w-2xl tracking-wide mb-10 leading-relaxed drop-shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          {HERO_DATA.subtitle}
        </motion.p>

        {/* CTA Button Group */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <a 
            href="#projects"
            onClick={scrollToProjects}
            className="px-8 py-3.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-[0.25em] hover:bg-amber-300 transition-all duration-300 shadow-xl border border-white hover:border-amber-300 hover:scale-105"
          >
            {HERO_DATA.ctaText}
          </a>

          <button 
            onClick={onOpenResume}
            className="px-8 py-3.5 rounded-full bg-black/60 backdrop-blur-md text-amber-300 font-semibold text-xs uppercase tracking-[0.2em] border border-amber-400/50 hover:bg-amber-500/20 hover:border-amber-300 transition-all duration-300 shadow-xl"
          >
            Download CV / Resume
          </button>
        </motion.div>

        {/* Quick Highlights Metrics */}
        <motion.div 
          className="grid grid-cols-3 gap-6 sm:gap-12 mt-12 pt-8 border-t border-zinc-500/30 max-w-xl mx-auto text-zinc-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div>
            <span className="block font-serif-luxury text-xl sm:text-2xl font-bold text-amber-300">2 Years</span>
            <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-mono">CAD Experience</span>
          </div>
          <div>
            <span className="block font-serif-luxury text-xl sm:text-2xl font-bold text-amber-300">Rhino 8</span>
            <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-mono">Advanced 3D</span>
          </div>
          <div>
            <span className="block font-serif-luxury text-xl sm:text-2xl font-bold text-amber-300">Titan Vendor</span>
            <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-mono">Zulu Design</span>
          </div>
        </motion.div>

      </div>

      {/* Animated Scroll Arrow */}
      <motion.a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          const el = document.getElementById("about");
          if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[9px] uppercase tracking-[0.3em] font-mono">Scroll Down</span>
        <FaArrowDown className="text-xs text-amber-400" />
      </motion.a>

    </section>
  );
};

export default Hero;