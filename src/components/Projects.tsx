import React from 'react';
import { ExternalLink, Calendar, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'The Coding Live',
      subtitle: 'Founder · EdTech Initiative',
      period: '2020 – 2023',
      description: 'Built and scaled an online tutoring platform connecting students globally with personalized coding instruction.',
      achievements: [
        'Founded and scaled a 1-on-1 tutoring platform, building a team of 5+ expert tutors specializing in web development and data science',
        'Personally delivered Python tutoring sessions and curriculum design, establishing teaching methodologies adopted across the team',
        'Trained 500+ students from 10+ countries in web development, data science, and programming fundamentals',
        'Built custom platform features for scheduling, progress tracking, and personalized learning paths',
        'Managed end-to-end operations including tutor onboarding, student acquisition, and curriculum development'
      ],
      link: null,
      github: null
    },
    {
      title: 'PMRanker',
      subtitle: 'Founder · Side Project',
      period: '2025 – Present',
      description: 'A platform for aspiring PMs to solve real-world product challenges and get AI-powered feedback.',
      achievements: [
        'Designed and built a platform for aspiring PMs to solve real-world product challenges',
        'Created over 50 scenario-based prompts and built features like public submission portfolios and leaderboards',
        'Attracted 250+ users organically in the first month through product communities and LinkedIn outreach',
        'Currently building admin panel and evaluation tools to onboard mentors and reviewers'
      ],
      link: 'https://pmranker.com/',
      github: 'https://github.com/ankitbansal2101/PMRank'
    },

    {
  title: 'Customer Support Chatbot',
  subtitle: 'POC · Side Project',
  period: '2025 – Present',
  description: 'An AI-powered chatbot using Retrieval-Augmented Generation (RAG) to answer product documentation and support queries in real-time.',
  achievements: [
    'Scoped and led development of an end-to-end RAG chatbot using Langchain and OpenAI to improve product self-service support',
    'Integrated OpenAI with a custom vector store to retrieve answers from uploaded product documentation',
    'Improved trial user onboarding experience by reducing dependency on manual support',
    'Used LangChain and OpenAI APIs to generate accurate, context-aware answers from PDF/text sources'
   
  ],
  link: 'https://github.com/ankitbansal2101/Skychat', // Replace with actual demo or doc link if available
  github: 'https://github.com/ankitbansal2101/Skychat' // Replace with actual RAG repo if different
}


    
  ];

  const certifications = [
    {
      label: 'Data Science using Python and R – Dimensionless Technologies',
      link: 'https://drive.google.com/file/d/0B9Mo5_VWtsqjZVdQdmd4ZjByaHFxY1pXS29LYmg2UGtISWJF/view?usp=drive_link&resourcekey=0-9Xn_cfUXTStNro1BM7x7Gw' // example link
    },
    {
      label: 'Freelance Product/Data Work – Gerald Technologies (Insurance product POC)',
      link: null
    },
    {
      label: '5⭐ in Python & SQL on HackerRank',
      link: 'https://www.hackerrank.com/profile/ankitbbb162'
    },
    {
      label: 'Active contributor to Product Hunt & Indie Hackers communities',
      link: ''
    }
  ];

  return (
    <section id="projects" className="scroll-mt-20">
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Projects & Initiatives
        </h2>
        
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="border-l-4 border-green-500 pl-6">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                  <h4 className="text-green-600 font-medium">{project.subtitle}</h4>
                </div>
                <div className="flex items-center gap-2 text-gray-600 text-sm mt-2 lg:mt-0">
                  <Calendar size={14} />
                  <span>{project.period}</span>
                </div>
              </div>

              <p className="text-gray-700 mb-4">{project.description}</p>

              <ul className="space-y-2 mb-4">
                {project.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              <div className="flex gap-3">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 border border-gray-400 text-gray-700 text-sm px-4 py-1 rounded hover:bg-gray-100 transition"
                  >
                    <ExternalLink size={14} />
                    View Project
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 border border-gray-400 text-gray-700 text-sm px-4 py-1 rounded hover:bg-gray-100 transition"
                  >
                    <Github size={14} />
                    GitHub Repo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Certifications & Achievements
          </h3>
          <div className="bg-gray-50 rounded-lg p-6">
            <ul className="space-y-3">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-700">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  {cert.link ? (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-800 hover:underline"
                    >
                      {cert.label}
                    </a>
                  ) : (
                    <span className="text-sm">{cert.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
