import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE_DATA, EDUCATION_DATA, TECHNICAL_MASTERY } from '../constants';
import { FaBuilding, FaGraduationCap, FaCheckCircle, FaAward, FaTools, FaCalendarAlt } from 'react-icons/fa';

const Career = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <section id="experience" className={`py-24 sm:py-32 transition-colors duration-300 relative overflow-hidden border-t ${
      isDark 
        ? "bg-[#060609] text-white border-zinc-900" 
        : "bg-[#F8F9FA] text-zinc-900 border-zinc-200"
    }`}>
      
      {/* Background Ambient Gold Lighting Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[140px] opacity-25 ${
          isDark ? "bg-gradient-to-br from-amber-500/30 to-yellow-600/10" : "bg-gradient-to-br from-amber-300/40 to-yellow-400/20"
        }`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/30 bg-amber-500/10 text-amber-300 text-[11px] font-mono uppercase tracking-[0.25em] shadow-sm">
            <FaAward className="text-amber-400" />
            <span>Career Track & Expertise</span>
          </div>

          <h2 className={`font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide uppercase ${
            isDark ? "text-white" : "text-zinc-900"
          }`}>
            Experience & <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 italic font-normal">Education</span>
          </h2>

          <p className={`text-sm sm:text-base font-light max-w-xl mx-auto ${
            isDark ? "text-zinc-400" : "text-zinc-600"
          }`}>
            Proven industry record designing production-ready 3D CAD jewelry models for Titan Company Limited combined with specialized gems & jewelry design qualifications.
          </p>

          <div className={`w-20 h-[1px] mx-auto mt-4 ${
            isDark ? "bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" : "bg-gradient-to-r from-transparent via-amber-600/60 to-transparent"
          }`} />
        </motion.div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Section 1: Professional Experience */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={`flex items-center gap-3.5 pb-4 border-b ${
              isDark ? "border-zinc-800" : "border-zinc-300"
            }`}>
              <div className={`p-2.5 rounded-xl border ${
                isDark ? "bg-amber-500/10 border-amber-400/30 text-amber-300" : "bg-amber-100 border-amber-200 text-amber-800"
              }`}>
                <FaBuilding className="text-lg" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-500 block font-semibold">01 / Industry Track</span>
                <h3 className="font-serif-luxury text-xl font-bold tracking-wider uppercase">
                  Professional Experience
                </h3>
              </div>
            </div>

            {/* Timeline Track Container */}
            <div className="border-l-2 border-amber-400/30 pl-6 sm:pl-8 space-y-8 relative ml-3 sm:ml-4">
              {EXPERIENCE_DATA.map((exp, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`p-7 sm:p-8 rounded-2xl border space-y-4 shadow-2xl relative transition-all duration-500 group ${
                    isDark 
                      ? "bg-[#0b0b10]/90 border-zinc-800/80 hover:border-amber-400/50 hover:shadow-amber-500/10" 
                      : "bg-white border-zinc-200 hover:border-amber-500/40 shadow-zinc-200/80 hover:shadow-xl"
                  }`}
                >
                  {/* Glowing Node Dot on Timeline */}
                  <span className="w-3.5 h-3.5 rounded-full bg-amber-400 border-2 border-black absolute -left-[31px] sm:-left-[39px] top-8 shadow-[0_0_12px_rgba(251,191,36,0.8)] group-hover:scale-125 transition-transform duration-300" />

                  {/* Top Bar Details */}
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <div>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] font-mono font-semibold uppercase tracking-wider bg-amber-500/10 text-amber-300 border border-amber-500/20 mb-2">
                        Authorized Vendor
                      </span>
                      <h4 className="text-lg sm:text-xl font-bold tracking-wide">
                        {exp.role}
                      </h4>
                    </div>

                    <span className={`text-xs font-mono px-3 py-1.5 rounded-lg border flex items-center gap-1.5 ${
                      isDark ? "bg-black/60 border-zinc-800 text-amber-300 font-medium" : "bg-zinc-100 border-zinc-200 text-amber-800 font-semibold"
                    }`}>
                      <FaCalendarAlt className="text-amber-400 text-xs" />
                      {exp.period}
                    </span>
                  </div>

                  {/* Company Name */}
                  <p className={`text-xs uppercase tracking-widest font-mono font-semibold ${
                    isDark ? "text-zinc-400" : "text-zinc-600"
                  }`}>
                    {exp.company}
                  </p>

                  {/* Description */}
                  <p className={`text-sm font-light leading-relaxed tracking-wide pt-1 ${
                    isDark ? "text-zinc-300" : "text-zinc-700"
                  }`}>
                    {exp.description}
                  </p>

                  {/* Highlight Specs Tag */}
                  <div className={`pt-4 border-t text-[11px] font-mono flex flex-wrap gap-2 ${
                    isDark ? "border-zinc-800/80 text-zinc-400" : "border-zinc-100 text-zinc-500"
                  }`}>
                    <span className="px-2.5 py-1 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                      Rhino 8 3D
                    </span>
                    <span className="px-2.5 py-1 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                      Titan Line CAD
                    </span>
                    <span className="px-2.5 py-1 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                      Haute Joaillerie
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Section 2: Education & Technical Mastery */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={`flex items-center gap-3.5 pb-4 border-b ${
              isDark ? "border-zinc-800" : "border-zinc-300"
            }`}>
              <div className={`p-2.5 rounded-xl border ${
                isDark ? "bg-amber-500/10 border-amber-400/30 text-amber-300" : "bg-amber-100 border-amber-200 text-amber-800"
              }`}>
                <FaGraduationCap className="text-lg" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-500 block font-semibold">02 / Academic Qualifications</span>
                <h3 className="font-serif-luxury text-xl font-bold tracking-wider uppercase">
                  Education & Qualifications
                </h3>
              </div>
            </div>

            {/* Education Items Timeline */}
            <div className="border-l-2 border-amber-400/30 pl-6 sm:pl-8 space-y-6 relative ml-3 sm:ml-4">
              {EDUCATION_DATA.map((edu, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`p-6 sm:p-7 rounded-2xl border space-y-3 relative transition-all duration-500 group ${
                    isDark 
                      ? "bg-[#0b0b10]/90 border-zinc-800/80 hover:border-amber-400/50 hover:shadow-amber-500/10" 
                      : "bg-white border-zinc-200 hover:border-amber-500/40 shadow-zinc-200/80 hover:shadow-lg"
                  }`}
                >
                  {/* Timeline Dot */}
                  <span className="w-3.5 h-3.5 rounded-full bg-amber-400 border-2 border-black absolute -left-[31px] sm:-left-[39px] top-7 shadow-[0_0_12px_rgba(251,191,36,0.8)] group-hover:scale-125 transition-transform duration-300" />

                  <h4 className="text-base sm:text-lg font-bold tracking-wide leading-snug">
                    {edu.degree}
                  </h4>
                  
                  <p className={`text-xs uppercase tracking-widest font-mono font-semibold ${
                    isDark ? "text-amber-300" : "text-amber-700"
                  }`}>
                    {edu.institution}
                  </p>
                  
                  <p className={`text-xs font-light tracking-wide pt-1 leading-relaxed ${
                    isDark ? "text-zinc-300" : "text-zinc-600"
                  }`}>
                    {edu.details}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Technical Mastery Box */}
            <div className={`pt-6 border-t ${
              isDark ? "border-zinc-800" : "border-zinc-300"
            }`}>
              <div className="flex items-center gap-2 mb-4">
                <FaTools className="text-amber-400 text-sm" />
                <span className={`text-xs uppercase tracking-[0.2em] font-mono font-semibold block ${
                  isDark ? "text-zinc-300" : "text-zinc-700"
                }`}>
                  Core Technical Capabilities
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {TECHNICAL_MASTERY.map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    whileHover={{ scale: 1.02, x: 2 }}
                    className={`p-3 rounded-xl border text-xs font-medium tracking-wider flex items-start gap-2.5 transition-all ${
                      isDark 
                        ? "bg-[#0c0c12] border-zinc-800/80 hover:border-amber-400/40 text-zinc-200" 
                        : "bg-white border-zinc-200 hover:border-amber-400/50 text-zinc-800 shadow-sm"
                    }`}
                  >
                    <FaCheckCircle className="text-amber-400 text-xs mt-0.5 shrink-0" />
                    <span className="leading-snug">{item}</span>
                  </motion.div>
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