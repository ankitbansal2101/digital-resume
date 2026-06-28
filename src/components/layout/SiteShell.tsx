import React, { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import TerminalCursor from '../ui/TerminalCursor';
import ChatButton from '../ChatButton';
import Chatbot from '../Chatbot';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/career', label: 'Career' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/contact', label: 'Contact' },
];

const SiteShell: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-term-bg text-term-text">
      <header className="section-container px-4 sm:px-6 pt-8 pb-6">
        <div className="flex items-start justify-between gap-4">
          <Link to="/" className="text-term-prompt text-lg sm:text-xl hover:text-term-accent">
            ~/<TerminalCursor />
          </Link>

          <div className="relative text-base">
            <button
              type="button"
              className="text-term-muted hover:text-term-accent lg:hidden"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
            >
              Menu ▾
            </button>

            <nav
              className={`${
                menuOpen ? 'flex' : 'hidden'
              } lg:flex absolute lg:relative right-0 top-8 lg:top-0 flex-col lg:flex-row lg:items-center gap-2 lg:gap-1 bg-term-bg lg:bg-transparent border lg:border-0 border-term-border p-3 lg:p-0 z-20 min-w-[160px] lg:min-w-0`}
            >
              <span className="text-term-muted hidden lg:inline">Menu ▾</span>
              {navItems.map((item, index) => (
                <React.Fragment key={item.to}>
                  {index > 0 && <span className="hidden lg:inline text-term-border select-none">|</span>}
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      isActive ? 'nav-link-active' : 'nav-link'
                    }
                  >
                    {item.label}
                  </NavLink>
                </React.Fragment>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="section-container px-4 sm:px-6 pb-16 prose-terminal">
        <Outlet />
      </main>

      <footer className="section-container px-4 sm:px-6 pb-10 text-term-dim text-sm">
        <div className="terminal-divider mb-4" />
        <p>© 2025 Ankit Bansal</p>
      </footer>

      <ChatButton onClick={() => setIsChatOpen(true)} />
      <Chatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};

export default SiteShell;
