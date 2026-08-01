import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';

const Contact = () => {
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
    <section id="contact" className="py-28 bg-[#050505] text-white relative border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <motion.div 
          className="text-center space-y-3 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-medium block">
            Inquiries
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-white uppercase">
            Get In Touch
          </h2>
          <p className="text-sm text-zinc-400 font-light tracking-wider max-w-xl mx-auto">
            Available for freelance CAD design, custom projects, and studio consults.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          className="dark-card p-8 sm:p-12 border border-zinc-900 bg-black"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {formSubmitted && (
            <div className="mb-6 p-4 border border-zinc-700 bg-zinc-900 text-xs text-zinc-200 uppercase tracking-widest text-center">
              Mail client launched. Thank you for getting in touch.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              
              {/* Full Name */}
              <div className="space-y-2">
                <label className="block text-[11px] uppercase tracking-[0.2em] text-zinc-400 font-mono">
                  Full Name
                </label>
                <input 
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-[#050505] border border-zinc-800 text-white placeholder-zinc-700 focus:outline-none focus:border-zinc-500 text-sm tracking-wide transition-colors"
                />
              </div>

              {/* Email Address */}
              <div className="space-y-2">
                <label className="block text-[11px] uppercase tracking-[0.2em] text-zinc-400 font-mono">
                  Email Address
                </label>
                <input 
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-[#050505] border border-zinc-800 text-white placeholder-zinc-700 focus:outline-none focus:border-zinc-500 text-sm tracking-wide transition-colors"
                />
              </div>

            </div>

            {/* Subject / Project Details */}
            <div className="space-y-2">
              <label className="block text-[11px] uppercase tracking-[0.2em] text-zinc-400 font-mono">
                Subject / Project Details
              </label>
              <textarea 
                required
                rows={5}
                placeholder="Describe your 3D CAD design requirement or project scope..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 bg-[#050505] border border-zinc-800 text-white placeholder-zinc-700 focus:outline-none focus:border-zinc-500 text-sm tracking-wide transition-colors resize-none"
              />
            </div>

            {/* Submit Button: Minimalist white button with black text */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 bg-white text-black font-semibold text-xs uppercase tracking-[0.25em] hover:bg-zinc-200 transition-all duration-300 border border-white"
              >
                Send Message
              </button>
            </div>

          </form>
        </motion.div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-zinc-500">
          <p className="tracking-widest uppercase">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. ALL RIGHTS RESERVED.
          </p>

          <button
            onClick={scrollToTop}
            className="uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors flex items-center gap-2"
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
