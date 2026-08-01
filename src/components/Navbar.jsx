import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon, FaFileAlt, FaBars, FaTimes, FaGem } from 'react-icons/fa';
import { PERSONAL_INFO } from "../constants";

const Navbar = ({ isDarkMode, toggleTheme, onOpenResume }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "About", href: "about" },
    { name: "CAD Studio", href: "cad-viewer" },
    { name: "Stone Settings", href: "stone-settings" },
    { name: "Projects", href: "projects" },
    { name: "Experience", href: "experience" },
    { name: "Skills", href: "skills" },
    { name: "Contact", href: "contact" }
  ];

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    if (isMenuOpen) setIsMenuOpen(false);
    
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? isDarkMode
          ? "bg-[#050508]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl" 
          : "bg-[#fbf9f5]/90 backdrop-blur-md border-b border-black/10 py-3 shadow-md"
        : "bg-transparent py-5"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center">
        
        {/* Logo / Brand Name */}
        <a 
          href="#hero" 
          onClick={(e) => scrollToSection(e, "hero")}
          className="flex items-center gap-3 group"
        >
          <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-transform group-hover:scale-105 ${
            isDarkMode ? "bg-amber-500/10 text-amber-400 border border-amber-500/30" : "bg-amber-100 text-amber-700 border border-amber-300"
          }`}>
            <FaGem className="text-sm group-hover:rotate-12 transition-transform" />
          </div>
          <div className="flex flex-col">
            <span className={`font-serif-luxury text-base sm:text-lg font-bold tracking-wider transition-colors ${
              isDarkMode ? "text-white group-hover:text-amber-300" : "text-zinc-900 group-hover:text-amber-700"
            }`}>
              {PERSONAL_INFO.name}
            </span>
            <span className={`text-[9px] uppercase tracking-widest font-mono ${
              isDarkMode ? "text-amber-400/80" : "text-amber-700"
            }`}>
              3D CAD Jewelry Designer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`text-xs uppercase tracking-widest font-medium transition-colors py-1 ${
                isDarkMode 
                  ? "text-zinc-300 hover:text-amber-300" 
                  : "text-zinc-600 hover:text-amber-800"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions: Theme Toggle & Resume */}
        <div className="hidden lg:flex items-center space-x-4">
          
          {/* Day / Night Mode Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2.5 rounded-full border transition-all duration-300 ${
              isDarkMode
                ? "bg-zinc-900 border-zinc-700 text-amber-400 hover:bg-zinc-800 hover:border-amber-400"
                : "bg-white border-zinc-200 text-zinc-800 hover:bg-amber-50 hover:border-amber-500 shadow-sm"
            }`}
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle Theme"
          >
            <motion.div
              initial={false}
              animate={{ rotate: isDarkMode ? 0 : 180 }}
              transition={{ duration: 0.3 }}
            >
              {isDarkMode ? <FaSun className="text-sm" /> : <FaMoon className="text-sm" />}
            </motion.div>
          </button>

          {/* Digital CV Button */}
          <button
            onClick={onOpenResume}
            className={`flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-widest font-medium rounded-full border transition-all duration-300 ${
              isDarkMode
                ? "border-amber-500/40 text-amber-300 bg-amber-500/10 hover:bg-amber-500/20"
                : "border-amber-600 text-amber-800 bg-amber-50 hover:bg-amber-100"
            }`}
          >
            <FaFileAlt /> Digital CV
          </button>

        </div>

        {/* Mobile Buttons */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full border text-xs ${
              isDarkMode ? "bg-zinc-900 border-zinc-800 text-amber-400" : "bg-white border-zinc-300 text-zinc-800"
            }`}
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 focus:outline-none text-sm uppercase tracking-widest ${
              isDarkMode ? "text-zinc-300" : "text-zinc-800"
            }`}
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className={`lg:hidden px-6 py-6 border-b shadow-2xl space-y-4 ${
          isDarkMode ? "bg-[#0c0c12] border-zinc-800 text-white" : "bg-white border-zinc-200 text-zinc-900"
        }`}>
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={`#${link.href}`}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-xs uppercase tracking-widest py-2 hover:text-amber-500"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-zinc-700/50 flex flex-col space-y-3">
            <button
              onClick={() => { setIsMenuOpen(false); onOpenResume(); }}
              className="w-full py-2.5 rounded-full border border-amber-500/40 text-amber-400 text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2"
            >
              <FaFileAlt /> View Digital CV
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;