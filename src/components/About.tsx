import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Target, Sparkles, Lightbulb } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';

const slides = [
  {
    title: 'Product Leader',
    icon: Target,
    accent: 'from-cream-100 via-brand-50 to-cream-200',
    content:
      'Strategic and execution-focused Product Manager with 4+ years building B2B SaaS products across proptech, aerospace, fintech, and utilities. Proven track record managing the full product lifecycle, from on-site client discovery to delivery, while working cross-functionally with design, engineering, QA, and business teams.',
  },
  {
    title: 'AI Innovator',
    icon: Sparkles,
    accent: 'from-brand-50 via-cream-100 to-brand-100',
    content:
      'Passionate about emerging AI and its impact on product innovation. I explore generative AI, RAG-based chatbots, and modern prototyping tools, building side hustles that deepen technical understanding and inform sharper product decisions.',
  },
  {
    title: 'Impact Driver',
    icon: Lightbulb,
    accent: 'from-cream-200 via-brand-100 to-cream-100',
    content:
      'I transform complex business challenges into elegant product solutions. Whether improving onboarding flows, shipping AI-powered features, or launching new modules, I focus on data-driven decisions and user-centric design to deliver measurable impact.',
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
  const Icon = slide.icon;

  return (
    <section id="about" className="scroll-mt-24">
      <SectionHeader
        eyebrow="About"
        title="Who"
        highlight="I Am"
        subtitle="Product strategist, AI enthusiast, and builder, focused on shipping products that move the needle."
      />

      <div className="section-card overflow-hidden">
        <div className="relative min-h-[340px] sm:min-h-[380px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className={`absolute inset-0 bg-gradient-to-br ${slide.accent} p-8 sm:p-10`}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute inset-0 hero-grid opacity-20" />
              <div className="absolute top-0 right-0 h-64 w-64 translate-x-1/3 -translate-y-1/3 rounded-full bg-brand-200/30 blur-2xl" />

              <div className="relative z-10 flex h-full flex-col justify-center">
                <div className="mx-auto max-w-3xl text-center">
                  <motion.div
                    className="mb-5 inline-flex rounded-2xl border border-brand-200/60 bg-cream-50/80 p-4 shadow-sm"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                  >
                    <Icon size={28} className="text-brand-700" />
                  </motion.div>

                  <motion.h3
                    className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-brand-950"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.4 }}
                  >
                    {slide.title}
                  </motion.h3>

                  <motion.p
                    className="mt-4 text-sm sm:text-base leading-relaxed text-stone-600"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                  >
                    {slide.content}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-brand-200/80 bg-cream-50/90 p-2.5 text-brand-700 shadow-sm transition-colors hover:bg-brand-50"
            aria-label="Previous slide"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-brand-200/80 bg-cream-50/90 p-2.5 text-brand-700 shadow-sm transition-colors hover:bg-brand-50"
            aria-label="Next slide"
          >
            <ChevronRight size={18} />
          </button>

          <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'w-8 bg-brand-700' : 'w-1.5 bg-brand-300 hover:bg-brand-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="absolute bottom-0 left-0 right-0 z-20 h-0.5 bg-brand-200/50">
            <motion.div
              className="h-full bg-brand-600"
              initial={{ width: '0%' }}
              animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
