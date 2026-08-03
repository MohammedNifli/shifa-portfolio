import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FEATURED_PROJECTS } from '../constants';
import { FaEye, FaTimes, FaGem, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Projects = ({ theme }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const isDark = theme === 'dark';

  const selectedProject = selectedIndex !== null ? FEATURED_PROJECTS[selectedIndex] : null;

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === 0 ? FEATURED_PROJECTS.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === FEATURED_PROJECTS.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setSelectedIndex(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  return (
    <section id="projects" className={`py-24 sm:py-32 transition-colors duration-300 relative ${
      isDark ? "bg-[#050505] text-white" : "bg-white text-zinc-900"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={`text-xs uppercase tracking-[0.3em] font-mono block ${
            isDark ? "text-amber-400" : "text-amber-700 font-semibold"
          }`}>
            Featured Portfolio
          </span>

          <h2 className={`font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide uppercase ${
            isDark ? "text-white" : "text-zinc-900"
          }`}>
            Featured CAD Projects
          </h2>

          <p className={`text-sm sm:text-base font-light leading-relaxed max-w-xl mx-auto ${
            isDark ? "text-zinc-400" : "text-zinc-600"
          }`}>
            Precision 3D CAD geometry, parametric surface models, and production specs crafted for Titan Company Limited & haute joaillerie lines.
          </p>

          <div className={`w-16 h-[1px] mx-auto mt-4 ${
            isDark ? "bg-amber-400/40" : "bg-amber-600/40"
          }`} />
        </motion.div>

        {/* Standard Clean Responsive Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {FEATURED_PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
              className={`rounded-2xl overflow-hidden group cursor-pointer border flex flex-col justify-between transition-all duration-300 ${
                isDark 
                  ? "bg-[#0a0a0e] border-zinc-800/80 hover:border-amber-400/50 hover:shadow-2xl hover:shadow-amber-500/10" 
                  : "bg-white border-zinc-200 hover:border-amber-600/50 hover:shadow-xl hover:shadow-zinc-200"
              }`}
              onClick={() => setSelectedIndex(index)}
            >
              {/* Image Frame */}
              <div className="relative aspect-square overflow-hidden p-4 flex items-center justify-center bg-black/5">
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-contain filter contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Overlay Text on Hover */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white backdrop-blur-[2px]">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-amber-300 font-mono">
                    {project.category}
                  </span>
                  <h3 className="text-xs sm:text-sm font-semibold tracking-wider uppercase mt-1 text-white">
                    {project.title}
                  </h3>
                  <p className="text-[10px] text-zinc-300 font-mono mt-2 flex items-center gap-1.5 pt-2 border-t border-white/10">
                    <FaGem className="text-amber-400" /> {project.specs}
                  </p>
                </div>
              </div>

              {/* Card Footer Caption */}
              <div className={`p-4 border-t flex justify-between items-center text-xs ${
                isDark 
                  ? "border-zinc-800/80 bg-[#07070a]" 
                  : "border-zinc-100 bg-zinc-50"
              }`}>
                <span className={`font-medium tracking-wide truncate pr-2 ${
                  isDark ? "text-zinc-200" : "text-zinc-800"
                }`}>
                  {project.title}
                </span>

                <span className={`text-[10px] font-mono uppercase tracking-widest flex items-center gap-1 shrink-0 ${
                  isDark ? "text-amber-400" : "text-amber-700"
                }`}>
                  <FaEye /> Inspect
                </span>
              </div>

            </motion.div>
          ))}
        </div>

        {/* High-Res Interactive Lightbox Viewer with Gallery Next/Prev Controls */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIndex(null)}
            >
              <motion.div
                className={`relative max-w-4xl w-full border p-6 sm:p-8 rounded-3xl flex flex-col items-center shadow-2xl ${
                  isDark 
                    ? "bg-[#0a0a0e] border-amber-500/30 text-white" 
                    : "bg-white border-zinc-300 text-zinc-900"
                }`}
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedIndex(null)}
                  className={`absolute top-6 right-6 text-xs uppercase tracking-widest border px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors z-10 ${
                    isDark ? "border-zinc-800 text-zinc-300 hover:text-white bg-black/40" : "border-zinc-300 text-zinc-600 hover:text-black bg-white"
                  }`}
                >
                  <FaTimes /> Close
                </button>

                {/* Gallery Position Counter Badge */}
                <span className="absolute top-6 left-6 text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300">
                  {selectedIndex + 1} of {FEATURED_PROJECTS.length}
                </span>

                {/* Image Container with Prev & Next Arrows */}
                <div className="relative w-full aspect-square max-h-[60vh] flex items-center justify-center my-6 bg-black/5 rounded-2xl p-4 group">
                  
                  {/* Previous Button */}
                  <button
                    onClick={handlePrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 hover:bg-amber-400 hover:text-black transition-all shadow-xl z-10"
                    title="Previous Project"
                  >
                    <FaChevronLeft className="text-sm" />
                  </button>

                  {/* High Res Image */}
                  <img 
                    key={selectedProject.id}
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="max-w-full max-h-full object-contain transition-all duration-300"
                  />

                  {/* Next Button */}
                  <button
                    onClick={handleNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 hover:bg-amber-400 hover:text-black transition-all shadow-xl z-10"
                    title="Next Project"
                  >
                    <FaChevronRight className="text-sm" />
                  </button>
                </div>

                {/* Specs Details */}
                <div className="text-center space-y-2 max-w-xl">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-amber-500 font-mono font-semibold">
                    {selectedProject.category}
                  </span>
                  <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold tracking-wider uppercase">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs text-zinc-300 font-mono bg-black/60 px-4 py-2 rounded-full inline-block border border-amber-500/20">
                    <FaGem className="inline text-amber-400 mr-1.5" />
                    {selectedProject.specs}
                  </p>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Projects;
