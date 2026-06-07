import React from 'react';
import { motion } from 'framer-motion';
import { Bot } from 'lucide-react';

interface ChatButtonProps {
  onClick: () => void;
}

const ChatButton: React.FC<ChatButtonProps> = ({ onClick }) => {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
      <motion.div
        className="absolute bottom-full right-0 mb-3 hidden sm:block max-w-xs rounded-xl border border-brand-200/60 bg-cream-50 px-4 py-3 shadow-luxury"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.4 }}
      >
        <p className="text-sm font-semibold text-brand-950">Ask Ankit's AI Assistant</p>
        <p className="text-xs text-stone-500 mt-1">
          Questions about experience, skills & background
        </p>
      </motion.div>

      <motion.button
        onClick={onClick}
        className="relative flex items-center justify-center rounded-full bg-brand-700 p-3.5 sm:p-4 text-cream-50 shadow-glow transition-colors hover:bg-brand-800"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open chat with Ankit's AI assistant"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      >
        <Bot size={22} className="sm:w-6 sm:h-6" />
        <span className="absolute inset-0 rounded-full bg-brand-400 animate-ping opacity-20" />
      </motion.button>
    </div>
  );
};

export default ChatButton;
