import React from "react";
import { motion } from "framer-motion";
import { ABOUT_DATA, PERSONAL_INFO } from "../constants";

const About = () => {
  return (
    <section id="about" className="py-32 bg-black text-white relative border-b border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Frame (Ratio 4:5 with minimalist border) */}
          <motion.div 
            className="lg:col-span-5 flex flex-col items-center"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-md aspect-[4/5] rounded-none border border-zinc-800 p-2 bg-[#050505] group shadow-2xl">
              <div className="w-full h-full overflow-hidden relative">
                <img 
                  src={PERSONAL_INFO.profileImage} 
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover filter grayscale contrast-110 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:opacity-0 transition-opacity duration-300" />
              </div>
            </div>

            <div className="w-full max-w-md mt-4 p-4 border border-zinc-900 bg-[#050505] text-center">
              <span className="text-xs uppercase tracking-[0.25em] text-zinc-400 font-mono">
                {PERSONAL_INFO.name}
              </span>
              <p className="text-[11px] text-zinc-500 font-mono mt-0.5">
                CAD Specialist for Titan (Sulu Vendor)
              </p>
            </div>
          </motion.div>

          {/* Right Column: Heading, Body, & Metric Badges */}
          <motion.div 
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-mono block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              01 / PROFILE & EXPERTISE
            </motion.span>

            <motion.h2 
              className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-white uppercase leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {ABOUT_DATA.heading}
            </motion.h2>

            <motion.p 
              className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {ABOUT_DATA.body}
            </motion.p>

            <motion.p 
              className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed tracking-wide pt-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              {ABOUT_DATA.extendedBio}
            </motion.p>

            {/* Key Metrics Stats Bar */}
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-zinc-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              {ABOUT_DATA.stats.map((stat, idx) => (
                <div key={idx} className="p-3 border border-zinc-900 bg-[#050505] text-center">
                  <span className="font-serif-luxury text-2xl font-bold text-white block">
                    {stat.number}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono block mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Sub-Details Key-Value grid */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-zinc-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              {ABOUT_DATA.subDetails.map((detail, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono block">
                    {detail.label}
                  </span>
                  <span className="text-xs sm:text-sm text-zinc-200 font-normal tracking-wide block">
                    {detail.value}
                  </span>
                </div>
              ))}
            </motion.div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;