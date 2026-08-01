import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import CadViewer from "./components/CadViewer.jsx";
import StoneSettings from "./components/StoneSettings.jsx";
import Projects from "./components/Projects.jsx";
import Career from "./components/Career.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import ResumeModal from "./components/ResumeModal.jsx";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className={`min-h-screen font-sans antialiased transition-colors duration-500 ${
      isDarkMode ? "theme-dark bg-[#050508]" : "theme-light bg-[#fbf9f5]"
    }`}>
      <Navbar 
        isDarkMode={isDarkMode} 
        toggleTheme={toggleTheme} 
        onOpenResume={() => setIsResumeOpen(true)} 
      />

      <Hero 
        isDarkMode={isDarkMode} 
        onOpenResume={() => setIsResumeOpen(true)} 
      />

      <About isDarkMode={isDarkMode} />

      <CadViewer isDarkMode={isDarkMode} />

      <StoneSettings isDarkMode={isDarkMode} />

      <Projects isDarkMode={isDarkMode} />

      <Career isDarkMode={isDarkMode} />

      <Skills isDarkMode={isDarkMode} />

      <Contact isDarkMode={isDarkMode} />

      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
        isDarkMode={isDarkMode}
      />
    </div>
  );
}

export default App;