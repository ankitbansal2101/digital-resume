import React from 'react';

const About = () => {
  return (
    <section id="about" className="scroll-mt-20">
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Professional Summary
        </h2>
        
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4">
            Strategic and execution-focused <strong>Product Manager</strong> with 4+ years of experience 
            building B2B SaaS products across aerospace, fintech, and utilities. Proven track record in 
            managing full product lifecycle—from discovery to delivery—while working cross-functionally 
            with design, engineering, QA, and business teams.
          </p>
          
          
          <p className="text-gray-700 leading-relaxed">
            Passionate about emerging technologies and their impact on product innovation. I actively explore cutting-edge AI developments—from generative AI and RAG-based chatbots to modern low-code/no-code platforms like Cursor, Bolt, Lovable, and n8n. Through hands-on experimentation with agent programming and rapid prototyping, I build side projects that deepen my technical understanding and inform better product decisions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;