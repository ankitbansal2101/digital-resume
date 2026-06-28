import React from 'react';
import TerminalCursor from '../components/ui/TerminalCursor';

const HomePage: React.FC = () => {
  return (
    <article>
      <p className="text-term-accent text-xl sm:text-2xl mb-4">Hello World,</p>
      <p className="text-term-text text-lg sm:text-xl leading-relaxed max-w-2xl">
        I am Ankit, a Strategic AI Product Manager with 5+ years building B2B SaaS products
        across proptech, aerospace, fintech, and utilities.
      </p>
      <p className="text-term-muted mt-4 max-w-2xl leading-relaxed">
        This is my space on the internet where I share my experiences, learnings, and product
        work.
      </p>
      <p className="mt-12 text-term-prompt">
        <TerminalCursor />
      </p>
    </article>
  );
};

export default HomePage;
