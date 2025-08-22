import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="scroll-mt-20">
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Education
        </h2>
        
        <div className="border-l-4 border-purple-600 pl-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <GraduationCap className="text-purple-600" size={24} />
            </div>
            <div className="flex-1">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    B.Tech – Civil Engineering
                  </h3>
                  <h4 className="text-purple-600 font-medium">
                    Punjab Engineering College, Chandigarh
                  </h4>
                </div>
                <div className="flex items-center gap-2 text-gray-600 text-sm mt-2 lg:mt-0">
                  <Calendar size={14} />
                  <span>May 2021</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;