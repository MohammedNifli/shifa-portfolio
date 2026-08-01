import React, { useState } from 'react';
import { motion } from 'framer-motion';
import peacockSketch from '/peacock_earrings.png';
import emeraldNecklace from '/royal_emerald_necklace.png';
import sapphireRing from '/sapphire_diamond_ring.png';

const CadViewer = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeItem, setActiveItem] = useState(0);

  const cadItems = [
    {
      title: "Heritage Peacock Earrings",
      sketchLabel: "Rhino 8 CAD Wireframe",
      renderLabel: "Photorealistic Gems Render",
      imageBefore: peacockSketch,
      imageAfter: peacockSketch,
      rhinoSpecs: "Rhino 8 - Wall Thickness: 0.85mm | Shrinkage: 1.8% | Gem Count: 42 Stones",
      features: ["Precision prong angle tapering", "Flexible articulation links", "Hollow-back weight control"]
    },
    {
      title: "Royal Emerald Haute Necklace",
      sketchLabel: "Rhino 8 Assembly Draft",
      renderLabel: "Keyshot 3D Visualization",
      imageBefore: emeraldNecklace,
      imageAfter: emeraldNecklace,
      rhinoSpecs: "Rhino 8 - Metal: 18K Yellow Gold | Back Gallery Articulation | 12.4ct Emeralds",
      features: ["Custom gem seats", "Ergonomic neck curvature", "Investment casting ready"]
    },
    {
      title: "Oval Sapphire Solitaire Ring",
      sketchLabel: "3D CAD Stone Setting Matrix",
      renderLabel: "Platinum 950 Finished Model",
      imageBefore: sapphireRing,
      imageAfter: sapphireRing,
      rhinoSpecs: "Rhino 8 - Ring Size: 14 | Finger Profile: Comfort Fit | Micro-pave halo: 0.15mm gap",
      features: ["4-Prong center claw hold", "Double micro-pave halo", "Tapered comfort band"]
    }
  ];

  const current = cadItems[activeItem];

  return (
    <section id="cad-studio" className="py-28 bg-[#050505] text-white relative border-b border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-14 space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-mono block">
            02 / INTERACTIVE CAD STUDIO
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-white uppercase">
            3D Wireframe vs Finished Render
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-light tracking-wider max-w-xl mx-auto">
            Drag the interactive slider below to inspect how Rhino 8 CAD wireframes are converted into production-ready luxury jewelry models.
          </p>
          <div className="w-12 h-[1px] bg-zinc-800 mx-auto mt-4" />
        </motion.div>

        {/* Item Selector Tabs */}
        <div className="flex justify-center flex-wrap gap-3 mb-10">
          {cadItems.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveItem(index)}
              className={`px-5 py-2.5 text-xs font-mono tracking-widest uppercase transition-all duration-300 ${
                activeItem === index
                  ? "bg-white text-black font-semibold border border-white"
                  : "bg-black text-zinc-400 hover:text-white border border-zinc-800"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* CAD Comparison Card */}
        <div className="max-w-5xl mx-auto dark-card p-6 sm:p-10 border border-zinc-800 bg-black">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Slider Column */}
            <div className="lg:col-span-7">
              <div className="relative w-full aspect-[4/3] overflow-hidden border border-zinc-800 select-none bg-black">
                
                {/* Background Image (Rendered Finished Piece) */}
                <img 
                  src={current.imageAfter} 
                  alt={current.title} 
                  className="absolute inset-0 w-full h-full object-cover filter brightness-105"
                />

                {/* Foreground Image Clipped (Sketch / Wireframe Mode) */}
                <div 
                  className="absolute inset-y-0 left-0 overflow-hidden border-r border-white shadow-2xl"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img 
                    src={current.imageBefore} 
                    alt={current.title}
                    className="absolute inset-0 w-full h-full object-cover filter contrast-125 sepia-[0.3] hue-rotate-15 min-w-none"
                    style={{ width: "100%", maxWidth: "none" }}
                  />
                  
                  {/* Badge */}
                  <span className="absolute top-4 left-4 bg-black/90 text-white text-[10px] font-mono uppercase tracking-widest px-3 py-1 border border-zinc-700">
                    {current.sketchLabel}
                  </span>
                </div>

                {/* Render Label Badge */}
                <span className="absolute top-4 right-4 bg-black/90 text-white text-[10px] font-mono uppercase tracking-widest px-3 py-1 border border-zinc-700">
                  {current.renderLabel}
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
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white text-black font-bold flex items-center justify-center shadow-2xl pointer-events-none z-20 text-xs"
                  style={{ left: `${sliderPosition}%` }}
                >
                  ↔
                </div>

              </div>

              <p className="text-center text-[11px] text-zinc-500 font-mono mt-3 uppercase tracking-widest">
                Drag slider left or right to compare CAD Wireframe vs Render
              </p>
            </div>

            {/* Technical Specs Column */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 font-mono block mb-1">
                  Rhino 8 Specification
                </span>
                <h3 className="font-serif-luxury text-2xl font-light tracking-wide text-white uppercase mb-4">
                  {current.title}
                </h3>
                
                {/* Specs Box */}
                <div className="p-4 bg-[#050505] border border-zinc-800 mb-6">
                  <p className="text-xs text-zinc-300 font-mono leading-relaxed">
                    {current.rhinoSpecs}
                  </p>
                </div>

                <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-mono mb-3">
                  Key CAD Engineering Features:
                </h4>

                <ul className="space-y-2.5">
                  {current.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs text-zinc-300 font-light tracking-wide">
                      <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-500 uppercase tracking-widest">Engine</span>
                <span className="text-white">Rhino 8 + Keyshot</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default CadViewer;
