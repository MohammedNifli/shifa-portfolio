import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaPrint, FaDownload, FaPhone, FaEnvelope, FaMapMarkerAlt, FaBriefcase, FaGraduationCap, FaTools, FaCheckCircle, FaGem } from 'react-icons/fa';
import { CV_DATA } from '../constants';

const ResumeModal = ({ isOpen, onClose }) => {
  const printRef = useRef(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className="gold-glass-card border-gold-glow max-w-4xl w-full rounded-3xl p-6 sm:p-10 relative my-auto max-h-[92vh] overflow-y-auto shadow-2xl"
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Action Bar */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-amber-500/20">
            <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs uppercase tracking-widest">
              <FaGem /> Digital CV & Resume Preview
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="px-4 py-2 rounded-full bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 border border-amber-500/40 text-xs font-semibold flex items-center gap-2 transition-colors"
              >
                <FaPrint /> Print / Save PDF
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-full bg-stone-800 text-stone-300 hover:text-amber-400 border border-amber-500/30 transition-colors"
                aria-label="Close Resume"
              >
                <FaTimes />
              </button>
            </div>
          </div>

          {/* CV Document Container */}
          <div ref={printRef} className="bg-[#0b0b0e] p-6 sm:p-8 rounded-2xl border border-stone-800 text-stone-200">
            
            {/* Header */}
            <div className="border-b border-amber-500/30 pb-6 mb-6">
              <h1 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white tracking-wide">
                {CV_DATA.name}
              </h1>
              <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mt-1">
                {CV_DATA.title}
              </p>

              {/* Contact Bar */}
              <div className="flex flex-wrap gap-4 text-xs text-stone-300 mt-4 pt-4 border-t border-stone-800/80">
                <a href={`tel:${CV_DATA.contact.phone}`} className="flex items-center gap-1.5 hover:text-amber-300 transition-colors">
                  <FaPhone className="text-amber-400" /> {CV_DATA.contact.phone}
                </a>
                <a href={`mailto:${CV_DATA.contact.email}`} className="flex items-center gap-1.5 hover:text-amber-300 transition-colors">
                  <FaEnvelope className="text-amber-400" /> {CV_DATA.contact.email}
                </a>
                <span className="flex items-center gap-1.5">
                  <FaMapMarkerAlt className="text-amber-400" /> {CV_DATA.contact.location}
                </span>
              </div>
            </div>

            {/* Profile Summary */}
            <div className="mb-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-2">
                <FaGem /> Professional Summary
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                {CV_DATA.summary}
              </p>
            </div>

            {/* Work Experience */}
            <div className="mb-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4 flex items-center gap-2">
                <FaBriefcase /> Industry Experience
              </h2>
              
              {CV_DATA.experience.map((exp, index) => (
                <div key={index} className="p-4 rounded-xl bg-stone-900/60 border border-stone-800 mb-4">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                    <div>
                      <h3 className="text-sm font-bold text-white">{exp.role}</h3>
                      <p className="text-amber-300 text-xs font-medium">{exp.company}</p>
                    </div>
                    <span className="text-[11px] text-stone-400 font-mono bg-black/40 px-2.5 py-1 rounded-md border border-stone-800">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-1.5 mt-3 text-xs text-stone-300">
                    {exp.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <FaCheckCircle className="text-amber-400 text-xs mt-0.5 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="mb-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4 flex items-center gap-2">
                <FaGraduationCap /> Education & Qualifications
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {CV_DATA.education.map((edu, index) => (
                  <div key={index} className="p-4 rounded-xl bg-stone-900/60 border border-stone-800">
                    <h3 className="text-xs font-bold text-white mb-1">{edu.degree}</h3>
                    <p className="text-amber-300 text-xs mb-2">{edu.institution}</p>
                    <p className="text-[11px] text-stone-400">{edu.details}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Skills Matrix */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-2">
                <FaTools /> Key Technical Competencies
              </h2>

              <div className="flex flex-wrap gap-2">
                {CV_DATA.skills.map((skill, index) => (
                  <span key={index} className="px-3 py-1.5 rounded-lg bg-amber-500/10 text-amber-300 text-xs font-medium border border-amber-500/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom CTA */}
          <div className="mt-6 flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full gold-glass-card text-stone-300 hover:text-white text-xs font-semibold"
            >
              Close Preview
            </button>
            <a
              href={`mailto:${CV_DATA.contact.email}?subject=Hiring%20Enquiry%20-%203D%20Jewellery%20CAD%20Designer`}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-600 to-yellow-500 text-black font-semibold text-xs shadow-lg"
            >
              Contact Fathima Shifa
            </a>
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ResumeModal;
