import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Core Product Skills',
      skills: [
        'Product Strategy',
        'User Research',
        'Sprint Planning',
        'Agile & Scrum',
        'Roadmap Ownership',
        'Product Analytics',
        'A/B Testing',
        'GTM Enablement',
        'Cross-functional Collaboration'
      ]
    },
    {
      title: 'Tech & Tools',
      skills: [
        'Jira & Confluence',
        'SQL',
        'Python',
        'Tableau',
        'Wireframing',
        'RAG Chatbots',
        'AI Feature Scoping',
        'Drone Telemetry',
        'B2B SaaS · Fintech · Aerospace'
      ]
    }
  ];

  return (
    <section id="skills" className="scroll-mt-20">
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Skills
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
