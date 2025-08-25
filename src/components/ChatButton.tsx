import React from 'react';
import { Bot } from 'lucide-react';

interface ChatButtonProps {
  onClick: () => void;
}

const ChatButton: React.FC<ChatButtonProps> = ({ onClick }) => {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
      {/* Text indicator - only show on desktop, positioned above button */}
      <div className="absolute bottom-full right-0 mb-3 bg-white rounded-lg shadow-lg border border-gray-200 px-3 py-2 max-w-xs hidden sm:block">
        <p className="text-sm text-gray-700 font-medium">
          🤖 Ask Ankit's AI Assistant
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Questions about experience, skills & background
        </p>
        {/* Speech bubble arrow pointing down to the button */}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-white"></div>
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-0.5 w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-gray-200"></div>
      </div>
      
      {/* AI Bot button */}
      <button
        onClick={onClick}
        className="bg-blue-600 hover:bg-blue-700 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group flex items-center justify-center relative"
        aria-label="Open chat with Ankit's AI assistant"
      >
        <Bot size={20} className="sm:w-6 sm:h-6" />
        
        {/* Pulsing animation to indicate it's active */}
        <div className="absolute inset-0 rounded-full bg-blue-600 animate-ping opacity-20"></div>
        
        {/* Mobile: Small badge indicator */}
        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center sm:hidden">
          ?
        </div>
        
        {/* Desktop hover tooltip */}
        <div className="absolute bottom-full right-0 mb-2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap hidden sm:block">
          Chat with AI Assistant
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      </button>
    </div>
  );
};

export default ChatButton;
