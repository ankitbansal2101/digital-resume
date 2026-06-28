import React, { useEffect, useState } from 'react';
import TerminalCursor from './TerminalCursor';

const WORDS = ['ankit.dev', 'product manager'];

const TypewriterLogo: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    let wordIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const pauseAfterWord = 1800;
    const typeSpeed = 90;
    const deleteSpeed = 50;

    const tick = () => {
      const word = WORDS[wordIdx];

      if (!deleting) {
        setText(word.slice(0, charIdx + 1));
        charIdx += 1;

        if (charIdx === word.length) {
          deleting = true;
          timeoutId = setTimeout(tick, pauseAfterWord);
          return;
        }

        timeoutId = setTimeout(tick, typeSpeed + Math.random() * 40);
        return;
      }

      setText(word.slice(0, charIdx - 1));
      charIdx -= 1;

      if (charIdx === 0) {
        deleting = false;
        wordIdx = (wordIdx + 1) % WORDS.length;
        timeoutId = setTimeout(tick, 300);
        return;
      }

      timeoutId = setTimeout(tick, deleteSpeed);
    };

    timeoutId = setTimeout(tick, 400);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <span className={`inline-flex items-center gap-0 font-mono ${className}`}>
      <span className="text-term-prompt/80">~/</span>
      <span className="text-term-prompt">{text}</span>
      <TerminalCursor />
    </span>
  );
};

export default TypewriterLogo;
