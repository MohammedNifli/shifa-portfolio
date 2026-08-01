import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGem, FaCheckDouble, FaDraftingCompass, FaInfoCircle, FaShieldAlt } from 'react-icons/fa';
import { STONE_SETTINGS_DATA } from '../constants';

const StoneSettings = () => {
  const [selectedSetting, setSelectedSetting] = useState(0);

  return (
    <section id="stone-settings" className="py-20 relative overflow-hidden bg-[#09090c]">
      
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-2 inline-block px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10">
            Technical CAD Craftsmanship
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Gemstone Setting <span className="text-gold-gradient italic">CAD Tolerances</span>
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Every gemstone requires specific mechanical seat geometry, prong thickness, and setting channel clearance in 3D CAD to ensure secure setting and zero stone breakage during setting.
          </p>
        </motion.div>

        {/* Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {STONE_SETTINGS_DATA.map((item, index) => {
            const isSelected = selectedSetting === index;
            return (
              <motion.div
                key={index}
                onClick={() => setSelectedSetting(index)}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 relative overflow-hidden ${
                  isSelected 
                    ? "gold-glass-card border-gold-glow bg-amber-500/10 shadow-xl shadow-amber-500/10" 
                    : "bg-[#121218]/80 border border-stone-800 hover:border-amber-500/30 hover:bg-[#161620]"
                }`}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                {/* Active Indicator Top Bar */}
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-yellow-300" />
                )}

                <div className="w-12 h-12 rounded-xl bg-amber-500/15 flex items-center justify-center mb-4 border border-amber-500/30">
                  <FaGem className={`text-xl ${isSelected ? "text-amber-300" : "text-amber-400/80"}`} />
                </div>

                <h3 className="font-serif-luxury text-xl font-bold text-white mb-2">
                  {item.name}
                </h3>

                <p className="text-stone-400 text-xs line-clamp-2 leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="pt-3 border-t border-stone-800/80 flex items-center justify-between text-[11px]">
                  <span className="text-stone-400 uppercase tracking-wider">CAD Seat Depth</span>
                  <span className="text-amber-400 font-mono font-semibold">{item.cadTolerance}</span>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Selected Setting Detail Showcase Card */}
        <div className="max-w-4xl mx-auto gold-glass-card rounded-2xl p-6 sm:p-8 border-gold-glow">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-amber-500/20">
            
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/20 flex items-center justify-center border border-amber-400/50 shadow-inner">
                <FaDraftingCompass className="text-amber-300 text-2xl" />
              </div>
              <div>
                <span className="text-[10px] text-amber-400 font-semibold uppercase tracking-widest">Active CAD Standard</span>
                <h4 className="font-serif-luxury text-2xl font-bold text-white">
                  {STONE_SETTINGS_DATA[selectedSetting].name}
                </h4>
              </div>
            </div>

            <div className="px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/40 text-amber-300 text-xs font-semibold">
              <FaShieldAlt className="inline mr-1" /> Ideal For: {STONE_SETTINGS_DATA[selectedSetting].bestFor}
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            <div className="space-y-1">
              <span className="text-[11px] text-stone-400 uppercase tracking-wider flex items-center gap-1.5">
                <FaInfoCircle className="text-amber-400" /> CAD Engineering Rule
              </span>
              <p className="text-xs text-stone-200 leading-relaxed font-light">
                {STONE_SETTINGS_DATA[selectedSetting].description}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] text-stone-400 uppercase tracking-wider flex items-center gap-1.5">
                <FaCheckDouble className="text-amber-400" /> Rhino 8 Precision Seat
              </span>
              <p className="text-xs text-amber-300 font-mono font-semibold bg-black/40 p-2.5 rounded-lg border border-amber-500/20">
                {STONE_SETTINGS_DATA[selectedSetting].cadTolerance}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] text-stone-400 uppercase tracking-wider flex items-center gap-1.5">
                <FaGem className="text-amber-400" /> Titan Vendor Spec
              </span>
              <p className="text-xs text-stone-200 leading-relaxed">
                Calculated for gold shrinkage (1.5% - 2.0%) and accurate master casting mold yield.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default StoneSettings;
