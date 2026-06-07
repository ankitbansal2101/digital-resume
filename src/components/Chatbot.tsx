import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, MessageCircle, X } from 'lucide-react';
import { openRouterService, ChatMessage } from '../services/openRouterApi';
import { extractAllDocuments } from '../utils/pdfParser';
import PredefinedQuestions from './PredefinedQuestions';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hi! I'm Ankit's AI assistant. Ask me anything about his professional background, experience, skills, or qualifications. I'm here to help!",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStage, setLoadingStage] = useState<'generating' | 'refining' | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showPredefinedQuestions, setShowPredefinedQuestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Handle viewport height changes for mobile keyboard
  useEffect(() => {
    if (!isOpen) return;

    const handleResize = () => {
      // Force a scroll to bottom when keyboard opens/closes
      setTimeout(() => {
        scrollToBottom();
      }, 100);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputMessage.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    setLoadingStage('generating');
    setError(null);
    // Keep predefined questions visible for easy access

    try {
      const allDocumentsContent = await extractAllDocuments();
      const chatMessages: ChatMessage[] = messages.map(msg => ({
        role: msg.role,
        content: msg.content
      }));
      
      chatMessages.push({
        role: 'user',
        content: userMessage.content
      });

      setLoadingStage('refining');
      const response = await openRouterService.sendMessage(chatMessages, allDocumentsContent);

      if (response.error) {
        setError(response.error);
      } else {
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: response.message,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, assistantMessage]);
      }
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error('Chat error:', err);
    } finally {
      setIsLoading(false);
      setLoadingStage(null);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handlePredefinedQuestionSelect = (question: string, answer: string) => {
    // Keep predefined questions visible for multiple selections
    // setShowPredefinedQuestions(false); // Removed this line
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: question,
      timestamp: new Date()
    };

    // Add assistant response immediately (since we have predefined answer)
    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: answer,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, assistantMessage]);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-brand-950/40 backdrop-blur-sm flex items-end sm:items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-cream-50 rounded-t-2xl sm:rounded-2xl shadow-luxury border border-brand-200/60 w-full max-w-sm sm:max-w-2xl h-[60vh] max-h-[60vh] sm:h-[600px] sm:max-h-[600px] flex flex-col">
        {/* Header */}
        <div className="bg-brand-800 text-cream-50 p-3 sm:p-4 rounded-t-2xl sm:rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="bg-brand-700/80 p-1.5 sm:p-2 rounded-full border border-brand-600/30">
              <Bot size={16} className="sm:w-5 sm:h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-sm sm:text-base font-display">Ask about Ankit Bansal</h3>
              <p className="text-brand-200 text-xs sm:text-sm">AI Assistant</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-brand-200 hover:text-cream-50 transition-colors p-1 sm:p-1 bg-brand-700/80 hover:bg-brand-600 rounded-full border border-brand-600/30"
          >
            <X size={18} className="sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 min-h-0">
          {/* Predefined Questions */}
          <PredefinedQuestions 
            onQuestionSelect={handlePredefinedQuestionSelect}
            isVisible={showPredefinedQuestions}
          />
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {message.role === 'assistant' && (
                <div className="bg-brand-100 p-2 rounded-full flex-shrink-0 mt-1">
                  <Bot size={16} className="text-brand-700" />
                </div>
              )}
              
              <div
                className={`max-w-[280px] sm:max-w-xs lg:max-w-md px-3 sm:px-4 py-2 rounded-lg ${
                  message.role === 'user'
                    ? 'bg-brand-700 text-cream-50'
                    : 'bg-cream-100 text-brand-950 border border-brand-100'
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                <p
                  className={`text-xs mt-1 ${
                    message.role === 'user' ? 'text-brand-200' : 'text-stone-500'
                  }`}
                >
                  {formatTime(message.timestamp)}
                </p>
              </div>

              {message.role === 'user' && (
                <div className="bg-brand-700 p-2 rounded-full flex-shrink-0 mt-1">
                  <User size={16} className="text-cream-50" />
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-3 justify-start">
              <div className="bg-brand-100 p-2 rounded-full flex-shrink-0 mt-1">
                <Bot size={16} className="text-brand-700" />
              </div>
              <div className="bg-cream-100 text-brand-950 border border-brand-100 px-4 py-2 rounded-lg">
                <div className="flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin" />
                  <span className="text-sm">
                    {loadingStage === 'generating' ? 'Analyzing your question...' : 
                     loadingStage === 'refining' ? 'Crafting the perfect answer...' : 
                     'Thinking...'}
                  </span>
                </div>
              </div>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              <p className="text-sm">{error}</p>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="border-t border-brand-100 p-2 sm:p-4 flex-shrink-0 bg-cream-50">
          <div className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask anything..."
              className="flex-1 border border-brand-200 bg-cream-50 rounded-lg px-3 py-2 text-sm text-brand-950 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent"
              disabled={isLoading}
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isLoading}
              className="bg-brand-700 text-cream-50 px-3 sm:px-4 py-2 rounded-lg hover:bg-brand-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2 flex-shrink-0"
            >
              {isLoading ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <Send size={16} />
              )}
            </button>
          </div>
          <p className="text-xs text-stone-500 mt-1 sm:mt-2 hidden sm:block">
            Press Enter to send • This AI can answer questions about Ankit's professional background
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
