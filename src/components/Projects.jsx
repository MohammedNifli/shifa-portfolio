import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FEATURED_PROJECTS } from '../constants';

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="projects" className="py-28 bg-[#050505] text-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Heading */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-medium block">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-white uppercase">
            Featured CAD Projects
          </h2>
          <div className="w-12 h-[1px] bg-zinc-700 mx-auto mt-4" />
        </motion.div>

        {/* Gallery Grid (3 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="dark-card rounded-none overflow-hidden group cursor-pointer border border-zinc-900 bg-black flex flex-col justify-between"
              onClick={() => setSelectedImage(project)}
            >
              {/* Image Frame with Subtle Zoom Effect */}
              <div className="relative aspect-square overflow-hidden bg-black p-4 flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-contain filter contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Overlay Text on Hover */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-mono">
                    {project.category}
                  </span>
                  <h3 className="text-sm font-medium tracking-wider text-white uppercase mt-1">
                    {project.title}
                  </h3>
                  <p className="text-[11px] text-zinc-400 font-mono mt-2">
                    {project.specs}
                  </p>
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
        </div>

        {/* High-Res Modal Viewer */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="relative max-w-4xl w-full bg-black border border-zinc-800 p-6 sm:p-8 text-white flex flex-col items-center"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 text-xs uppercase tracking-widest text-zinc-400 hover:text-white border border-zinc-800 px-3 py-1"
                >
                  Close
                </button>

                <div className="w-full aspect-square max-h-[65vh] flex items-center justify-center mb-6 bg-black">
                  <img 
                    src={selectedImage.image} 
                    alt={selectedImage.title} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                <div className="text-center space-y-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-mono">
                    {selectedImage.category}
                  </span>
                  <h3 className="text-lg font-light tracking-wider uppercase text-white">
                    {selectedImage.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-mono">
                    {selectedImage.specs}
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
