import React from 'react';
import { MessageCircle } from 'lucide-react';

interface ChatButtonProps {
  onClick: () => void;
}

const ChatButton: React.FC<ChatButtonProps> = ({ onClick }) => {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Text indicator */}
      <div className="mb-3 bg-white rounded-lg shadow-lg border border-gray-200 px-4 py-2 max-w-xs">
        <p className="text-sm text-gray-700 font-medium">
          💬 Have questions about Ankit?
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Ask me about his experience, skills & background!
        </p>
      </div>
      
      {/* Chat button */}
      <button
        onClick={onClick}
        className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group flex items-center justify-center ml-auto"
        aria-label="Open chat with Ankit's AI assistant"
      >
        <MessageCircle size={24} />
        <div className="absolute bottom-full right-0 mb-2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          Click to chat!
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      </button>
    </div>
  );
};

export default ChatButton;
