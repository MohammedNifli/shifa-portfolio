import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { PERSONAL_INFO } from '../constants';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaArrowUp, FaCheck, FaPaperPlane, FaSpinner, FaExclamationTriangle } from 'react-icons/fa';

const Contact = ({ theme }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // null | 'success' | 'error'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const isDark = theme === 'dark';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);

    const serviceId = import.meta.env.VITE_SERVICE_ID || 'service_1xwk9og';
    const templateId = import.meta.env.VITE_TEMPLATE_ID || 'template_zizb063';
    const publicKey = import.meta.env.VITE_PUBLIC_KEY || 'jb9YP7dhHzMwglyNv';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      name: formData.name,
      email: formData.email,
      reply_to: formData.email,
      message: formData.message,
      to_name: PERSONAL_INFO.name,
      time: new Date().toLocaleString('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short',
      }),
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setSubmissionStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmissionStatus(null), 6000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmissionStatus('error');
      setTimeout(() => setSubmissionStatus(null), 6000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section id="contact" className={`py-24 sm:py-32 transition-colors duration-300 relative border-t ${
      isDark 
        ? "bg-[#050505] text-white border-zinc-900" 
        : "bg-white text-zinc-900 border-zinc-200"
    }`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          className="text-center space-y-3 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={`text-xs uppercase tracking-[0.3em] font-mono block ${
            isDark ? "text-amber-400" : "text-amber-700 font-semibold"
          }`}>
            Inquiries & Studio Consults
          </span>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide uppercase">
            Get In Touch
          </h2>

          <p className={`text-sm font-light tracking-wider max-w-xl mx-auto ${
            isDark ? "text-zinc-400" : "text-zinc-600"
          }`}>
            Available for freelance CAD design, custom projects, and studio consults.
          </p>
        </motion.div>

        {/* Quick Contact Action Bar (Phone, Email, WhatsApp) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <a
            href={`tel:${PERSONAL_INFO.phone}`}
            className={`p-4 rounded-xl border flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-wider transition-all ${
              isDark 
                ? "bg-[#0a0a0e] border-zinc-800 text-zinc-200 hover:border-amber-400/50 hover:text-white" 
                : "bg-zinc-50 border-zinc-200 text-zinc-800 hover:border-zinc-400 hover:bg-zinc-100"
            }`}
          >
            <FaPhoneAlt className="text-amber-500" /> {PERSONAL_INFO.phoneFormatted}
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className={`p-4 rounded-xl border flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-wider transition-all truncate ${
              isDark 
                ? "bg-[#0a0a0e] border-zinc-800 text-zinc-200 hover:border-amber-400/50 hover:text-white" 
                : "bg-zinc-50 border-zinc-200 text-zinc-800 hover:border-zinc-400 hover:bg-zinc-100"
            }`}
          >
            <FaEnvelope className="text-amber-500 shrink-0" /> <span className="truncate">{PERSONAL_INFO.email}</span>
          </a>

          <a
            href={`https://wa.me/91${PERSONAL_INFO.phone}?text=Hi%20Shifa,%20I%20saw%20your%20Jewellery%20CAD%20Portfolio!`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl border border-emerald-500/40 bg-emerald-950/20 text-emerald-400 hover:bg-emerald-950/40 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-wider transition-all"
          >
            <FaWhatsapp className="text-emerald-400 text-base" /> WhatsApp Chat
          </a>
        </div>

        {/* Contact Form */}
        <motion.div 
          className={`p-8 sm:p-12 rounded-3xl border shadow-2xl transition-all ${
            isDark 
              ? "bg-[#0a0a0e] border-zinc-800 text-white" 
              : "bg-white border-zinc-200 text-zinc-900 shadow-zinc-200"
          }`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {submissionStatus === 'success' && (
            <div className="mb-6 p-4 rounded-xl border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-widest text-center flex items-center justify-center gap-2">
              <FaCheck /> Message sent successfully! Thank you for getting in touch.
            </div>
          )}

          {submissionStatus === 'error' && (
            <div className="mb-6 p-4 rounded-xl border border-rose-500/40 bg-rose-500/10 text-rose-400 text-xs font-semibold uppercase tracking-widest text-center flex items-center justify-center gap-2">
              <FaExclamationTriangle /> Failed to send message. Please try again or reach out directly via Email/WhatsApp above.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Full Name */}
              <div className="space-y-2">
                <label className={`block text-[11px] uppercase tracking-[0.2em] font-mono ${
                  isDark ? "text-zinc-400" : "text-zinc-600"
                }`}>
                  Full Name *
                </label>
                <input 
                  type="text"
                  required
                  disabled={isSubmitting}
                  placeholder="e.g. Ananya Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className={`w-full px-4 py-3.5 rounded-xl border text-sm tracking-wide transition-colors ${
                    isDark 
                      ? "bg-black/60 border-zinc-800 text-white placeholder-zinc-700 focus:border-amber-400" 
                      : "bg-zinc-50 border-zinc-300 text-zinc-900 placeholder-zinc-400 focus:border-zinc-600"
                  }`}
                />
              </div>

              {/* Email Address */}
              <div className="space-y-2">
                <label className={`block text-[11px] uppercase tracking-[0.2em] font-mono ${
                  isDark ? "text-zinc-400" : "text-zinc-600"
                }`}>
                  Email Address *
                </label>
                <input 
                  type="email"
                  required
                  disabled={isSubmitting}
                  placeholder="e.g. client@jewellery.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className={`w-full px-4 py-3.5 rounded-xl border text-sm tracking-wide transition-colors ${
                    isDark 
                      ? "bg-black/60 border-zinc-800 text-white placeholder-zinc-700 focus:border-amber-400" 
                      : "bg-zinc-50 border-zinc-300 text-zinc-900 placeholder-zinc-400 focus:border-zinc-600"
                  }`}
                />
              </div>

            </div>

            {/* Subject / Project Details */}
            <div className="space-y-2">
              <label className={`block text-[11px] uppercase tracking-[0.2em] font-mono ${
                isDark ? "text-zinc-400" : "text-zinc-600"
              }`}>
                Subject / Project Details *
              </label>
              <textarea 
                required
                rows={5}
                disabled={isSubmitting}
                placeholder="Describe your 3D CAD design requirement, metal type, stone specifications, or timeline..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className={`w-full px-4 py-3.5 rounded-xl border text-sm tracking-wide transition-colors resize-none ${
                  isDark 
                    ? "bg-black/60 border-zinc-800 text-white placeholder-zinc-700 focus:border-amber-400" 
                    : "bg-zinc-50 border-zinc-300 text-zinc-900 placeholder-zinc-400 focus:border-zinc-600"
                }`}
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl font-bold text-xs uppercase tracking-[0.25em] transition-all duration-300 border flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed ${
                  isDark 
                    ? "bg-white text-black border-white hover:bg-amber-300 hover:border-amber-300" 
                    : "bg-zinc-900 text-white border-zinc-900 hover:bg-black"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="animate-spin text-sm" /> Sending Message...
                  </>
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>
            </div>

          </form>
        </motion.div>

        {/* Footer */}
        <div className={`mt-20 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs ${
          isDark ? "border-zinc-900 text-zinc-500" : "border-zinc-200 text-zinc-500"
        }`}>
          <p className="tracking-wider uppercase font-mono">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. ALL RIGHTS RESERVED.
          </p>

          <button
            onClick={scrollToTop}
            className={`uppercase tracking-[0.2em] font-mono flex items-center gap-2 transition-colors ${
              isDark ? "text-amber-400 hover:text-white" : "text-zinc-700 hover:text-black font-semibold"
            }`}
          >
            <span>Back To Top</span>
            <FaArrowUp />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Contact;
