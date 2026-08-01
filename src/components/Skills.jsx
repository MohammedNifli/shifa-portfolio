import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../constants';

const Skills = ({ isDarkMode }) => {
  return (
    <section id="skills" className={`py-28 relative border-t transition-colors duration-500 ${
      isDarkMode ? "bg-[#09090e] border-zinc-900 text-white" : "bg-[#f4f1ea] border-zinc-200 text-zinc-900"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
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
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide uppercase font-serif-luxury">
            Technical CAD Skills
          </h2>
          <div className={`w-16 h-[1px] mx-auto mt-4 ${
            isDarkMode ? "bg-amber-500/40" : "bg-amber-700/40"
          }`} />
        </motion.div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`p-8 border flex flex-col justify-between transition-all ${
                isDarkMode 
                  ? "border-zinc-800 bg-[#0c0c12] hover:border-amber-500/40 shadow-xl" 
                  : "border-zinc-300 bg-white hover:border-amber-600 shadow-md"
              }`}
            >
              <div>
                <h3 className="font-serif-luxury text-2xl font-normal uppercase tracking-wider mb-6 pb-2 border-b border-zinc-700/40">
                  {cat.title}
                </h3>

                <div className="space-y-6">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx}>
                      <div className="flex justify-between items-center text-xs mb-2">
                        <span className="font-medium tracking-wide">
                          {skill.name}
                        </span>
                        <span className={`font-mono ${
                          isDarkMode ? "text-amber-400" : "text-amber-700"
                        }`}>{skill.level}%</span>
                      </div>

                      {/* Animated Progress Bar */}
                      <div className={`w-full h-1 overflow-hidden ${
                        isDarkMode ? "bg-zinc-800" : "bg-zinc-200"
                      }`}>
                        <motion.div
                          className={`h-full ${
                            isDarkMode ? "bg-gradient-to-r from-amber-600 to-yellow-400" : "bg-amber-700"
                          }`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.3 + sIdx * 0.1, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`mt-8 pt-4 border-t text-[11px] font-mono italic ${
                isDarkMode ? "border-zinc-800 text-zinc-500" : "border-zinc-200 text-zinc-400"
              }`}>
                Precision casting & CAM feasibility ready
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;