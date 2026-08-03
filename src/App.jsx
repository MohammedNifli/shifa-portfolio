import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Career from "./components/Career.jsx";
import Contact from "./components/Contact.jsx";
import ResumeModal from "./components/ResumeModal.jsx";

function App() {
  const [theme, setTheme] = useState('dark');
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className={`min-h-screen font-sans antialiased transition-colors duration-300 ${
      theme === 'dark' 
        ? "bg-black text-white selection:bg-amber-400 selection:text-black" 
        : "bg-[#F9F9FB] text-zinc-900 selection:bg-zinc-900 selection:text-white"
    }`}>
      
      {/* Header Navigation with Theme Switcher & Resume Modal Trigger */}
      <Navbar 
        theme={theme} 
        setTheme={setTheme} 
        onOpenResume={() => setIsResumeOpen(true)} 
      />

      {/* Hero Section with Watermark-Cropped High Quality Video */}
      <Hero 
        theme={theme} 
        onOpenResume={() => setIsResumeOpen(true)} 
      />

      {/* About & Profile Section (2-Column 4:5 Grid) */}
      <About theme={theme} />

      {/* Featured CAD Projects (Responsive 8 High-Res Tanishq Renders) */}
      <Projects theme={theme} />

      {/* Experience & Education Section */}
      <Career theme={theme} />

      {/* Contact Form & Footer */}
      <Contact theme={theme} />

      {/* Digital CV / Resume Modal */}
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />

    </div>
  );
}

export default App;