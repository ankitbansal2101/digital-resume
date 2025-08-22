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
            Deeply passionate about emerging technologies and the future of product development. Actively explore trending AI innovations—including generative AI, RAG-based chatbots, and low-code/no-code tools like Cursor, Bolt, Lovable, and n8n—using agent programming to build quick side projects and understand tech in more detail.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;