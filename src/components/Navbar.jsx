import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from "../constants";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-black/90 backdrop-blur-md border-b border-zinc-900 py-4" 
        : "bg-transparent py-6"
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex justify-between items-center">
        
        {/* Brand Name */}
        <a 
          href="#hero" 
          onClick={(e) => scrollToSection(e, "hero")}
          className="text-white font-medium tracking-widest text-sm uppercase hover:text-zinc-400 transition-colors"
        >
          {PERSONAL_INFO.name}
          <span className="block text-[10px] text-zinc-500 tracking-normal font-normal">
            3D CAD Jewelry Designer
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-zinc-400 hover:text-white text-xs uppercase tracking-widest focus:outline-none"
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-b border-zinc-900 px-6 py-6 space-y-4">
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
        </div>
      )}
    </header>
  );
};

export default Navbar;