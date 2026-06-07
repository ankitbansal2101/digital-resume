import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Briefcase, Code, FolderOpen, GraduationCap, MessageCircle } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
}

const Navigation = ({ activeSection }: NavigationProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'portfolio', label: 'Portfolio', icon: FolderOpen },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'contact', label: 'Contact', icon: MessageCircle },
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-brand-200/60 bg-cream-50/90 shadow-sm backdrop-blur-xl'
          : 'border-b border-brand-100/50 bg-cream-100/80 backdrop-blur-md'
      }`}
    >
      <div className="section-container px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center overflow-x-auto py-3 scrollbar-hide">
          <div className="relative flex gap-1 rounded-xl border border-brand-200/60 bg-cream-200/50 p-1 shadow-sm">
            {navItems.map(({ id, label, icon: Icon }) => {
              const isActive = activeSection === id;
              return (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`relative flex items-center gap-2 rounded-lg px-3 sm:px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-cream-50' : 'text-stone-600 hover:text-brand-700'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg bg-brand-700 shadow-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Icon size={15} className="relative z-10 shrink-0" />
                  <span className="relative z-10 hidden sm:inline whitespace-nowrap">{label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
