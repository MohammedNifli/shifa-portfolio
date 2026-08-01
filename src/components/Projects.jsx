import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FEATURED_PROJECTS } from '../constants';

const Projects = ({ isDarkMode }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="projects" className={`py-28 relative transition-colors duration-500 ${
      isDarkMode ? "bg-[#09090e] text-white" : "bg-[#f4f1ea] text-zinc-900"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Heading */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={`text-xs uppercase tracking-[0.3em] font-mono font-medium block ${
            isDarkMode ? "text-amber-400" : "text-amber-700"
          }`}>
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide uppercase font-serif-luxury">
            Featured CAD Projects
          </h2>
          <div className={`w-16 h-[1px] mx-auto mt-4 ${
            isDarkMode ? "bg-amber-500/40" : "bg-amber-700/40"
          }`} />
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
              whileHover={{ y: -6 }}
              className={`rounded-none overflow-hidden group cursor-pointer border flex flex-col justify-between transition-all duration-300 ${
                isDarkMode 
                  ? "border-zinc-800 bg-[#0c0c12] hover:border-amber-500/50 shadow-xl" 
                  : "border-zinc-300 bg-white hover:border-amber-600 shadow-md hover:shadow-2xl"
              }`}
              onClick={() => setSelectedImage(project)}
            >
              {/* Image Frame with Subtle Zoom Effect */}
              <div className={`relative aspect-square overflow-hidden p-6 flex items-center justify-center ${
                isDarkMode ? "bg-black/60" : "bg-zinc-50"
              }`}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-contain filter contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Overlay Text on Hover */}
                <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-amber-400 font-mono">
                    {project.category}
                  </span>
                  <h3 className="text-sm font-medium tracking-wider text-white uppercase mt-1">
                    {project.title}
                  </h3>
                  <p className="text-[11px] text-zinc-300 font-mono mt-2">
                    {project.specs}
                  </p>
                </div>
              </div>

              {/* Card Footer Caption */}
              <div className={`p-4 border-t flex justify-between items-center text-xs ${
                isDarkMode ? "border-zinc-800/80 bg-[#07070a]" : "border-zinc-200 bg-zinc-100/80"
              }`}>
                <span className={`font-light tracking-wide uppercase truncate pr-2 ${
                  isDarkMode ? "text-zinc-300" : "text-zinc-800"
                }`}>
                  {project.title}
                </span>
                <span className={`text-[10px] font-mono uppercase tracking-widest shrink-0 font-semibold ${
                  isDarkMode ? "text-amber-400" : "text-amber-700"
                }`}>
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
                className={`relative max-w-4xl w-full border p-6 sm:p-10 flex flex-col items-center shadow-2xl ${
                  isDarkMode ? "bg-[#0c0c12] border-amber-500/40 text-white" : "bg-white border-amber-600 text-zinc-900"
                }`}
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className={`absolute top-4 right-4 text-xs uppercase tracking-widest border px-4 py-1.5 transition-colors ${
                    isDarkMode ? "border-zinc-700 text-zinc-300 hover:text-white hover:border-amber-400" : "border-zinc-300 text-zinc-700 hover:text-black hover:border-amber-600"
                  }`}
                >
                  Close
                </button>

                <div className={`w-full aspect-square max-h-[60vh] flex items-center justify-center mb-6 p-4 rounded ${
                  isDarkMode ? "bg-black" : "bg-zinc-50"
                }`}>
                  <img 
                    src={selectedImage.image} 
                    alt={selectedImage.title} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                <div className="text-center space-y-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-amber-500 font-mono font-semibold block">
                    {selectedImage.category}
                  </span>
                  <h3 className="text-xl font-light tracking-wider uppercase font-serif-luxury">
                    {selectedImage.title}
                  </h3>
                  <p className="text-xs font-mono text-zinc-400">
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
