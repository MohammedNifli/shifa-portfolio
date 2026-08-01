import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from "../constants";

const Navbar = ({ onOpenResume }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "About", href: "about" },
    { name: "CAD Studio", href: "cad-studio" },
    { name: "Projects", href: "projects" },
    { name: "Gem Settings", href: "stone-settings" },
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
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-black/90 backdrop-blur-md border-b border-zinc-900 py-4 shadow-2xl" 
          : "bg-transparent py-6"
      }`}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex justify-between items-center">
        
        {/* Brand Name */}
        <a 
          href="#hero" 
          onClick={(e) => scrollToSection(e, "hero")}
          className="group flex flex-col"
        >
          <span className="text-white font-serif-luxury text-lg tracking-widest uppercase font-bold group-hover:text-zinc-300 transition-colors">
            {PERSONAL_INFO.name}
          </span>
          <span className="text-[10px] text-zinc-400 tracking-wider font-mono uppercase">
            3D CAD Jewelry Specialist
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-[11px] uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Digital CV Button - Desktop */}
        <div className="hidden lg:flex items-center space-x-4">
          <button
            onClick={onOpenResume}
            className="px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] border border-zinc-700 text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            Digital CV
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="px-3 py-1.5 text-[10px] uppercase tracking-widest border border-zinc-700 text-white"
          >
            CV
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-zinc-300 hover:text-white text-xs uppercase tracking-widest focus:outline-none"
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <motion.div 
          className="lg:hidden bg-black border-b border-zinc-900 px-6 py-6 space-y-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              onClick={(e) => scrollToSection(e, link.href)}
              className="block text-xs uppercase tracking-widest text-zinc-400 hover:text-white py-2"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => { setIsMenuOpen(false); onOpenResume(); }}
            className="w-full py-2.5 text-xs font-semibold uppercase tracking-widest border border-zinc-700 text-white hover:bg-white hover:text-black transition-colors"
          >
            View Digital CV
          </button>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;