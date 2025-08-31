import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Product Management',
      skills: [
        'Strategy & Roadmapping',
        'Agile/Scrum',
        'Stakeholder Management',
        'Requirements Gathering',
        'User Research',
        'Metrics & KPIs',
        'A/B Testing',
        'Prototyping',
        'Cross-functional Leadership'
      ]
    },
    {
      title: 'AI & Technical',
      skills: [
        'Generative AI',
        'RAG Applications',
        'Workflow Automation',
        'Python (Advanced)',
        'Machine Learning',
        'LLM Integrations',
        'Computer Vision',
        'Grounding DINO',
        'API Research'
      ]
    },
    {
      title: 'Data & Analytics',
      skills: [
        'SQL',
        'Product Analytics',
        'Excel',
        'Tableau',
        'Clarity',
        'Data-Driven Decisions',
        'Performance Metrics',
        'Business Intelligence'
      ]
    },
    {
      title: 'Collaboration & Tools',
      skills: [
        'Jira',
        'Confluence',
        'Figma',
        'Miro',
        'GitHub',
        'Notion',
        'Sprint Planning',
        'Backlog Management'
      ]
    }
  ];

  return (
    <section id="skills" className="scroll-mt-20">
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Skills
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
