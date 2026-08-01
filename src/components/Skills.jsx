import React from 'react';
import { motion } from 'framer-motion';
import { FaGem, FaDraftingCompass, FaTools, FaCheckCircle } from 'react-icons/fa';
import { SKILL_CATEGORIES } from '../constants';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-[#09090c] relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-2 inline-block px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10">
            Technical Proficiency
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            CAD Skills & <span className="text-gold-gradient italic">Jewellery Expertise</span>
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
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
              className="gold-glass-card rounded-2xl p-6 sm:p-8 border-gold-glow flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/15 flex items-center justify-center mb-6 border border-amber-500/30">
                  {idx === 0 && <FaDraftingCompass className="text-amber-400 text-xl" />}
                  {idx === 1 && <FaTools className="text-amber-400 text-xl" />}
                  {idx === 2 && <FaGem className="text-amber-400 text-xl" />}
                </div>

                <h3 className="font-serif-luxury text-xl font-bold text-white mb-6">
                  {cat.title}
                </h3>

                <div className="space-y-5">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx}>
                      <div className="flex justify-between items-center text-xs mb-1.5">
                        <span className="text-stone-200 font-medium flex items-center gap-2">
                          <FaCheckCircle className="text-amber-400 text-[10px]" />
                          {skill.name}
                        </span>
                        <span className="text-amber-300 font-mono font-semibold">{skill.level}%</span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full h-1.5 bg-black/60 rounded-full overflow-hidden p-[1px] border border-amber-500/20">
                        <motion.div
                          className="h-full bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-300 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 + sIdx * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-amber-500/20 text-[11px] text-stone-400 italic">
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