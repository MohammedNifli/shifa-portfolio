import React from "react";
import { motion } from "framer-motion";
import { ABOUT_DATA, PERSONAL_INFO } from "../constants";

const About = () => {
  return (
    <section id="about" className="py-28 bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
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
            <div className="relative w-full max-w-md aspect-[4/5] rounded-none border border-zinc-800 p-2 bg-[#050505] group">
              <div className="w-full h-full overflow-hidden relative">
                <img 
                  src={PERSONAL_INFO.profileImage} 
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover filter grayscale contrast-110 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/10" />
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
            <span className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-medium block">
              Profile
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-white uppercase">
              {ABOUT_DATA.heading}
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed tracking-wide">
              {ABOUT_DATA.body}
            </p>

            {/* Sub-Details Key-Value grid */}
            <div className="pt-8 border-t border-zinc-900 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {ABOUT_DATA.subDetails.map((detail, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="text-[11px] uppercase tracking-widest text-zinc-500 block">
                    {detail.label}
                  </span>
                  <span className="text-sm text-zinc-200 font-normal tracking-wide block">
                    {detail.value}
                  </span>
                </div>
              ))}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;