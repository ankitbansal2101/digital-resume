import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';

const slides = [
  {
    title: 'product leader',
    content:
      'Strategic and execution-focused Product Manager with 5+ years building B2B SaaS products across proptech, aerospace, fintech, and utilities. Proven track record managing the full product lifecycle, from on-site client discovery to delivery.',
  },
  {
    title: 'ai innovator',
    content:
      'Passionate about emerging AI and its impact on product innovation. I explore generative AI, RAG-based chatbots, and modern prototyping tools, building side hustles that deepen technical understanding and inform sharper product decisions.',
  },
  {
    title: 'impact driver',
    content:
      'I transform complex business challenges into elegant product solutions. Whether improving onboarding flows, shipping AI-powered features, or launching new modules, I focus on data-driven decisions and user-centric design.',
  },
];

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const slide = slides[currentSlide];

  return (
    <section id="about" className="scroll-mt-24">
      <SectionHeader
        eyebrow="About"
        title="Who"
        highlight="I Am"
        subtitle="Product strategist, AI enthusiast, and builder, focused on shipping products that move the needle."
      />

      <div className="section-card p-6 sm:p-8">
        <p className="text-term-dim text-xs mb-4">
          cat slide_{currentSlide + 1}.txt
        </p>
        <h3 className="text-term-accent text-lg font-semibold mb-4">{slide.title}</h3>
        <p className="text-term-muted leading-relaxed">{slide.content}</p>

        <div className="mt-6 flex items-center justify-between border-t border-term-border pt-4">
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="btn-secondary px-3 py-1.5"
              aria-label="Previous slide"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={nextSlide}
              className="btn-secondary px-3 py-1.5"
              aria-label="Next slide"
            >
              <ChevronRight size={16} />
            </button>
          </div>
          <span className="text-term-dim text-xs tabular-nums">
            {currentSlide + 1} / {slides.length}
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;
