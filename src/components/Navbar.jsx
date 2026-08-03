import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon, FaFileAlt, FaBars, FaTimes } from 'react-icons/fa';
import { PERSONAL_INFO } from "../constants";

const Navbar = ({ theme, setTheme, onOpenResume }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isDark = theme === 'dark';

  const navLinks = [
    { name: "About", href: "about" },
    { name: "Projects", href: "projects" },
    { name: "Experience", href: "experience" },
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

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? isDark
          ? "bg-black/90 backdrop-blur-md border-b border-zinc-900 py-3.5 shadow-xl shadow-black/80" 
          : "bg-white/90 backdrop-blur-md border-b border-zinc-200 py-3.5 shadow-sm shadow-zinc-200"
        : "bg-transparent py-5"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        
        {/* Logo / Brand Name */}
        <a 
          href="#hero" 
          onClick={(e) => scrollToSection(e, "hero")}
          className="flex flex-col group"
        >
          <span className={`font-serif-luxury text-lg sm:text-xl font-bold tracking-wider uppercase transition-colors ${
            isDark ? "text-white group-hover:text-amber-300" : "text-zinc-900 group-hover:text-amber-700"
          }`}>
            {PERSONAL_INFO.name}
          </span>
          <span className={`text-[10px] uppercase tracking-widest font-mono transition-colors ${
            isDark ? "text-zinc-400" : "text-zinc-500"
          }`}>
            3D CAD Jewelry Designer
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`text-xs uppercase tracking-widest font-medium transition-all duration-200 ${
                isDark 
                  ? "text-zinc-300 hover:text-white" 
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Quick Action Controls: Day/Night Theme Switcher & Resume Button */}
        <div className="hidden sm:flex items-center space-x-4">
          
          {/* Day / Night Theme Switcher */}
          <button
            onClick={toggleTheme}
            className={`p-2.5 rounded-full border transition-all duration-300 flex items-center justify-center ${
              isDark 
                ? "bg-zinc-900/80 border-zinc-800 text-amber-300 hover:bg-zinc-800 hover:border-amber-400/50 shadow-sm" 
                : "bg-zinc-100 border-zinc-300 text-amber-600 hover:bg-zinc-200 hover:border-amber-500/50 shadow-sm"
            }`}
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle Theme"
          >
            {isDark ? <FaSun className="text-sm" /> : <FaMoon className="text-sm" />}
          </button>

          {/* Digital Resume Button */}
          <button
            onClick={onOpenResume}
            className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold border flex items-center gap-2 transition-all duration-300 ${
              isDark
                ? "bg-zinc-900 border-zinc-800 text-zinc-200 hover:bg-white hover:text-black hover:border-white"
                : "bg-zinc-900 border-zinc-900 text-white hover:bg-zinc-800"
            }`}
          >
            <FaFileAlt className="text-xs" /> Digital CV
          </button>
        </div>

        {/* Mobile Hamburger & Controls */}
        <div className="flex sm:hidden items-center space-x-3">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full border ${
              isDark ? "bg-zinc-900 border-zinc-800 text-amber-300" : "bg-zinc-100 border-zinc-300 text-amber-600"
            }`}
            aria-label="Toggle Theme"
          >
            {isDark ? <FaSun className="text-xs" /> : <FaMoon className="text-xs" />}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 text-base focus:outline-none ${
              isDark ? "text-zinc-300 hover:text-white" : "text-zinc-700 hover:text-black"
            }`}
            aria-label="Toggle Navigation Menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <motion.div 
          className={`lg:hidden px-6 py-6 border-b space-y-4 shadow-2xl ${
            isDark 
              ? "bg-black border-zinc-900 text-white" 
              : "bg-white border-zinc-200 text-zinc-900"
          }`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={`#${link.href}`}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`text-xs uppercase tracking-widest font-medium py-2 border-b border-zinc-800/40 ${
                  isDark ? "text-zinc-300 hover:text-white" : "text-zinc-700 hover:text-black"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col space-y-2">
            <button
              onClick={() => { setIsMenuOpen(false); onOpenResume(); }}
              className={`w-full py-2.5 rounded-lg text-xs uppercase tracking-wider font-semibold border flex items-center justify-center gap-2 ${
                isDark 
                  ? "bg-zinc-900 border-zinc-800 text-white" 
                  : "bg-zinc-900 text-white border-zinc-900"
              }`}
            >
              <FaFileAlt /> View Digital CV / Resume
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;