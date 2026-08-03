import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaTimes, 
  FaDownload, 
  FaPrint, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaBriefcase, 
  FaGraduationCap, 
  FaTools, 
  FaCheckCircle, 
  FaGem, 
  FaLinkedin, 
  FaInstagram, 
  FaGlobe,
  FaAward,
  FaLanguage
} from 'react-icons/fa';
import { CV_DATA } from '../constants';

const ResumeModal = ({ isOpen, onClose }) => {
  const printRef = useRef(null);

  if (!isOpen) return null;

  const handleDownloadPDF = (e) => {
    if (e) e.preventDefault();

    // 1. Trigger direct download for public/Fathima_Shifa_AP_Resume.pdf if present
    const link = document.createElement('a');
    link.href = '/Fathima_Shifa_AP_Resume.pdf';
    link.download = 'Fathima_Shifa_AP_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // 2. Launch instant print-to-PDF dialog for saving the formatted CV
    setTimeout(() => {
      window.print();
    }, 200);
  };

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto no-print"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className="gold-glass-card border-gold-glow max-w-4xl w-full rounded-3xl p-5 sm:p-8 relative my-auto max-h-[92vh] overflow-y-auto shadow-2xl"
          initial={{ scale: 0.95, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header / Action Bar */}
          <div className="flex items-center justify-between pb-5 mb-6 border-b border-amber-500/20 no-print">
            <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs uppercase tracking-widest">
              <FaGem className="text-amber-400" /> Formal Resume / CV Document
            </div>

            <div className="flex items-center gap-2.5">
              <button
                onClick={handleDownloadPDF}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 text-black hover:from-amber-400 hover:to-yellow-300 font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg shadow-amber-500/20"
              >
                <FaDownload className="text-xs" /> Download / Print PDF
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-full bg-zinc-800 text-zinc-300 hover:text-amber-400 border border-zinc-700 transition-colors"
                aria-label="Close Resume"
              >
                <FaTimes />
              </button>
            </div>
          </div>

          {/* Printable Formal CV Document Container */}
          <div 
            id="printable-cv" 
            ref={printRef} 
            className="bg-[#0a0a0f] p-6 sm:p-10 rounded-2xl border border-zinc-800 text-zinc-200 shadow-xl space-y-6"
          >
            
            {/* CV Header */}
            <div className="border-b border-amber-500/30 pb-6">
              <h1 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white tracking-wide uppercase">
                {CV_DATA.name}
              </h1>
              <p className="text-amber-400 text-xs sm:text-sm font-mono font-semibold uppercase tracking-widest mt-1">
                {CV_DATA.tagline}
              </p>

              {/* Contact Information Bar */}
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-zinc-300 mt-4 pt-4 border-t border-zinc-800/80 font-mono">
                <a href={`tel:${CV_DATA.contact.phone}`} className="flex items-center gap-1.5 hover:text-amber-300 transition-colors">
                  <FaPhone className="text-amber-400" /> {CV_DATA.contact.phone}
                </a>
                <a href={`mailto:${CV_DATA.contact.email}`} className="flex items-center gap-1.5 hover:text-amber-300 transition-colors">
                  <FaEnvelope className="text-amber-400" /> {CV_DATA.contact.email}
                </a>
                <span className="flex items-center gap-1.5">
                  <FaLinkedin className="text-amber-400" /> {CV_DATA.contact.linkedin}
                </span>
                <a href={CV_DATA.contact.portfolio} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-amber-300 transition-colors">
                  <FaGlobe className="text-amber-400" /> shifa-portfolio
                </a>
                <span className="flex items-center gap-1.5">
                  <FaInstagram className="text-amber-400" /> {CV_DATA.contact.instagram}
                </span>
                <span className="flex items-center gap-1.5">
                  <FaMapMarkerAlt className="text-amber-400" /> {CV_DATA.contact.location}
                </span>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-widest text-amber-400 flex items-center gap-2 border-b border-zinc-800/80 pb-1">
                <FaGem className="text-xs" /> Professional Summary
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                {CV_DATA.summary}
              </p>
            </div>

            {/* Professional Experience */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-widest text-amber-400 flex items-center gap-2 border-b border-zinc-800/80 pb-1">
                <FaBriefcase className="text-xs" /> Professional Experience
              </h2>
              
              {CV_DATA.experience.map((exp, index) => (
                <div key={index} className="p-4 sm:p-5 rounded-xl bg-[#0e0e14] border border-zinc-800/90 space-y-2">
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <div>
                      <h3 className="text-sm font-bold text-white tracking-wide">{exp.role}</h3>
                      <p className="text-amber-300 text-xs font-mono font-semibold">{exp.company}</p>
                    </div>
                    <span className="text-[11px] text-amber-400 font-mono bg-black/60 px-3 py-1 rounded-md border border-amber-500/20">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-1.5 pt-2 text-xs text-zinc-300">
                    {exp.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold shrink-0 mt-0.5">•</span>
                        <span className="leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Technical Skills & Manufacturing Knowledge */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-widest text-amber-400 flex items-center gap-2 border-b border-zinc-800/80 pb-1">
                <FaTools className="text-xs" /> Technical Skills & Manufacturing Expertise
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-[#0e0e14] border border-zinc-800 space-y-1">
                  <span className="text-amber-400 font-mono font-semibold uppercase tracking-wider block text-[11px]">CAD Software</span>
                  <p className="text-zinc-300 font-light">{CV_DATA.technicalSkills.cadSoftware}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0e0e14] border border-zinc-800 space-y-1">
                  <span className="text-amber-400 font-mono font-semibold uppercase tracking-wider block text-[11px]">Jewellery Design</span>
                  <p className="text-zinc-300 font-light">{CV_DATA.technicalSkills.jewelleryDesign}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0e0e14] border border-zinc-800 space-y-1 sm:col-span-2">
                  <span className="text-amber-400 font-mono font-semibold uppercase tracking-wider block text-[11px]">Manufacturing Knowledge</span>
                  <p className="text-zinc-300 font-light">{CV_DATA.technicalSkills.manufacturingKnowledge}</p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-widest text-amber-400 flex items-center gap-2 border-b border-zinc-800/80 pb-1">
                <FaGraduationCap className="text-xs" /> Education
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {CV_DATA.education.map((edu, index) => (
                  <div key={index} className="p-4 rounded-xl bg-[#0e0e14] border border-zinc-800 space-y-1">
                    <h3 className="text-xs font-bold text-white leading-snug">{edu.degree}</h3>
                    <p className="text-amber-300 text-[11px] font-mono">{edu.institution}</p>
                    <span className="text-[10px] text-zinc-400 font-mono block italic">{edu.period}</span>
                    <p className="text-[11px] text-zinc-300 pt-1 font-light">{edu.details}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Competencies & Highlights */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-widest text-amber-400 flex items-center gap-2 border-b border-zinc-800/80 pb-1">
                <FaAward className="text-xs" /> Core Competencies
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {CV_DATA.coreCompetencies.map((comp, index) => (
                  <div key={index} className="px-3 py-1.5 rounded-lg bg-amber-500/10 text-amber-300 text-[11px] font-mono border border-amber-500/20 flex items-center gap-1.5">
                    <FaCheckCircle className="text-amber-400 text-[10px] shrink-0" />
                    <span className="truncate">{comp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="space-y-2 pt-2 border-t border-zinc-800">
              <h2 className="text-xs font-bold uppercase tracking-widest text-amber-400 flex items-center gap-2">
                <FaLanguage className="text-xs" /> Languages
              </h2>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-zinc-300">
                {CV_DATA.languages.map((lang, index) => (
                  <span key={index} className="px-3 py-1 rounded-md bg-black/50 border border-zinc-800">
                    {lang}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Action CTA Bar */}
          <div className="mt-6 flex flex-wrap justify-between items-center gap-3 no-print">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full border border-zinc-700 text-zinc-300 hover:text-white text-xs font-semibold"
            >
              Close Preview
            </button>

            <div className="flex items-center gap-3">
              <button
                onClick={handleDownloadPDF}
                className="px-6 py-2.5 rounded-full bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 border border-amber-500/40 text-xs font-semibold flex items-center gap-2 transition-colors"
              >
                <FaDownload /> Download / Save PDF
              </button>

              <a
                href={`mailto:${CV_DATA.contact.email}?subject=Hiring%20Enquiry%20-%203D%20Jewellery%20CAD%20Designer`}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-600 to-yellow-500 text-black font-semibold text-xs shadow-lg"
              >
                Contact Fathima Shifa
              </a>
            </div>
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ResumeModal;
