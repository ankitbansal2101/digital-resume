import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, X } from 'lucide-react';
import { openRouterService, ChatMessage } from '../services/openRouterApi';
import { extractAllDocuments } from '../utils/pdfParser';
import PredefinedQuestions from './PredefinedQuestions';
import TerminalCursor from './ui/TerminalCursor';

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
      content: "Hi! I'm Ankit's AI assistant. Ask me anything about his professional background, experience, skills, or qualifications.",
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

  useEffect(() => {
    if (!isOpen) return;

    const handleResize = () => {
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
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: question,
      timestamp: new Date()
    };

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
    <div className="fixed inset-0 bg-term-bg/80 backdrop-blur-sm flex items-end sm:items-center justify-center z-[100002] p-2 sm:p-4">
      <div className="border border-term-border bg-term-surface w-full max-w-sm sm:max-w-2xl h-[60vh] max-h-[60vh] sm:h-[600px] sm:max-h-[600px] flex flex-col">
        <div className="border-b border-term-border p-3 sm:p-4 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <Bot size={16} className="text-term-accent" />
            <div>
              <h3 className="font-semibold text-base sm:text-lg text-term-accent">
                Ankit&apos;s Text AI
              </h3>
              <p className="text-term-dim text-sm">assistant online</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-term-muted hover:text-term-accent transition-colors p-1 border border-term-border hover:border-term-accent"
            aria-label="Close chat"
          >
            <X size={18} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 min-h-0">
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
                <div className="border border-term-border p-2 shrink-0 mt-1">
                  <Bot size={14} className="text-term-accent" />
                </div>
              )}
              
              <div
                className={`max-w-[280px] sm:max-w-xs lg:max-w-md px-3 sm:px-4 py-2 border ${
                  message.role === 'user'
                    ? 'border-term-accent bg-term-elevated text-term-text'
                    : 'border-term-border bg-term-bg text-term-muted'
                }`}
              >
                <p className="text-base whitespace-pre-wrap">{message.content}</p>
                <p className="text-sm mt-1 text-term-dim">
                  {formatTime(message.timestamp)}
                </p>
              </div>

              {message.role === 'user' && (
                <div className="border border-term-accent p-2 shrink-0 mt-1">
                  <User size={14} className="text-term-accent" />
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-3 justify-start">
              <div className="border border-term-border p-2 shrink-0 mt-1">
                <Bot size={14} className="text-term-accent" />
              </div>
              <div className="border border-term-border bg-term-bg px-4 py-2">
                <div className="flex items-center gap-2 text-term-muted">
                  <Loader2 size={16} className="animate-spin text-term-accent" />
                  <span className="text-base">
                    {loadingStage === 'generating' ? 'analyzing...' : 
                     loadingStage === 'refining' ? 'crafting answer...' : 
                     'thinking...'}
                  </span>
                  <TerminalCursor className="text-base" />
                </div>
              </div>
            </div>
          )}

          {error && (
            <div className="border border-red-800 bg-red-950/30 text-red-400 px-4 py-3">
              <p className="text-base">{error}</p>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <div className="border-t border-term-border p-2 sm:p-4 shrink-0">
          <div className="flex gap-2">
            <span className="hidden sm:flex items-center text-term-prompt text-base shrink-0">$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="ask anything..."
              className="flex-1 border border-term-border bg-term-bg px-3 py-2 text-base text-term-text placeholder:text-term-dim focus:outline-none focus:border-term-accent"
              disabled={isLoading}
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isLoading}
              className="btn-primary px-3 sm:px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <Send size={16} />
              )}
            </button>
          </div>
          <p className="text-sm text-term-dim mt-2 hidden sm:block">
            enter to send · ai assistant for professional background questions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
