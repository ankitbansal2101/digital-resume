import React, { useState, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-term-border px-5 sm:px-6 py-4">
        <div>
          <h3 className="text-term-accent text-base sm:text-lg font-semibold">
            {title} {highlight}
          </h3>
          <p className="text-xs text-term-dim mt-0.5">
            {items.length} {items.length === 1 ? itemLabel : `${itemLabel}s`}
          </p>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto">
          <span className="text-xs text-term-dim tabular-nums mr-1">
            {index + 1} / {items.length}
          </span>
          <button
            onClick={prev}
            className="btn-secondary px-2 py-1.5"
            aria-label="Previous project"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={next}
            className="btn-secondary px-2 py-1.5"
            aria-label="Next project"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="px-4 sm:px-6 py-6">
        <ProjectCard item={current} />

        <div className="mt-5 flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {items.map((item, i) => (
            <button
              key={item.id}
              onClick={() => setIndex(i)}
              className={`shrink-0 border px-3 py-2 text-left transition-colors max-w-[220px] ${
                i === index
                  ? 'border-term-accent text-term-accent bg-term-elevated'
                  : 'border-term-border text-term-muted hover:border-term-accent hover:text-term-accent'
              }`}
            >
              <p className="text-xs font-semibold truncate">{item.title}</p>
              <p className="text-[10px] truncate mt-0.5 opacity-70">{item.subtitle}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCarousel;
