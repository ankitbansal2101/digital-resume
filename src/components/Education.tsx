import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';

const Education = () => {
  return (
    <section id="education" className="scroll-mt-24">
      <SectionHeader
        eyebrow="Education"
        title="Education &"
        highlight="Background"
        subtitle="Strong analytical foundation with a pivot into product management and technology."
      />

      <div className="section-card p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <GraduationCap className="text-term-accent shrink-0 mt-1" size={20} />
          <div className="flex-1">
            <h3 className="text-term-text text-lg font-semibold">
              B.Tech – Civil Engineering
            </h3>
            <p className="mt-1 text-term-accent">
              Punjab Engineering College, Chandigarh
            </p>
            <div className="mt-3 inline-flex items-center gap-2 text-term-muted text-sm">
              <Calendar size={14} />
              <span>May 2021</span>
            </div>
            <p className="mt-4 text-term-muted text-sm leading-relaxed border-t border-term-border pt-4">
              Engineering background that sharpened analytical thinking, structured
              problem-solving, and the ability to break down complex systems, skills
              that translate directly into product management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
