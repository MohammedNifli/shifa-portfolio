import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGem, FaCheckDouble, FaDraftingCompass, FaInfoCircle, FaShieldAlt } from 'react-icons/fa';
import { STONE_SETTINGS_DATA } from '../constants';

const StoneSettings = ({ theme }) => {
  const [selectedSetting, setSelectedSetting] = useState(0);
  const isDark = theme === 'dark';

  return (
    <section id="stone-settings" className={`py-24 sm:py-32 transition-colors duration-300 relative border-t ${
      isDark 
        ? "bg-black text-white border-zinc-900" 
        : "bg-white text-zinc-900 border-zinc-200"
    }`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
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
            Technical CAD Craftsmanship
          </span>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide uppercase">
            Gemstone Setting <span className={isDark ? "text-amber-300 italic" : "text-amber-700 italic"}>CAD Tolerances</span>
          </h2>

          <p className={`text-sm sm:text-base font-light leading-relaxed mt-4 ${
            isDark ? "text-zinc-300" : "text-zinc-600"
          }`}>
            Every gemstone requires specific mechanical seat geometry, prong thickness, and setting channel clearance in 3D CAD to ensure secure setting and zero stone breakage during setting.
          </p>
        </motion.div>

        {/* Interactive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {STONE_SETTINGS_DATA.map((item, index) => {
            const isSelected = selectedSetting === index;
            return (
              <motion.div
                key={index}
                onClick={() => setSelectedSetting(index)}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 relative overflow-hidden border ${
                  isSelected 
                    ? isDark 
                      ? "bg-[#0f0f15] border-amber-400 text-white shadow-xl shadow-amber-500/10" 
                      : "bg-amber-50/50 border-amber-600 text-zinc-900 shadow-md shadow-amber-100"
                    : isDark 
                      ? "bg-[#0a0a0e] border-zinc-800/80 hover:border-amber-400/40 text-zinc-300" 
                      : "bg-zinc-50 border-zinc-200 hover:border-zinc-300 text-zinc-700"
                }`}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                {/* Active Indicator Top Bar */}
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-amber-500" />
                )}

                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 border ${
                  isDark ? "bg-amber-500/10 border-amber-500/30 text-amber-300" : "bg-amber-100 border-amber-200 text-amber-700"
                }`}>
                  <FaGem className="text-xl" />
                </div>

                <h3 className="font-serif-luxury text-xl font-bold mb-2">
                  {item.name}
                </h3>

                <p className={`text-xs line-clamp-2 leading-relaxed mb-4 ${
                  isDark ? "text-zinc-400" : "text-zinc-600"
                }`}>
                  {item.description}
                </p>

                <div className={`pt-3 border-t flex items-center justify-between text-[11px] ${
                  isDark ? "border-zinc-800" : "border-zinc-200"
                }`}>
                  <span className="uppercase tracking-wider font-mono text-zinc-500">CAD Seat Depth</span>
                  <span className="font-mono font-semibold text-amber-500">{item.cadTolerance}</span>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Selected Setting Detail Showcase Card */}
        <motion.div 
          key={selectedSetting}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className={`max-w-4xl mx-auto rounded-3xl p-6 sm:p-8 border shadow-xl ${
            isDark 
              ? "bg-[#0a0a0e] border-amber-500/30 text-white" 
              : "bg-white border-zinc-200 text-zinc-900 shadow-zinc-200"
          }`}
        >
          <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b ${
            isDark ? "border-zinc-800" : "border-zinc-200"
          }`}>
            
            <div className="flex items-center gap-4">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${
                isDark ? "bg-amber-500/20 border-amber-400/40 text-amber-300" : "bg-amber-100 border-amber-300 text-amber-800"
              }`}>
                <FaDraftingCompass className="text-2xl" />
              </div>
              <div>
                <span className="text-[10px] text-amber-500 font-semibold uppercase tracking-widest font-mono">Active CAD Standard</span>
                <h4 className="font-serif-luxury text-2xl font-bold">
                  {STONE_SETTINGS_DATA[selectedSetting].name}
                </h4>
              </div>
            </div>

            <div className={`px-4 py-2 rounded-full border text-xs font-semibold ${
              isDark ? "bg-amber-500/10 border-amber-500/40 text-amber-300" : "bg-amber-50 border-amber-300 text-amber-800"
            }`}>
              <FaShieldAlt className="inline mr-1 text-amber-500" /> Ideal For: {STONE_SETTINGS_DATA[selectedSetting].bestFor}
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            <div className="space-y-1">
              <span className="text-[11px] text-zinc-500 uppercase tracking-wider font-mono flex items-center gap-1.5">
                <FaInfoCircle className="text-amber-500" /> CAD Engineering Rule
              </span>
              <p className={`text-xs leading-relaxed font-light ${
                isDark ? "text-zinc-300" : "text-zinc-700"
              }`}>
                {STONE_SETTINGS_DATA[selectedSetting].description}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] text-zinc-500 uppercase tracking-wider font-mono flex items-center gap-1.5">
                <FaCheckDouble className="text-amber-500" /> Rhino 8 Precision Seat
              </span>
              <p className={`text-xs font-mono font-semibold p-2.5 rounded-lg border ${
                isDark ? "bg-black/50 border-amber-500/20 text-amber-300" : "bg-zinc-50 border-zinc-200 text-zinc-900"
              }`}>
                {STONE_SETTINGS_DATA[selectedSetting].cadTolerance}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] text-zinc-500 uppercase tracking-wider font-mono flex items-center gap-1.5">
                <FaGem className="text-amber-500" /> Titan Vendor Spec
              </span>
              <p className={`text-xs leading-relaxed ${
                isDark ? "text-zinc-300" : "text-zinc-700"
              }`}>
                Calculated for gold shrinkage (1.5% - 2.0%) and accurate master casting mold yield.
              </p>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default StoneSettings;
