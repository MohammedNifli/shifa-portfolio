import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';

const Contact = ({ isDarkMode }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`3D CAD Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nProject Details:\n${formData.message}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section id="contact" className={`py-28 relative border-t transition-colors duration-500 ${
      isDarkMode ? "bg-[#050508] border-zinc-900 text-white" : "bg-[#fbf9f5] border-zinc-300 text-zinc-900"
    }`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <motion.div 
          className="text-center space-y-3 mb-16"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={`text-xs uppercase tracking-[0.3em] font-mono font-medium block ${
            isDarkMode ? "text-amber-400" : "text-amber-700"
          }`}>
            Inquiries
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide uppercase font-serif-luxury">
            Get In Touch
          </h2>
          <p className={`text-sm font-light tracking-wider max-w-xl mx-auto ${
            isDarkMode ? "text-zinc-400" : "text-zinc-600"
          }`}>
            Available for freelance CAD design, custom projects, and studio consults.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          className={`p-8 sm:p-12 border transition-all ${
            isDarkMode 
              ? "border-zinc-800 bg-[#0c0c12] shadow-2xl" 
              : "border-zinc-300 bg-white shadow-xl"
          }`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {formSubmitted && (
            <div className="mb-6 p-4 border text-xs uppercase tracking-widest text-center bg-amber-50 border-amber-300 text-amber-900">
              Mail client launched. Thank you for getting in touch.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              
              {/* Full Name */}
              <div className="space-y-2">
                <label className={`block text-[11px] uppercase tracking-[0.2em] font-mono ${
                  isDarkMode ? "text-zinc-400" : "text-zinc-500"
                }`}>
                  Full Name
                </label>
                <input 
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className={`w-full px-4 py-3 border text-sm tracking-wide transition-colors ${
                    isDarkMode 
                      ? "bg-black border-zinc-800 text-white placeholder-zinc-700 focus:border-amber-400" 
                      : "bg-zinc-50 border-zinc-300 text-zinc-900 placeholder-zinc-400 focus:border-amber-600"
                  }`}
                />
              </div>

              {/* Email Address */}
              <div className="space-y-2">
                <label className={`block text-[11px] uppercase tracking-[0.2em] font-mono ${
                  isDarkMode ? "text-zinc-400" : "text-zinc-500"
                }`}>
                  Email Address
                </label>
                <input 
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className={`w-full px-4 py-3 border text-sm tracking-wide transition-colors ${
                    isDarkMode 
                      ? "bg-black border-zinc-800 text-white placeholder-zinc-700 focus:border-amber-400" 
                      : "bg-zinc-50 border-zinc-300 text-zinc-900 placeholder-zinc-400 focus:border-amber-600"
                  }`}
                />
              </div>

            </div>

            {/* Subject / Project Details */}
            <div className="space-y-2">
              <label className={`block text-[11px] uppercase tracking-[0.2em] font-mono ${
                isDarkMode ? "text-zinc-400" : "text-zinc-500"
              }`}>
                Subject / Project Details
              </label>
              <textarea 
                required
                rows={5}
                placeholder="Describe your 3D CAD design requirement or project scope..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className={`w-full px-4 py-3 border text-sm tracking-wide transition-colors resize-none ${
                  isDarkMode 
                    ? "bg-black border-zinc-800 text-white placeholder-zinc-700 focus:border-amber-400" 
                    : "bg-zinc-50 border-zinc-300 text-zinc-900 placeholder-zinc-400 focus:border-amber-600"
                }`}
              />
            </div>

            {/* Submit Button: Minimalist white button with black text */}
            <div className="pt-2">
              <button
                type="submit"
                className={`w-full py-4 font-semibold text-xs uppercase tracking-[0.25em] transition-all duration-300 border ${
                  isDarkMode
                    ? "bg-white text-black border-white hover:bg-zinc-200"
                    : "bg-zinc-900 text-white border-zinc-900 hover:bg-black"
                }`}
              >
                Send Message
              </button>
            </div>

          </form>
        </motion.div>

        {/* Footer */}
        <div className={`mt-24 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-6 text-xs ${
          isDarkMode ? "border-zinc-800 text-zinc-500" : "border-zinc-300 text-zinc-600"
        }`}>
          <p className="tracking-widest uppercase font-mono">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. ALL RIGHTS RESERVED.
          </p>

          <button
            onClick={scrollToTop}
            className={`uppercase tracking-[0.2em] font-mono transition-colors flex items-center gap-2 ${
              isDarkMode ? "text-zinc-400 hover:text-white" : "text-zinc-600 hover:text-black"
            }`}
          >
            <span>Back To Top</span>
            <span>↑</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Contact;
