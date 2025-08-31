import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Github, GraduationCap, Users, Bot, Sparkles, Code, Award, Star, TrendingUp } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 'the-coding-live',
      title: 'The Coding Live',
      subtitle: 'Founder · EdTech Initiative',
      period: '2020 – 2023',
      description: 'Built and scaled an online tutoring platform connecting students globally with personalized coding instruction.',
      achievements: [
        'Founded and scaled a 1-on-1 tutoring platform, building a team of 5+ expert tutors',
        'Trained 500+ students from 10+ countries in web development and data science',
        'Built custom platform features for scheduling, progress tracking, and personalized learning paths',
        'Managed end-to-end operations including tutor onboarding and curriculum development'
      ],
      metrics: [
        { label: 'Students Trained', value: '500+', icon: <Users className="text-blue-600" size={16} /> },
        { label: 'Countries', value: '10+', icon: <TrendingUp className="text-green-600" size={16} /> },
        { label: 'Team Size', value: '5+', icon: <Users className="text-purple-600" size={16} /> }
      ],
      tags: ['EdTech', 'Platform', 'Tutoring', 'Team Building', 'Operations'],
      gradient: 'from-blue-500 to-indigo-600',
      icon: <GraduationCap className="text-white" size={24} />,
      size: 'large',
      link: null,
      github: null
    },
    {
      id: 'pmranker',
      title: 'PMRanker',
      subtitle: 'Founder · Side Project',
      period: '2025 – Present',
      description: 'A platform for aspiring PMs to solve real-world product challenges and get AI-powered feedback.',
      achievements: [
        'Designed and built a platform for aspiring PMs to solve real-world product challenges',
        'Created over 50 scenario-based prompts and built features like public submission portfolios',
        'Attracted 250+ users organically in the first month through product communities',
        'Currently building admin panel and evaluation tools to onboard mentors and reviewers'
      ],
      metrics: [
        { label: 'Users', value: '250+', icon: <Users className="text-green-600" size={16} /> },
        { label: 'Challenges', value: '50+', icon: <Code className="text-blue-600" size={16} /> },
        { label: 'Growth', value: 'Organic', icon: <TrendingUp className="text-purple-600" size={16} /> }
      ],
      tags: ['Product Management', 'Platform', 'Community', 'AI Feedback', 'Startup'],
      gradient: 'from-purple-500 to-pink-600',
      icon: <Sparkles className="text-white" size={24} />,
      size: 'medium',
      link: 'https://pmranker.com/',
      github: 'https://github.com/ankitbansal2101/PMRank'
    },
    {
      id: 'rag-chatbot',
      title: 'Customer Support Chatbot',
      subtitle: 'POC · Side Project',
      period: '2025 – Present',
      description: 'An AI-powered chatbot using Retrieval-Augmented Generation (RAG) to answer product documentation and support queries in real-time.',
      achievements: [
        'Scoped and led development of an end-to-end RAG chatbot using Langchain and OpenAI',
        'Integrated OpenAI with a custom vector store to retrieve answers from uploaded documentation',
        'Improved trial user onboarding experience by reducing dependency on manual support',
        'Used LangChain and OpenAI APIs to generate accurate, context-aware answers'
      ],
      metrics: [
        { label: 'AI Integration', value: 'RAG', icon: <Bot className="text-blue-600" size={16} /> },
        { label: 'Support Reduction', value: '40%', icon: <TrendingUp className="text-green-600" size={16} /> },
        { label: 'Response Time', value: 'Real-time', icon: <Sparkles className="text-purple-600" size={16} /> }
      ],
      tags: ['AI/ML', 'RAG', 'Chatbot', 'LangChain', 'OpenAI', 'Customer Support'],
      gradient: 'from-emerald-500 to-teal-600',
      icon: <Bot className="text-white" size={24} />,
      size: 'medium',
      link: 'https://github.com/ankitbansal2101/Skychat',
      github: 'https://github.com/ankitbansal2101/Skychat'
    }
  ];

  const certifications = [
    {
      id: 'data-science',
      title: 'Data Science Certification',
      subtitle: 'Python and R – Dimensionless Technologies',
      icon: <Code className="text-blue-600" size={20} />,
      link: 'https://drive.google.com/file/d/0B9Mo5_VWtsqjZVdQdmd4ZjByaHFxY1pXS29LYmg2UGtISWJF/view?usp=drive_link&resourcekey=0-9Xn_cfUXTStNro1BM7x7Gw'
    },
    {
      id: 'hackerrank',
      title: '5⭐ HackerRank',
      subtitle: 'Python & SQL Excellence',
      icon: <Star className="text-yellow-500" size={20} />,
      link: 'https://www.hackerrank.com/profile/ankitbbb162'
    },
    {
      id: 'freelance',
      title: 'Freelance Product Work',
      subtitle: 'Gerald Technologies (Insurance POC)',
      icon: <Award className="text-green-600" size={20} />,
      link: null
    },
    {
      id: 'community',
      title: 'Community Contributor',
      subtitle: 'Product Hunt & Indie Hackers',
      icon: <Users className="text-purple-600" size={20} />,
      link: null
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const hoverVariants = {
    hover: { 
      scale: 1.02,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  // Grid layout configuration
  const getGridClass = (size: string) => {
    switch (size) {
      case 'large':
        return 'col-span-1 md:col-span-2';
      case 'medium':
        return 'col-span-1';
      default:
        return 'col-span-1';
    }
  };

  return (
    <motion.section 
      id="projects" 
      className="scroll-mt-20 py-6 sm:py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-full mx-auto px-2 sm:px-4 lg:px-6">
        {/* Header */}
        <motion.div 
          className="text-center mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Projects &
            <span className="ml-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Initiatives
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From EdTech platforms to AI-powered solutions, here are the projects that showcase my product thinking and execution skills.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`${getGridClass(project.size)} group`}
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div
                className="h-full bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden relative"
                variants={hoverVariants}
              >
                {/* Gradient Header */}
                <div className={`bg-gradient-to-br ${project.gradient} p-6 sm:p-8 text-white relative overflow-hidden`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white transform translate-x-16 -translate-y-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white transform -translate-x-12 translate-y-12"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold mb-2 leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-white/90 font-medium mb-2">{project.subtitle}</p>
                        <div className="flex items-center gap-1 text-white/80">
                          <Calendar size={14} />
                          <span className="text-sm">{project.period}</span>
                        </div>
                      </div>
                      
                      {/* Project Icon */}
                      <motion.div
                        className="bg-white/20 backdrop-blur-sm rounded-xl p-3"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        {project.icon}
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 flex-1 flex flex-col">
                  <p className="text-gray-700 mb-4 leading-relaxed text-xs sm:text-sm">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  {project.metrics && (
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {project.metrics.map((metric, idx) => (
                        <motion.div 
                          key={idx} 
                          className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-2 text-center"
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="flex items-center justify-center mb-1">
                            {metric.icon}
                          </div>
                          <div className="font-bold text-sm text-gray-900">{metric.value}</div>
                          <div className="text-xs text-gray-600">{metric.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Key Achievements */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Achievements</h4>
                    <ul className="space-y-1">
                      {project.achievements.slice(0, project.size === 'large' ? 4 : 3).map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                          <motion.span 
                            className="text-green-500 mt-0.5 font-bold"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5 + idx * 0.1 }}
                          >
                            ✓
                          </motion.span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.slice(0, project.size === 'large' ? project.tags.length : 4).map((tag, idx) => (
                      <motion.span
                        key={idx}
                        className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                    {project.size !== 'large' && project.tags.length > 4 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-auto">
                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1 bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors text-xs font-medium"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ExternalLink size={12} />
                        View
                      </motion.a>
                    )}
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1 bg-gray-100 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors text-xs font-medium"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Github size={12} />
                        GitHub
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications & Achievements */}
        <motion.div 
          className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 sm:p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">
            Certifications & 
            <span className="ml-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Achievements
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-3">
                  <div className="bg-white rounded-lg p-2 shadow-sm">
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm">{cert.title}</h4>
                    <p className="text-gray-600 text-xs mb-2">{cert.subtitle}</p>
                    {cert.link && (
                      <motion.a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-xs font-medium"
                        whileHover={{ scale: 1.05 }}
                      >
                        View Certificate
                        <ExternalLink size={10} />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
