import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { STONE_SETTINGS } from '../constants';

const StoneSettings = () => {
  const [selectedSetting, setSelectedSetting] = useState(0);

  return (
    <section id="stone-settings" className="py-28 bg-black text-white relative border-b border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-mono block">
            04 / CAD MECHANICS
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-white uppercase">
            Gemstone Setting Tolerances
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-light tracking-wider max-w-xl mx-auto">
            Precision CAD seat geometry, prong angle tapering, and setting channel clearance engineered in Rhino 8 for flawless gemstone setting.
          </p>
          <div className="w-12 h-[1px] bg-zinc-800 mx-auto mt-4" />
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {STONE_SETTINGS.map((item, index) => {
            const isSelected = selectedSetting === index;
            return (
              <motion.div
                key={index}
                onClick={() => setSelectedSetting(index)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`cursor-pointer p-6 transition-all duration-300 border ${
                  isSelected 
                    ? "border-white bg-[#0a0a0a] shadow-2xl" 
                    : "border-zinc-900 bg-[#050505] hover:border-zinc-700"
                }`}
                whileHover={{ y: -4 }}
              >
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block mb-2">
                  0{index + 1} / CAD Standard
                </span>

                <h3 className="font-serif-luxury text-xl font-light tracking-wide text-white uppercase mb-3">
                  {item.name}
                </h3>

                <p className="text-xs text-zinc-400 font-light leading-relaxed mb-4 line-clamp-2">
                  {item.description}
                </p>

                <div className="pt-3 border-t border-zinc-900 flex justify-between items-center text-[10px] font-mono">
                  <span className="text-zinc-500 uppercase tracking-widest">Seat Depth</span>
                  <span className="text-white font-semibold">{item.cadTolerance}</span>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Selected Setting Detail Showcase Card */}
        <motion.div 
          className="max-w-4xl mx-auto dark-card p-8 border border-zinc-800 bg-black space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-zinc-900">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 font-mono block">
                Active Specification
              </span>
              <h4 className="font-serif-luxury text-2xl font-light tracking-wide text-white uppercase mt-1">
                {STONE_SETTINGS[selectedSetting].name}
              </h4>
            </div>

            <div className="px-4 py-2 border border-zinc-800 bg-[#050505] text-xs font-mono text-zinc-300">
              Ideal For: {STONE_SETTINGS[selectedSetting].bestFor}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-light">
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono block">
                CAD Mechanics
              </span>
              <p className="text-zinc-300 leading-relaxed">
                {STONE_SETTINGS[selectedSetting].description}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono block">
                Rhino 8 Tolerance
              </span>
              <p className="text-white font-mono bg-[#050505] p-3 border border-zinc-800 font-semibold">
                {STONE_SETTINGS[selectedSetting].cadTolerance}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono block">
                Titan Casting Yield
              </span>
              <p className="text-zinc-300 leading-relaxed">
                Calculated for gold/platinum shrinkage (1.5% - 2.0%) to prevent stone fallout during setting.
              </p>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default StoneSettings;
