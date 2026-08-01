import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Career from "./components/Career.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-white selection:text-black font-sans antialiased">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Career />
      <Contact />
    </div>
  );
}

export default App;