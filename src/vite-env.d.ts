/// <reference types="vite/client" />

declare namespace JSX {
  interface IntrinsicElements {
    'elevenlabs-convai': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      'agent-id'?: string;
      'action-text'?: string;
      'start-call-text'?: string;
      'end-call-text'?: string;
      variant?: string;
      placement?: string;
      className?: string;
    };
  }
}
