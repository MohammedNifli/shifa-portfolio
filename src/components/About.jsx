import React from "react";
import { motion } from "framer-motion";
import { ABOUT_DATA, PERSONAL_INFO } from "../constants";

const About = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <section id="about" className={`py-24 sm:py-32 transition-colors duration-300 relative overflow-hidden ${
      isDark ? "bg-black text-white" : "bg-[#F9F9FB] text-zinc-900"
    }`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Frame (Ratio 4:5 with minimalist border) */}
          <motion.div 
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={`relative w-full max-w-md aspect-[4/5] p-2 transition-colors group ${
              isDark 
                ? "border border-zinc-800 bg-[#050505] shadow-2xl shadow-black/90" 
                : "border border-zinc-300 bg-white shadow-xl shadow-zinc-200"
            }`}>
              <div className="w-full h-full overflow-hidden relative">
                <img 
                  src={PERSONAL_INFO.profileImage} 
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                />
                <div className={`absolute inset-0 transition-opacity ${
                  isDark ? "bg-black/10" : "bg-transparent"
                }`} />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Heading & Body */}
          <motion.div 
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className={`text-xs uppercase tracking-[0.3em] font-mono block ${
              isDark ? "text-amber-400" : "text-amber-700"
            }`}>
              Profile Overview
            </span>

            <h2 className={`font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide uppercase ${
              isDark ? "text-white" : "text-zinc-900"
            }`}>
              {ABOUT_DATA.heading}
            </h2>

            <p className={`text-base sm:text-lg font-light leading-relaxed tracking-wide ${
              isDark ? "text-zinc-300" : "text-zinc-700"
            }`}>
              {ABOUT_DATA.body}
            </p>

            {/* Sub-Details Key-Value grid */}
            <div className={`pt-8 border-t grid grid-cols-1 sm:grid-cols-2 gap-6 ${
              isDark ? "border-zinc-900" : "border-zinc-200"
            }`}>
              {ABOUT_DATA.subDetails.map((detail, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="space-y-1"
                >
                  <span className={`text-[11px] uppercase tracking-widest font-mono block ${
                    isDark ? "text-zinc-500" : "text-zinc-500"
                  }`}>
                    {detail.label}
                  </span>
                  <span className={`text-sm font-semibold tracking-wide block ${
                    isDark ? "text-amber-200" : "text-zinc-800"
                  }`}>
                    {detail.value}
                  </span>
                </motion.div>
              ))}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;