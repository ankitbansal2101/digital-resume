import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Associate Product Manager 2',
      company: 'Asteria Aerospace',
      location: 'Bangalore - Remote',
      period: 'Jan 2025 – Present',
      achievements: [
        'Redesigned onboarding flow for trial users based on drop-off data and interviews, resulting in a 7% increase in trial-to-paid conversion',
        'Launched a Drone Log Analysis feature that parses telemetry, detects patterns, and flags anomalies—helping acquire users previously reliant on third-party tools',
        'Built quick prototypes and POCs to help dev and design teams validate concepts before full development cycles',
        'Initiated AI feature development including annotation summaries using LLM and RAG chatbot to reduce customer time spent manually reviewing product documentation and PDFs',
        'Collaborated across design, QA, and engineering to ship three telemetry-based enhancements aligned with user-reported needs',
        'Drove backlog grooming, sprint planning, and post-launch feedback loops'
      ]
    },
    {
      title: 'Senior Product Analyst',
      company: 'iPaySmart',
      location: 'Noida',
      period: 'Jan 2023 – Jan 2025',
      achievements: [
        'Spearheaded the launch of a landlord-focused property payments module, adopted by 4 enterprise clients within the first 6 months',
        'Conceptualized and shipped a Smart Revenue Recovery feature for utility clients, enabling admin teams to generate AI-driven customer segments and launch notification campaigns—leading to improved on-time revenue collection',
        'Led backlog management and sprint ceremonies using Jira, improving delivery consistency and reducing QA rework',
        'Created Power BI dashboards using SQL to monitor reconciliation anomalies and guide operations',
        'Supported go-to-market efforts by creating playbooks and training content for sales and delivery teams',
        'Translated recurring support queries into product fixes, reducing low-priority tickets by 20%'
      ]
    },
    {
      title: 'Product Analyst',
      company: 'Smart Energy Water',
      location: 'Noida',
      period: 'Jul 2021 – Jan 2023',
      achievements: [
        'Managed payments product enhancements for global energy clients; improved module stability and responsiveness',
        'Delivered 6 large-scale client deployments, ensuring requirements alignment, QA coordination, and timely rollout',
        'Owned Confluence-based ticket dashboards to increase visibility of issue resolution SLAs across support and engineering',
        'Transformed an underutilized post-paid module into a prepaid billing solution that secured 4 client wins within 6 months',
        'Created wireframes, business cases, and presented features with sales leads to influence buying decisions',
        'Facilitated retrospectives and cross-functional meetings to resolve delivery blockers'
      ]
    },
    {
      title: 'Business Analyst Intern',
      company: 'Collegedunia',
      location: 'Gurgaon',
      period: 'Jan 2020 – Jun 2020',
      achievements: [
        'Led web scraping and data extraction projects to enrich database with 1200+ verified college listings',
        'Built automation scripts to monitor admission portals and speed up content updates',
        'Delivered dashboards and reports to guide editorial and SEO efforts with data-driven insights'
      ]
    }
  ];

  return (
    <section id="experience" className="scroll-mt-20">
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Work Experience
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-4 border-blue-600 pl-6">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{exp.title}</h3>
                  <h4 className="text-blue-600 font-medium">{exp.company}</h4>
                </div>
                <div className="flex flex-col lg:items-end gap-1 mt-2 lg:mt-0">
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <MapPin size={14} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;