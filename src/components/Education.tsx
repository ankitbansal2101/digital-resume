import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import ScrollReveal from './ui/ScrollReveal';

const Education = () => {
  return (
    <section id="education" className="scroll-mt-24">
      <SectionHeader
        eyebrow="Education"
        title="Education &"
        highlight="Background"
        subtitle="Strong analytical foundation with a pivot into product management and technology."
      />

      <ScrollReveal>
        <div className="section-card p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-brand-100 bg-brand-50">
              <GraduationCap className="text-brand-600" size={26} />
            </div>

            <div className="flex-1">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-brand-950">
                    B.Tech – Civil Engineering
                  </h3>
                  <p className="mt-1 text-brand-600 font-medium">
                    Punjab Engineering College, Chandigarh
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-cream-100 px-3 py-1.5 text-sm text-stone-600 self-start">
                  <Calendar size={14} />
                  <span>May 2021</span>
                </div>
              </div>

              <div className="mt-5 flex items-start gap-3 rounded-xl border border-brand-100 bg-cream-100/80 p-4">
                <Award size={18} className="text-brand-500 mt-0.5 shrink-0" />
                <p className="text-sm leading-relaxed text-stone-600">
                  Engineering background that sharpened analytical thinking, structured
                  problem-solving, and the ability to break down complex systems, skills
                  that translate directly into product management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Education;
