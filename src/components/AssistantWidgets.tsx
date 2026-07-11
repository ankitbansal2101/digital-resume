import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Bot, MessageSquare } from 'lucide-react';
import ElevenLabsConvai from './ElevenLabsConvai';

interface AssistantWidgetsProps {
  onOpenChat: () => void;
}

const GAP = 10;
const FALLBACK_RIGHT = 8;
const FALLBACK_BOTTOM = 88;

const getVoiceCompactSheet = () => {
  const widget = document.querySelector('elevenlabs-convai.convai-embed');
  if (!widget?.shadowRoot) return null;

  return widget.shadowRoot.querySelector('.rounded-compact-sheet');
};

const AssistantWidgets: React.FC<AssistantWidgetsProps> = ({ onOpenChat }) => {
  const [dock, setDock] = useState({ right: FALLBACK_RIGHT, bottom: FALLBACK_BOTTOM });

  useEffect(() => {
    const measure = () => {
      const sheet = getVoiceCompactSheet();
      if (!sheet) return;

      const rect = sheet.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) return;

      setDock({
        right: Math.max(0, Math.round(window.innerWidth - rect.right)),
        bottom: Math.max(0, Math.round(window.innerHeight - rect.top + GAP)),
      });
    };

    let resizeObserver: ResizeObserver | null = null;
    let mutationObserver: MutationObserver | null = null;

    const attach = () => {
      const widget = document.querySelector('elevenlabs-convai.convai-embed');
      if (!widget?.shadowRoot) return false;

      resizeObserver?.disconnect();
      mutationObserver?.disconnect();

      resizeObserver = new ResizeObserver(measure);
      resizeObserver.observe(widget);

      mutationObserver = new MutationObserver(measure);
      mutationObserver.observe(widget.shadowRoot, { childList: true, subtree: true });

      measure();
      return true;
    };

    measure();
    window.addEventListener('resize', measure);

    if (!attach()) {
      const poll = window.setInterval(() => {
        if (attach()) window.clearInterval(poll);
      }, 250);

      return () => {
        window.clearInterval(poll);
        resizeObserver?.disconnect();
        mutationObserver?.disconnect();
        window.removeEventListener('resize', measure);
      };
    }

    return () => {
      resizeObserver?.disconnect();
      mutationObserver?.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  return createPortal(
    <>
      <div
        className="chat-compact-fixed"
        style={{ right: `${dock.right}px`, bottom: `${dock.bottom}px` }}
      >
        <div className="compact-assistant-sheet">
          <div className="compact-assistant-avatar-wrap" aria-hidden="true">
            <div className="compact-assistant-avatar-ring" />
            <div className="compact-assistant-avatar-inner">
              <Bot size={16} strokeWidth={2.25} />
            </div>
          </div>

          <button
            type="button"
            className="compact-assistant-action"
            onClick={onOpenChat}
            aria-label="Ankit's Text AI"
          >
            <MessageSquare className="compact-assistant-action-icon" size={16} strokeWidth={2.25} />
            <span className="compact-assistant-action-label">Ankit&apos;s Text AI</span>
          </button>
        </div>
      </div>

      <ElevenLabsConvai />
    </>,
    document.body,
  );
};

export default AssistantWidgets;
