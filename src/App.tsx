import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Education from './components/Education';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import ChatButton from './components/ChatButton';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'skills', 'portfolio', 'education', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-cream-100">
      <Header />
      <Navigation activeSection={activeSection} />

      <main className="section-container px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12 sm:space-y-16">
        <About />
        <Experience />
        <Skills />
        <Portfolio />
        <Education />
        <Contact />
      </main>

      <footer className="border-t border-brand-200/60 bg-cream-200/80 text-stone-600 py-10 mt-4">
        <div className="section-container px-4 sm:px-6 lg:px-8">
          <div className="luxury-divider mb-8" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="font-display text-lg font-semibold text-brand-900">Ankit Bansal</p>
              <p className="text-sm mt-1 text-stone-500">Strategic AI Product Manager</p>
            </div>
            <p className="text-sm text-stone-500">&copy; 2025 Ankit Bansal. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <ChatButton onClick={() => setIsChatOpen(true)} />
      <Chatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
}

export default App;
