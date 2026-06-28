import React from 'react';
import { Download, Linkedin, Github } from 'lucide-react';
import TerminalCursor from './ui/TerminalCursor';

const Header = () => {
  return (
    <header className="border-b border-term-border px-4 sm:px-6 py-10 sm:py-14">
      <div className="section-container">
        <p className="text-term-prompt text-base sm:text-lg">
          ~/<TerminalCursor />
        </p>

        <div className="mt-8 space-y-4">
          <p className="text-term-accent text-lg sm:text-xl">Hello World,</p>
          <h1 className="text-term-text text-xl sm:text-2xl leading-relaxed max-w-2xl">
            I am Ankit, a Strategic AI Product Manager building B2B SaaS products at the
            intersection of AI, automation, and measurable business outcomes.
          </h1>
          <p className="text-term-muted max-w-2xl leading-relaxed">
            This is my space on the internet where I share my experience, projects, and
            product work across proptech, aerospace, fintech, and utilities.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-term-muted">
          <span>Mumbai, India</span>
          <a href="tel:+918875519489">+91 8875519489</a>
          <a href="mailto:ankitbbb162@gmail.com">ankitbbb162@gmail.com</a>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="/Ankit_Bansal_PM_2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <Download size={15} />
            resume.pdf
          </a>
          <a
            href="https://in.linkedin.com/in/ankitbansal2101"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <Linkedin size={15} />
            linkedin
          </a>
          <a
            href="https://github.com/ankitbansal2101"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <Github size={15} />
            github
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-1 text-xs sm:text-sm text-term-dim">
          <span><span className="text-term-accent">5+</span> years PM</span>
          <span><span className="text-term-accent">$4M+</span> ARR impact</span>
          <span><span className="text-term-accent">15+</span> products shipped</span>
        </div>

        <p className="mt-10 text-term-prompt">
          <TerminalCursor />
        </p>
      </div>
    </header>
  );
};

export default Header;
