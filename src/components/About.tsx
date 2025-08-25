import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Product Manager",
      content: "Strategic and execution-focused Product Manager with 4+ years of experience building B2B SaaS products across aerospace, fintech, and utilities. Proven track record in managing full product lifecycle—from discovery to delivery—while working cross-functionally with design, engineering, QA, and business teams."
    },
    {
      title: "Tech Explorer",
      content: "Passionate about emerging technologies and their impact on product innovation. I actively explore cutting-edge AI developments—from generative AI and RAG-based chatbots to modern low-code/no-code platforms like Cursor, Bolt, Lovable, and n8n. Through hands-on experimentation with agent programming and rapid prototyping, I build side projects that deepen my technical understanding and inform better product decisions."
    },
    {
      title: "Problem Solver",
      content: "I thrive on transforming complex business challenges into elegant product solutions. Whether it's improving user onboarding flows, building AI-powered features, or launching new product modules, I focus on data-driven decisions and user-centric design to deliver measurable impact."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="scroll-mt-20">
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Who Am I?
        </h2>
        
        <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 min-h-[300px]">
          {/* Carousel Content */}
          <div className="flex items-center justify-between h-full">
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
            >
              <ChevronLeft className="text-gray-600" size={20} />
            </button>

            <div className="flex-1 px-12">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {slides[currentSlide].title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {slides[currentSlide].content}
                </p>
              </div>
            </div>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
            >
              <ChevronRight className="text-gray-600" size={20} />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;