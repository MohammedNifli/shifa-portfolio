import React from "react";
import { motion } from "framer-motion";
import { ABOUT_DATA, PERSONAL_INFO } from "../constants";

const About = ({ isDarkMode }) => {
  return (
    <section id="about" className={`py-28 relative transition-colors duration-500 ${
      isDarkMode ? "bg-[#050508] text-white" : "bg-[#fbf9f5] text-zinc-900"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Frame (Ratio 4:5 with minimalist border) */}
          <motion.div 
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className={`relative w-full max-w-md aspect-[4/5] p-2 border transition-colors group ${
              isDarkMode ? "border-zinc-800 bg-[#0c0c12]" : "border-zinc-300 bg-white shadow-xl"
            }`}>
              <div className="w-full h-full overflow-hidden relative">
                <img 
                  src={PERSONAL_INFO.profileImage} 
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                />
                <div className={`absolute inset-0 transition-opacity ${
                  isDarkMode ? "bg-black/10 group-hover:opacity-0" : "bg-white/5 group-hover:opacity-0"
                }`} />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Heading & Body */}
          <motion.div 
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className={`text-xs uppercase tracking-[0.3em] font-mono font-medium block ${
              isDarkMode ? "text-amber-400" : "text-amber-700"
            }`}>
              Designer Profile
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide uppercase font-serif-luxury">
              {ABOUT_DATA.heading}
            </h2>

            <p className={`text-base sm:text-lg font-light leading-relaxed tracking-wide ${
              isDarkMode ? "text-zinc-300" : "text-zinc-700"
            }`}>
              {ABOUT_DATA.body}
            </p>

            {/* Sub-Details Key-Value grid */}
            <div className={`pt-8 border-t grid grid-cols-1 sm:grid-cols-2 gap-6 ${
              isDarkMode ? "border-zinc-800" : "border-zinc-200"
            }`}>
              {ABOUT_DATA.subDetails.map((detail, idx) => (
                <motion.div 
                  key={idx} 
                  className="space-y-1"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <span className={`text-[11px] uppercase tracking-widest font-mono block ${
                    isDarkMode ? "text-zinc-500" : "text-zinc-400"
                  }`}>
                    {detail.label}
                  </span>
                  <span className={`text-sm font-normal tracking-wide block ${
                    isDarkMode ? "text-zinc-200" : "text-zinc-800"
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