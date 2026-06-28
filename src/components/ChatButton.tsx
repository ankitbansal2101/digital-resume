import React from 'react';
import { Bot } from 'lucide-react';
import TerminalCursor from './ui/TerminalCursor';

interface ChatButtonProps {
  onClick: () => void;
}

const ChatButton: React.FC<ChatButtonProps> = ({ onClick }) => {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
      <div className="absolute bottom-full right-0 mb-3 hidden sm:block max-w-xs border border-term-border bg-term-surface px-4 py-3">
        <p className="text-base text-term-accent">ask ai</p>
        <p className="text-sm text-term-muted mt-1">
          questions about experience, skills & background
        </p>
      </div>

      <button
        onClick={onClick}
        className="flex items-center gap-2 border border-term-accent bg-term-bg px-4 py-3 text-term-accent transition-colors hover:bg-term-accent hover:text-term-bg"
        aria-label="Open chat with Ankit's AI assistant"
      >
        <Bot size={20} />
        <span className="text-base hidden sm:inline">ai --help</span>
        <TerminalCursor className="text-base" />
      </button>
    </div>
  );
};

export default ChatButton;
