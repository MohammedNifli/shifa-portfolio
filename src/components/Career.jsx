import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE_DATA, EDUCATION_DATA, TECHNICAL_MASTERY } from '../constants';

const Career = () => {
  return (
    <section id="experience" className="py-28 bg-black text-white relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20 space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-medium block">
            Background
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-white uppercase">
            Experience & Education
          </h2>
          <div className="w-12 h-[1px] bg-zinc-700 mx-auto mt-4" />
        </motion.div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Section 1: Experience */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-light tracking-widest text-white uppercase border-b border-zinc-900 pb-4">
              01 / Professional Experience
            </h3>

            {EXPERIENCE_DATA.map((exp, idx) => (
              <div key={idx} className="dark-card p-8 border border-zinc-900 bg-[#050505] space-y-4">
                <div className="flex flex-wrap justify-between items-baseline gap-2">
                  <h4 className="text-lg font-medium text-white tracking-wide">
                    {exp.role}
                  </h4>
                  <span className="text-xs text-zinc-500 font-mono">
                    {exp.period}
                  </span>
                </div>

                <p className="text-xs uppercase tracking-widest text-zinc-400 font-mono">
                  {exp.company}
                </p>

                <p className="text-sm text-zinc-300 font-light leading-relaxed tracking-wide pt-2">
                  {exp.description}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Section 2: Education & Technical Mastery */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-light tracking-widest text-white uppercase border-b border-zinc-900 pb-4">
              02 / Education & Technical Mastery
            </h3>

            {/* Education Items */}
            <div className="space-y-6">
              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="dark-card p-6 border border-zinc-900 bg-[#050505] space-y-2">
                  <h4 className="text-base font-medium text-white tracking-wide">
                    {edu.degree}
                  </h4>
                  <p className="text-xs uppercase tracking-widest text-zinc-400 font-mono">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-zinc-300 font-light tracking-wide pt-1">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>

            {/* Technical Mastery List */}
            <div className="pt-6 border-t border-zinc-900">
              <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-mono block mb-4">
                Technical Capabilities
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {TECHNICAL_MASTERY.map((item, idx) => (
                  <div key={idx} className="text-xs text-zinc-300 font-light tracking-wider flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 shrink-0" />
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