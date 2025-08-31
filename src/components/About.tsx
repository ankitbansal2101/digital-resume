import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles, Target, Lightbulb } from 'lucide-react';

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Product Manager",
      icon: <Target className="text-blue-600" size={32} />,
      gradient: "from-blue-500 to-purple-600",
      content: "Strategic and execution-focused Product Manager with 4+ years of experience building B2B SaaS products across aerospace, fintech, and utilities. Proven track record in managing full product lifecycle—from discovery to delivery—while working cross-functionally with design, engineering, QA, and business teams."
    },
    {
      title: "Tech Explorer",
      icon: <Sparkles className="text-purple-600" size={32} />,
      gradient: "from-purple-500 to-pink-600",
      content: "Passionate about emerging technologies and their impact on product innovation. I actively explore cutting-edge AI developments—from generative AI and RAG-based chatbots to modern low-code/no-code platforms like Cursor, Bolt, Lovable, and n8n. Through hands-on experimentation with agent programming and rapid prototyping, I build side projects that deepen my technical understanding and inform better product decisions."
    },
    {
      title: "Problem Solver",
      icon: <Lightbulb className="text-orange-600" size={32} />,
      gradient: "from-orange-500 to-red-600",
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
    <motion.section 
      id="about" 
      className="scroll-mt-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 overflow-hidden">
        <motion.h2 
          className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Who Am I?
        </motion.h2>
        
        <div className="relative rounded-2xl overflow-hidden min-h-[350px] sm:min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].gradient} p-6 sm:p-8 text-white`}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white transform translate-x-20 -translate-y-20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white transform -translate-x-16 translate-y-16"></div>
                <div className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full bg-white transform -translate-x-12 -translate-y-12"></div>
              </div>

              <div className="relative z-10 h-full flex flex-col justify-center">
                <div className="text-center">
                  <motion.div
                    className="flex justify-center mb-4 sm:mb-6"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      delay: 0.3,
                      type: "spring",
                      stiffness: 200,
                      damping: 15
                    }}
                  >
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                      {slides[currentSlide].icon}
                    </div>
                  </motion.div>

                  <motion.h3 
                    className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    {slides[currentSlide].title}
                  </motion.h3>

                  <motion.p 
                    className="text-white/90 leading-relaxed text-sm sm:text-lg max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    {slides[currentSlide].content}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <motion.button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="text-white" size={20} />
          </motion.button>

          <motion.button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="text-white" size={20} />
          </motion.button>

          {/* Slide Indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
            {slides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
            <motion.div
              className="h-full bg-white"
              initial={{ width: "0%" }}
              animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;