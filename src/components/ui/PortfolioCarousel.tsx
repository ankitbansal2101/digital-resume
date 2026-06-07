import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Briefcase, Rocket } from 'lucide-react';
import ProjectCard, { ProjectCardItem } from './ProjectCard';

interface PortfolioCarouselProps {
  title: string;
  highlight: string;
  items: ProjectCardItem[];
  variant?: 'company' | 'hustle';
  autoPlayMs?: number;
}

const PortfolioCarousel: React.FC<PortfolioCarouselProps> = ({
  title,
  highlight,
  items,
  variant = 'company',
  autoPlayMs = 8000,
}) => {
  const [index, setIndex] = useState(0);
  const Icon = variant === 'company' ? Briefcase : Rocket;
  const itemLabel = variant === 'company' ? 'project' : 'hustle';

  const goTo = useCallback(
    (next: number) => {
      setIndex((next + items.length) % items.length);
    },
    [items.length]
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (items.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, autoPlayMs);
    return () => clearInterval(timer);
  }, [autoPlayMs, items.length]);

  if (!items.length) return null;

  const current = items[index];

  return (
    <div className="section-card overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-100 px-5 sm:px-6 py-4 bg-slate-50/50">
        <div className="flex items-center gap-3">
          <div className="rounded-xl border border-brand-100 bg-brand-50 p-2.5 text-brand-600">
            <Icon size={18} />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              {title} <span className="gradient-text">{highlight}</span>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              {items.length} {items.length === 1 ? itemLabel : `${itemLabel}s`}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto">
          <span className="text-xs font-medium text-slate-500 tabular-nums mr-1">
            {index + 1} / {items.length}
          </span>
          <button
            onClick={prev}
            className="rounded-xl border border-slate-200 bg-white p-2 text-slate-600 transition-colors hover:border-brand-200 hover:text-brand-600"
            aria-label="Previous project"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="rounded-xl border border-slate-200 bg-white p-2 text-slate-600 transition-colors hover:border-brand-200 hover:text-brand-600"
            aria-label="Next project"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="relative px-4 sm:px-6 py-6 sm:py-8">
        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -32 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard item={current} />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {items.map((item, i) => (
            <button
              key={item.id}
              onClick={() => setIndex(i)}
              className={`shrink-0 rounded-xl border px-3 py-2 text-left transition-all duration-200 max-w-[220px] ${
                i === index
                  ? 'border-brand-300 bg-brand-50 shadow-sm'
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <p className="text-xs font-semibold text-slate-900 truncate">{item.title}</p>
              <p className="text-[10px] text-slate-500 truncate mt-0.5">{item.subtitle}</p>
            </button>
          ))}
        </div>

        <div className="mt-4 flex justify-center gap-1.5">
          {items.map((item, i) => (
            <button
              key={item.id}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? 'w-8 bg-brand-600' : 'w-1.5 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to ${item.title}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCarousel;
