import React from 'react';
import { motion } from 'framer-motion';

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
  align = 'center',
}) => {
  const isCenter = align === 'center';

  return (
    <motion.div
      className={`mb-8 sm:mb-10 ${isCenter ? 'text-center' : 'text-left'}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={`inline-flex flex-col ${isCenter ? 'items-center' : 'items-start'}`}>
        <span className="mb-3 inline-block rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-600">
          {eyebrow || title.split(' ')[0]}
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
          {highlight ? (
            <>
              {title}{' '}
              <span className="gradient-text">{highlight}</span>
            </>
          ) : (
            title
          )}
        </h2>
        {subtitle && (
          <p
            className={`mt-3 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600 ${
              isCenter ? 'mx-auto' : ''
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default SectionHeader;
