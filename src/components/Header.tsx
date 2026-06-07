import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Download, Linkedin, Github, ArrowDown } from 'lucide-react';

const stats = [
  { value: '4+', label: 'Years in PM' },
  { value: '$4M+', label: 'ARR Impact' },
  { value: '15+', label: 'Products Shipped' },
];

const Header = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-cream-100 via-cream-50 to-cream-200 text-stone-800 border-b border-brand-200/40">
      <div className="absolute inset-0 hero-grid opacity-60" />
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute top-0 left-0 right-0 luxury-divider" />
      <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-brand-300/20 blur-3xl" />

      <div className="section-container relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200/80 bg-cream-50/80 px-4 py-1.5 text-sm text-brand-800 backdrop-blur-sm shadow-sm"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-600" />
            </span>
            Open to Product Leadership roles
          </motion.div>

          <motion.h1
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-950"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Ankit Bansal
          </motion.h1>

          <motion.p
            className="mt-4 text-xl sm:text-2xl font-medium text-brand-700 font-display"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Strategic AI Product Manager
          </motion.p>

          <motion.p
            className="mt-4 text-base sm:text-lg leading-relaxed text-stone-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Building B2B SaaS products at the intersection of AI, automation, and
            measurable business outcomes, from PropTech CRM to aerospace and fintech.
          </motion.p>

          <motion.div
            className="mt-8 grid grid-cols-3 gap-4 sm:gap-8 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center rounded-xl border border-brand-200/50 bg-cream-50/70 px-2 py-3 shadow-sm"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 + i * 0.08 }}
              >
                <div className="text-2xl sm:text-3xl font-bold text-brand-900 font-display">{stat.value}</div>
                <div className="mt-1 text-xs sm:text-sm text-stone-500">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-stone-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.5 }}
          >
            <div className="flex items-center gap-1.5">
              <MapPin size={14} className="text-brand-600" />
              <span>Mumbai, India</span>
            </div>
            <a href="tel:+918875519489" className="flex items-center gap-1.5 hover:text-brand-800 transition-colors">
              <Phone size={14} className="text-brand-600" />
              <span>+91 8875519489</span>
            </a>
            <a href="mailto:ankitbbb162@gmail.com" className="flex items-center gap-1.5 hover:text-brand-800 transition-colors">
              <Mail size={14} className="text-brand-600" />
              <span>ankitbbb162@gmail.com</span>
            </a>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row justify-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.5 }}
          >
            <a
              href="/Ankit_Bansal_PM.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary shadow-glow"
            >
              <Download size={18} />
              Download Resume
            </a>
            <a
              href="https://in.linkedin.com/in/ankitbansal2101"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a
              href="https://github.com/ankitbansal2101"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Github size={18} />
              GitHub
            </a>
          </motion.div>
        </motion.div>

        <motion.button
          onClick={scrollToAbout}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1 text-brand-500 hover:text-brand-700 transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          aria-label="Scroll to content"
        >
          <span className="text-xs font-medium tracking-wide uppercase">Explore</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}>
            <ArrowDown size={18} />
          </motion.div>
        </motion.button>
      </div>
    </header>
  );
};

export default Header;
