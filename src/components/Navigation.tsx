import React, { useState, useEffect } from 'react';

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
    { id: 'about', label: 'about' },
    { id: 'experience', label: 'experience' },
    { id: 'skills', label: 'skills' },
    { id: 'portfolio', label: 'portfolio' },
    { id: 'education', label: 'education' },
    { id: 'contact', label: 'contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`sticky top-0 z-50 border-b border-term-border transition-colors duration-200 ${
        scrolled ? 'bg-term-bg/95 backdrop-blur-sm' : 'bg-term-bg'
      }`}
    >
      <div className="section-container px-4 sm:px-6 py-3">
        <div className="flex flex-wrap items-center gap-x-1 gap-y-2 text-sm">
          <span className="text-term-prompt mr-2">menu ▾</span>
          {navItems.map((item, index) => (
            <React.Fragment key={item.id}>
              {index > 0 && <span className="text-term-border select-none">|</span>}
              <button
                onClick={() => scrollToSection(item.id)}
                className={activeSection === item.id ? 'nav-link-active' : 'nav-link'}
              >
                {item.label}
              </button>
            </React.Fragment>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
