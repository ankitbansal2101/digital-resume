import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: 'center' | 'left';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = 'left',
}) => {
  const heading = highlight ? `${title} ${highlight}` : title;
  const label = eyebrow || title.split(' ')[0];

  return (
    <div className={`mb-8 sm:mb-10 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <p className="text-term-dim text-xs mb-2">
        <span className="text-term-prompt">$</span> cd ./{label.toLowerCase()}
      </p>
      <h2 className="text-term-accent text-xl sm:text-2xl font-semibold tracking-tight">
        # {heading.toLowerCase()}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 max-w-2xl text-term-muted leading-relaxed ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {subtitle}
        </p>
      )}
      <div className="terminal-divider mt-5" />
    </div>
  );
};

export default SectionHeader;
