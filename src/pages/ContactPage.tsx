import React from 'react';
import TerminalCursor from '../components/ui/TerminalCursor';

const contactItems = [
  {
    icon: '📧',
    label: 'Email',
    href: 'mailto:ankitbbb162@gmail.com',
    text: 'ankitbbb162@gmail.com',
  },
  {
    icon: '📱',
    label: 'Phone',
    href: 'https://wa.me/918875519489',
    text: '+91 8875519489',
    external: true,
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    href: 'https://in.linkedin.com/in/ankitbansal2101',
    text: 'linkedin.com/in/ankitbansal2101',
    external: true,
  },
  {
    icon: '🐙',
    label: 'GitHub',
    href: 'https://github.com/ankitbansal2101',
    text: 'github.com/ankitbansal2101',
    external: true,
  },
  {
    icon: '📄',
    label: 'Resume',
    href: '/Ankit_Bansal_PM_2026.pdf',
    text: 'Ankit_Bansal_PM_2026.pdf',
    external: true,
  },
  {
    icon: '📍',
    label: 'Location',
    text: 'Mumbai, India',
  },
];

const ContactPage: React.FC = () => {
  return (
    <article>
      <p>
        <span className="terminal-prompt">$</span> whoami Ankit Bansal
      </p>

      <p className="mt-6">
        <span className="terminal-prompt">$</span> contact -list
      </p>

      {contactItems.map((item) => (
        <p key={item.label} className="mt-2">
          {item.icon} {item.label}:{' '}
          {item.href ? (
            <a
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
            >
              {item.text}
            </a>
          ) : (
            item.text
          )}
        </p>
      ))}

      <p className="mt-8">
        <span className="terminal-prompt">$</span> echo &quot;Feel free to reach out for
        collaborations, opportunities, or just to say hi!&quot;
      </p>

      <p className="mt-12 text-term-prompt">
        <TerminalCursor />
      </p>
    </article>
  );
};

export default ContactPage;
