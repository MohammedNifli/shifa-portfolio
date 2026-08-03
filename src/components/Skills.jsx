import React from 'react';
import { motion } from 'framer-motion';
import { FaGem, FaDraftingCompass, FaTools, FaCheckCircle } from 'react-icons/fa';
import { SKILL_CATEGORIES } from '../constants';

const Skills = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <section id="skills" className={`py-24 sm:py-32 transition-colors duration-300 relative border-t ${
      isDark 
        ? "bg-[#050505] text-white border-zinc-900" 
        : "bg-white text-zinc-900 border-zinc-200"
    }`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={`text-xs font-mono uppercase tracking-[0.3em] block mb-2 ${
            isDark ? "text-amber-400" : "text-amber-700 font-semibold"
          }`}>
            Technical Proficiency
          </span>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide uppercase">
            CAD Skills & <span className={isDark ? "text-amber-300 italic" : "text-amber-700 italic"}>Jewellery Expertise</span>
          </h2>

          <p className={`text-sm sm:text-base font-light leading-relaxed mt-4 ${
            isDark ? "text-zinc-300" : "text-zinc-600"
          }`}>
            Combining digital 3D CAD precision in Rhino 8 with hands-on technical understanding of gold casting, gemstone setting tolerances, and production feasibility.
          </p>
        </motion.div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`rounded-2xl p-6 sm:p-8 border flex flex-col justify-between shadow-xl ${
                isDark 
                  ? "bg-[#0a0a0e] border-zinc-800 text-white" 
                  : "bg-zinc-50 border-zinc-200 text-zinc-900 shadow-zinc-100"
              }`}
            >
              <div>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 border ${
                  isDark ? "bg-amber-500/10 border-amber-500/30 text-amber-300" : "bg-amber-100 border-amber-200 text-amber-700"
                }`}>
                  {idx === 0 && <FaDraftingCompass className="text-xl" />}
                  {idx === 1 && <FaTools className="text-xl" />}
                  {idx === 2 && <FaGem className="text-xl" />}
                </div>

                <h3 className="font-serif-luxury text-xl font-bold mb-6">
                  {cat.title}
                </h3>

                <div className="space-y-5">
                  {cat.skills.map((skill, sIdx) => (
                    <motion.div 
                      key={sIdx}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: sIdx * 0.06 }}
                    >
                      <div className="flex justify-between items-center text-xs mb-1.5 font-medium">
                        <span className="flex items-center gap-2">
                          <FaCheckCircle className="text-amber-500 text-[10px]" />
                          {skill.name}
                        </span>
                        <span className="font-mono font-semibold text-amber-500">{skill.level}%</span>
                      </div>

                      {/* Progress Bar */}
                      <div className={`w-full h-1.5 rounded-full overflow-hidden p-[1px] border ${
                        isDark ? "bg-black border-zinc-800" : "bg-zinc-200 border-zinc-300"
                      }`}>
                        <motion.div
                          className="h-full bg-amber-500 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 + sIdx * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className={`mt-8 pt-4 border-t text-[11px] italic ${
                isDark ? "border-zinc-800 text-zinc-500" : "border-zinc-200 text-zinc-500"
              }`}>
                Verified for high-volume commercial production & custom orders
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;