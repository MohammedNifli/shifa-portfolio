import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE_DATA, EDUCATION_DATA, TECHNICAL_MASTERY } from '../constants';

const Career = ({ isDarkMode }) => {
  return (
    <section id="experience" className={`py-28 relative border-t transition-colors duration-500 ${
      isDarkMode ? "bg-[#050508] border-zinc-900 text-white" : "bg-[#fbf9f5] border-zinc-200 text-zinc-900"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20 space-y-3"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={`text-xs uppercase tracking-[0.3em] font-mono font-medium block ${
            isDarkMode ? "text-amber-400" : "text-amber-700"
          }`}>
            Background
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide uppercase font-serif-luxury">
            Experience & Education
          </h2>
          <div className={`w-16 h-[1px] mx-auto mt-4 ${
            isDarkMode ? "bg-amber-500/40" : "bg-amber-700/40"
          }`} />
        </motion.div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Section 1: Experience */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className={`text-xl font-light tracking-widest uppercase border-b pb-4 font-serif-luxury ${
              isDarkMode ? "border-zinc-800 text-white" : "border-zinc-300 text-zinc-900"
            }`}>
              01 / Professional Experience
            </h3>

            {EXPERIENCE_DATA.map((exp, idx) => (
              <motion.div 
                key={idx} 
                className={`p-8 border space-y-4 rounded-none transition-all ${
                  isDarkMode 
                    ? "border-zinc-800 bg-[#0c0c12] hover:border-amber-500/40 shadow-xl" 
                    : "border-zinc-300 bg-white hover:border-amber-600 shadow-md"
                }`}
                whileHover={{ y: -4 }}
              >
                <div className="flex flex-wrap justify-between items-baseline gap-2">
                  <h4 className="text-lg font-medium tracking-wide">
                    {exp.role}
                  </h4>
                  <span className={`text-xs font-mono ${
                    isDarkMode ? "text-amber-400" : "text-amber-700"
                  }`}>
                    {exp.period}
                  </span>
                </div>

                <p className="text-xs uppercase tracking-widest font-mono text-zinc-400">
                  {exp.company}
                </p>

                <p className={`text-sm font-light leading-relaxed tracking-wide pt-2 ${
                  isDarkMode ? "text-zinc-300" : "text-zinc-700"
                }`}>
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Section 2: Education & Technical Mastery */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className={`text-xl font-light tracking-widest uppercase border-b pb-4 font-serif-luxury ${
              isDarkMode ? "border-zinc-800 text-white" : "border-zinc-300 text-zinc-900"
            }`}>
              02 / Education & Technical Mastery
            </h3>

            {/* Education Items */}
            <div className="space-y-6">
              {EDUCATION_DATA.map((edu, idx) => (
                <motion.div 
                  key={idx} 
                  className={`p-6 border space-y-2 rounded-none transition-all ${
                    isDarkMode 
                      ? "border-zinc-800 bg-[#0c0c12] hover:border-amber-500/40" 
                      : "border-zinc-300 bg-white hover:border-amber-600 shadow-sm"
                  }`}
                  whileHover={{ y: -4 }}
                >
                  <h4 className="text-base font-medium tracking-wide">
                    {edu.degree}
                  </h4>
                  <p className="text-xs uppercase tracking-widest font-mono text-zinc-400">
                    {edu.institution}
                  </p>
                  <p className={`text-xs font-light tracking-wide pt-1 ${
                    isDarkMode ? "text-zinc-400" : "text-zinc-600"
                  }`}>
                    {edu.details}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Technical Mastery List */}
            <div className={`pt-6 border-t ${
              isDarkMode ? "border-zinc-800" : "border-zinc-300"
            }`}>
              <span className={`text-xs uppercase tracking-[0.2em] font-mono block mb-4 ${
                isDarkMode ? "text-amber-400" : "text-amber-700"
              }`}>
                Technical Capabilities
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {TECHNICAL_MASTERY.map((item, idx) => (
                  <div key={idx} className={`text-xs font-light tracking-wider flex items-center gap-2 ${
                    isDarkMode ? "text-zinc-300" : "text-zinc-700"
                  }`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Career;