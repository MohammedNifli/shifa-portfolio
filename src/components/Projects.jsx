import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FEATURED_PROJECTS } from '../constants';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    "All",
    "High Jewelry",
    "Engagement Rings",
    "Commercial Line",
    "Heritage & Bangles",
    "Pendants & Chains"
  ];

  const filteredProjects = activeFilter === "All"
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-32 bg-[#050505] text-white relative border-b border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Heading */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-mono block">
            03 / SELECTED WORKS
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-white uppercase">
            Featured CAD Projects
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-light tracking-wider max-w-xl mx-auto">
            High-precision 3D CAD models, Titan vendor commercial lines, and haute joaillerie digital blueprints engineered in Rhino 8.
          </p>
          <div className="w-12 h-[1px] bg-zinc-800 mx-auto mt-4" />
        </motion.div>

        {/* Category Filters */}
        <motion.div 
          className="flex justify-center flex-wrap gap-2.5 mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 text-[11px] font-mono tracking-widest uppercase transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-white text-black font-semibold border border-white shadow-lg"
                  : "bg-black text-zinc-400 hover:text-white border border-zinc-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid (3 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="dark-card rounded-none overflow-hidden group cursor-pointer border border-zinc-900 bg-black flex flex-col justify-between"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image Container with Subtle Zoom Effect */}
                <div className="relative aspect-square overflow-hidden bg-black p-4 flex items-center justify-center">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-contain filter contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Overlay Specs on Hover */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-mono">
                      {project.category}
                    </span>

                    <div className="space-y-2">
                      <h3 className="text-sm font-light tracking-wider text-white uppercase font-serif-luxury">
                        {project.title}
                      </h3>
                      <p className="text-[11px] text-zinc-400 font-mono leading-relaxed">
                        {project.specs}
                      </p>
                    </div>

                    <span className="text-[10px] uppercase tracking-[0.2em] text-white font-mono border-t border-zinc-800 pt-3">
                      Click to Inspect Specification Sheet →
                    </span>
                  </div>
                </div>

                {/* Card Footer Caption */}
                <div className="p-4 border-t border-zinc-900 bg-[#050505] flex justify-between items-center text-xs">
                  <span className="text-zinc-300 font-light tracking-wide uppercase truncate pr-2">
                    {project.title}
                  </span>
                  <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest shrink-0">
                    Inspect
                  </span>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Technical CAD Specification Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="relative max-w-3xl w-full bg-black border border-zinc-800 p-6 sm:p-10 text-white max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 text-xs uppercase tracking-widest text-zinc-400 hover:text-white border border-zinc-800 px-3 py-1.5 font-mono"
                >
                  Close
                </button>

                <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 font-mono block mb-1">
                  Titan Vendor CAD Specification Sheet
                </span>

                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-light tracking-wide text-white uppercase mb-4">
                  {selectedProject.title}
                </h3>

                {/* Image Showcase */}
                <div className="w-full aspect-[4/3] bg-black border border-zinc-800 p-4 flex items-center justify-center mb-6">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                {/* Specs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 font-mono text-xs">
                  <div className="p-4 bg-[#050505] border border-zinc-900">
                    <span className="text-[10px] text-zinc-500 uppercase block mb-1">Metal Specification</span>
                    <span className="text-white">{selectedProject.metal}</span>
                  </div>
                  <div className="p-4 bg-[#050505] border border-zinc-900">
                    <span className="text-[10px] text-zinc-500 uppercase block mb-1">Estimated Gold Weight</span>
                    <span className="text-white">{selectedProject.weight}</span>
                  </div>
                  <div className="p-4 bg-[#050505] border border-zinc-900">
                    <span className="text-[10px] text-zinc-500 uppercase block mb-1">Gemstone Allocation</span>
                    <span className="text-white">{selectedProject.gemstones}</span>
                  </div>
                  <div className="p-4 bg-[#050505] border border-zinc-900">
                    <span className="text-[10px] text-zinc-500 uppercase block mb-1">Rhino 8 Feature</span>
                    <span className="text-white">{selectedProject.specs}</span>
                  </div>
                </div>

                {/* CTA Action */}
                <div className="flex justify-end gap-3 pt-4 border-t border-zinc-900">
                  <a
                    href="#contact"
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-3 bg-white text-black font-semibold text-xs uppercase tracking-[0.2em] border border-white hover:bg-zinc-200 transition-colors"
                  >
                    Inquire About This CAD Model
                  </a>
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
