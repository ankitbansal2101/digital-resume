import React from 'react';

const TerminalCursor: React.FC<{ className?: string }> = ({ className = '' }) => (
  <span className={`inline-block animate-blink ${className}`} aria-hidden="true">
    ▋
  </span>
);

export default TerminalCursor;
