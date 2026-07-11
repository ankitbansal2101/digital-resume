import React, { useEffect } from 'react';

const AGENT_ID = 'agent_1601kpjdm552ed2b0ea0c9h0egfx';
const SCRIPT_SRC = 'https://unpkg.com/@elevenlabs/convai-widget-embed';

const ElevenLabsConvai: React.FC = () => {
  useEffect(() => {
    if (document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
      return;
    }

    const script = document.createElement('script');
    script.src = SCRIPT_SRC;
    script.async = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);
  }, []);

  return (
    <elevenlabs-convai
      agent-id={AGENT_ID}
      variant="compact"
      placement="bottom-right"
      className="convai-embed"
      action-text="Talk to Ankit"
      start-call-text="Start voice chat"
      end-call-text="End call"
    />
  );
};

export default ElevenLabsConvai;
