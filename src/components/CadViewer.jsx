import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSlidersH, FaCube, FaPaintBrush, FaCheckCircle, FaRulerCombined, FaLayerGroup } from 'react-icons/fa';
import peacockSketch from '/peacock_earrings.png';
import emeraldNecklace from '/royal_emerald_necklace.png';
import sapphireRing from '/sapphire_diamond_ring.png';

const CadViewer = ({ theme }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeItem, setActiveItem] = useState(0);
  const isDark = theme === 'dark';

  const cadItems = [
    {
      title: "Heritage Peacock Earrings",
      sketchLabel: "Rhino 8 Wireframe / Hand Draft",
      renderLabel: "Photorealistic Gems Render",
      imageBefore: peacockSketch,
      imageAfter: peacockSketch,
      rhinoSpecs: "Rhino 8 - Wall Thickness: 0.85mm | Shrinkage: 1.8% | Gem Count: 42 Stones",
      features: ["Precision prong angle", "Flexible articulation", "Hollow-back weight control"]
    },
    {
      title: "Royal Emerald Haute Necklace",
      sketchLabel: "Rhino 8 Assembly Draft",
      renderLabel: "Keyshot Photorealistic Render",
      imageBefore: emeraldNecklace,
      imageAfter: emeraldNecklace,
      rhinoSpecs: "Rhino 8 - Metal: 18K Yellow Gold | Back Gallery Articulation | 12.4ct Emeralds",
      features: ["Custom stone seats", "Ergonomic neck curvature", "Investment casting ready"]
    },
    {
      title: "Oval Sapphire Solitaire Ring",
      sketchLabel: "3D CAD Stone Setting Matrix",
      renderLabel: "Platinum 950 Finished Model",
      imageBefore: sapphireRing,
      imageAfter: sapphireRing,
      rhinoSpecs: "Rhino 8 - Ring Size: 14 | Finger Profile: Comfort Fit | Micro-pave halo: 0.15mm gap",
      features: ["4-Prong center hold", "Double micro-pave halo", "Tapered comfort band"]
    }
  ];

  const current = cadItems[activeItem];

  return (
    <section id="cad-viewer" className={`py-24 sm:py-32 transition-colors duration-300 relative overflow-hidden ${
      isDark ? "bg-[#08080c] text-white" : "bg-[#F4F4F6] text-zinc-900"
    }`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={`text-xs font-mono uppercase tracking-[0.3em] block mb-2 ${
            isDark ? "text-amber-400" : "text-amber-700 font-semibold"
          }`}>
            Interactive CAD Studio
          </span>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide uppercase">
            From Hand Sketch to <span className={isDark ? "text-amber-300 italic" : "text-amber-700 italic"}>3D CAD Precision</span>
          </h2>

          <p className={`text-sm sm:text-base font-light leading-relaxed mt-4 ${
            isDark ? "text-zinc-300" : "text-zinc-600"
          }`}>
            Drag the interactive slider below to inspect how hand concepts & raw Rhino 8 3D CAD models are meticulously transformed into production-ready luxury jewellery.
          </p>
        </motion.div>

        {/* Item Selector Tabs */}
        <div className="flex justify-center flex-wrap gap-3 mb-10">
          {cadItems.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveItem(index)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                activeItem === index
                  ? "bg-amber-500 text-black shadow-lg shadow-amber-500/20"
                  : isDark 
                    ? "bg-[#111116] text-zinc-300 hover:text-white border border-zinc-800" 
                    : "bg-white text-zinc-700 hover:text-black border border-zinc-300 shadow-sm"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* CAD Comparison Card */}
        <div className={`max-w-5xl mx-auto rounded-3xl p-6 sm:p-10 border transition-all shadow-2xl ${
          isDark 
            ? "bg-[#0a0a0f] border-amber-500/30 text-white" 
            : "bg-white border-zinc-200 text-zinc-900 shadow-zinc-200"
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Slider Column */}
            <div className="lg:col-span-7">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-amber-500/30 group select-none">
                
                {/* Background Image (Rendered Finished Piece) */}
                <img 
                  src={current.imageAfter} 
                  alt={current.title} 
                  className="absolute inset-0 w-full h-full object-cover filter brightness-105"
                />

                {/* Foreground Image Clipped */}
                <div 
                  className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-amber-400 shadow-2xl"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img 
                    src={current.imageBefore} 
                    alt={current.title}
                    className="absolute inset-0 w-full h-full object-cover filter contrast-125 sepia-[0.3] hue-rotate-15 min-w-none"
                    style={{ width: "100%", maxWidth: "none" }}
                  />
                  
                  {/* Badge */}
                  <span className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-semibold text-amber-300 border border-amber-500/40">
                    <FaPaintBrush className="inline mr-1 text-amber-400" /> {current.sketchLabel}
                  </span>
                </div>

                {/* Render Label Badge */}
                <span className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-semibold text-amber-300 border border-amber-500/40">
                  <FaCube className="inline mr-1 text-amber-400" /> {current.renderLabel}
                </span>

                {/* Range Input Overlay */}
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={sliderPosition}
                  onChange={(e) => setSliderPosition(e.target.value)}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                />

                {/* Slider Handle */}
                <div 
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-amber-400 text-black flex items-center justify-center shadow-lg shadow-black/80 pointer-events-none z-20"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <FaSlidersH className="text-xs" />
                </div>

              </div>

              {/* Slider instruction */}
              <p className={`text-center text-xs mt-3 flex items-center justify-center gap-2 ${
                isDark ? "text-zinc-400" : "text-zinc-500"
              }`}>
                <FaSlidersH className="text-amber-500" /> Drag slider left or right to compare CAD vs Final Render
              </p>
            </div>

            {/* Technical Specs Column */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <span className={`text-xs font-semibold uppercase tracking-wider font-mono ${
                  isDark ? "text-amber-400" : "text-amber-700"
                }`}>
                  Technical CAD Breakdown
                </span>

                <h3 className="font-serif-luxury text-2xl font-bold mt-1 mb-3">
                  {current.title}
                </h3>
                
                {/* Specs Box */}
                <div className={`p-4 rounded-xl border mb-4 ${
                  isDark ? "bg-black/50 border-amber-500/20 text-amber-300" : "bg-amber-50/50 border-amber-200 text-amber-900"
                }`}>
                  <p className="text-xs font-mono flex items-start gap-2">
                    <FaRulerCombined className="text-amber-500 text-sm mt-0.5 shrink-0" />
                    <span>{current.rhinoSpecs}</span>
                  </p>
                </div>

                <h4 className={`text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2 ${
                  isDark ? "text-zinc-200" : "text-zinc-800"
                }`}>
                  <FaLayerGroup className="text-amber-500" /> Key Rhino 8 Engineering Features:
                </h4>

                <ul className="space-y-2.5">
                  {current.features.map((feat, idx) => (
                    <li key={idx} className={`flex items-center gap-2.5 text-xs ${
                      isDark ? "text-zinc-300" : "text-zinc-700"
                    }`}>
                      <FaCheckCircle className="text-amber-500 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`pt-4 border-t flex items-center justify-between ${
                isDark ? "border-zinc-800" : "border-zinc-200"
              }`}>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-mono text-zinc-500">Software Used</span>
                  <span className="text-xs font-semibold">Rhino 8 + Keyshot</span>
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-[10px] uppercase font-mono text-zinc-500">Manufacturing</span>
                  <span className="text-xs font-semibold text-amber-500">100% CAM Feasible</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default CadViewer;
