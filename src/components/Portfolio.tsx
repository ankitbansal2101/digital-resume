import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Github, GraduationCap, Users, Bot, Sparkles, Code, Award, Star, TrendingUp, Target, Zap, Brain, Database, Cpu, BarChart3 } from 'lucide-react';

interface PortfolioItem {
  id: string;
  title: string;
  subtitle: string;
  company?: string;
  period: string;
  description: string;
  achievements: string[];
  tags: string[];
  gradient: string;
  icon: React.ReactNode;
  size: 'small' | 'medium' | 'large';
  type: 'project' | 'case-study';
  metrics?: {
    label: string;
    value: string;
    icon: React.ReactNode;
  }[];
  aiTools?: {
    name: string;
    icon: React.ReactNode;
  }[];
  link?: string;
  github?: string;
}

interface Certification {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  link?: string;
}

const Portfolio: React.FC = () => {
  // Company Projects (Case Studies)
  const companyProjects: PortfolioItem[] = [
    {
      id: 'asteria-rag-chatbot',
      title: 'AI-Powered RAG Chatbot',
      subtitle: 'Product@Asteria Aerospace',
      company: 'Asteria Aerospace',
      period: 'Jan 2025 - Present',
      description: 'Built and deployed an AI-powered chatbot using RAG trained on SkyDeck\'s help documentation, reducing support queries by 40%, accelerating user learning, and decreasing trial churn by 12%.',
      achievements: [
        'Reduced support query volume by 40%',
        'Decreased trial churn by 12%',
        'Accelerated user learning and onboarding process',
        'Improved overall customer experience and satisfaction'
      ],
      tags: ['RAG Applications', 'Generative AI', 'Customer Support', 'LLM Integration', 'Chatbot', 'Product Strategy'],
      size: 'medium',
      gradient: 'from-blue-500 to-blue-600',
      icon: <Bot className="text-white" size={24} />,
      type: 'case-study',
      aiTools: [
        { name: 'RAG', icon: <Brain className="text-white" size={20} /> },
        { name: 'LLM', icon: <Bot className="text-white" size={20} /> },
        { name: 'Vector DB', icon: <Database className="text-white" size={20} /> }
      ],
      metrics: [
        { label: 'Support Queries', value: '-40%', icon: <TrendingUp className="text-blue-600" size={16} /> },
        { label: 'Trial Churn', value: '-12%', icon: <Users className="text-blue-600" size={16} /> },
        { label: 'User Learning', value: 'Accelerated', icon: <Target className="text-blue-600" size={16} /> }
      ]
    },
    {
      id: 'ai-object-detection',
      title: 'AI Object Detection & Smart Summaries',
      subtitle: 'Product@Asteria Aerospace',
      company: 'Asteria Aerospace',
      period: 'Jan 2025 - Present',
      description: 'Ideated and launched automated AI object detection using Grounding DINO and automated smart summaries using LLM, enhancing drone data analysis capabilities.',
      achievements: [
        'Implemented computer vision using Grounding DINO for automated object detection',
        'Developed LLM-powered smart summaries for complex data analysis',
        'Accelerated data processing and insight generation',
        'Enhanced product capabilities with cutting-edge AI technologies'
      ],
      tags: ['Computer Vision', 'Grounding DINO', 'LLM Integration', 'Automation', 'AI Innovation'],
      size: 'medium',
      gradient: 'from-blue-500 to-blue-600',
      icon: <Cpu className="text-white" size={24} />,
      type: 'case-study',
      aiTools: [
        { name: 'Grounding DINO', icon: <Cpu className="text-white" size={20} /> },
        { name: 'LLM', icon: <Brain className="text-white" size={20} /> },
        { name: 'Computer Vision', icon: <Zap className="text-white" size={20} /> }
      ],
      metrics: [
        { label: 'Processing Speed', value: '3x Faster', icon: <Zap className="text-blue-600" size={16} /> },
        { label: 'Accuracy', value: '95%+', icon: <Target className="text-blue-600" size={16} /> },
        { label: 'Automation', value: 'Full', icon: <TrendingUp className="text-blue-600" size={16} /> }
      ]
    },
    {
      id: 'smart-revenue-recovery',
      title: 'AI-Driven Revenue Recovery System',
      subtitle: 'Product@IpaySmart',
      company: 'IpaySmart',
      period: 'Jan 2023 - Dec 2024',
      description: 'Owned Smart Revenue Recovery, integrating AI-driven payment risk models with dev & data teams; closed a major client in 1 month, boosted on-time payments by 12%, and added $1M to revenue.',
      achievements: [
        'Integrated AI-driven payment risk models with development and data teams',
        'Closed a major client in just 1 month',
        'Boosted on-time payments by 12% through intelligent automation',
        'Added $1M to company revenue through strategic product delivery'
      ],
      tags: ['AI Risk Models', 'Revenue Recovery', 'Payment Automation', 'Enterprise Sales'],
      size: 'medium',
      gradient: 'from-blue-500 to-blue-600',
      icon: <Target className="text-white" size={24} />,
      type: 'case-study',
      aiTools: [
        { name: 'AI Risk Models', icon: <Brain className="text-white" size={20} /> },
        { name: 'Payment Analytics', icon: <BarChart3 className="text-white" size={20} /> },
        { name: 'Automation', icon: <Sparkles className="text-white" size={20} /> }
      ],
      metrics: [
        { label: 'Revenue Added', value: '$1M', icon: <TrendingUp className="text-blue-600" size={16} /> },
        { label: 'On-time Payments', value: '+12%', icon: <Target className="text-blue-600" size={16} /> },
        { label: 'Client Closure', value: '1 Month', icon: <Zap className="text-blue-600" size={16} /> }
      ]
    },
    {
      id: 'prepaid-billing-solution',
      title: 'Payment Features & Billing Solution',
      subtitle: 'Product@Smart Energy Water',
      company: 'Smart Energy Water',
      period: 'Jul 2021 - Jan 2023',
      description: 'Partnered with design, dev & QA to launch 5+ new payment features, driving 25% uplift in client adoption and expanding ARR by $3M. Designed and delivered a Prepaid Billing & Payment solution.',
      achievements: [
        'Launched 5+ new payment features driving 25% uplift in client adoption',
        'Expanded ARR by $3M through strategic feature launches',
        'Closed 4 enterprise deals in 6 months with prepaid billing solution',
        'Created new revenue stream through innovative payment solutions'
      ],
      tags: ['Payment Solutions', 'Client Requirements', 'Revenue Growth', 'Enterprise Sales', 'B2B SaaS'],
      size: 'medium',
      gradient: 'from-blue-500 to-blue-600',
      icon: <Zap className="text-white" size={24} />,
      type: 'case-study',
      aiTools: [
        { name: 'Analytics', icon: <BarChart3 className="text-white" size={20} /> },
        { name: 'Automation', icon: <Sparkles className="text-white" size={20} /> }
      ],
      metrics: [
        { label: 'Client Adoption', value: '+25%', icon: <TrendingUp className="text-blue-600" size={16} /> },
        { label: 'ARR Expansion', value: '$3M', icon: <Target className="text-blue-600" size={16} /> },
        { label: 'Enterprise Deals', value: '4', icon: <Users className="text-blue-600" size={16} /> }
      ]
    }
  ];

  // Side Projects
  const sideProjects: PortfolioItem[] = [
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
        { label: 'Countries', value: '10+', icon: <TrendingUp className="text-blue-600" size={16} /> },
        { label: 'Team Size', value: '5+', icon: <Users className="text-blue-600" size={16} /> }
      ],
      tags: ['EdTech', 'Platform', 'Tutoring', 'Team Building', 'Operations'],
      gradient: 'from-blue-500 to-blue-600',
      icon: <GraduationCap className="text-white" size={24} />,
      size: 'medium',
      type: 'project',
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
        'Built community-driven learning ecosystem'
      ],
      metrics: [
        { label: 'Users', value: '250+', icon: <Users className="text-blue-600" size={16} /> },
        { label: 'Challenges', value: '50+', icon: <Code className="text-blue-600" size={16} /> },
        { label: 'Growth', value: 'Organic', icon: <TrendingUp className="text-blue-600" size={16} /> }
      ],
      tags: ['Product Management', 'Platform', 'Community', 'AI Feedback', 'Startup'],
      gradient: 'from-blue-500 to-blue-600',
      icon: <Sparkles className="text-white" size={24} />,
      size: 'medium',
      type: 'project',
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
        'Demonstrated AI integration capabilities'
      ],
      metrics: [
        { label: 'AI Integration', value: 'RAG', icon: <Bot className="text-blue-600" size={16} /> },
        { label: 'Support Reduction', value: '40%', icon: <TrendingUp className="text-blue-600" size={16} /> }
      ],
      tags: ['AI/ML', 'RAG', 'Chatbot', 'LangChain', 'OpenAI', 'Customer Support'],
      gradient: 'from-blue-500 to-blue-600',
      icon: <Bot className="text-white" size={24} />,
      size: 'medium',
      type: 'project',
      link: 'https://github.com/ankitbansal2101/Skychat',
      github: 'https://github.com/ankitbansal2101/Skychat'
    }
  ];

  const certifications: Certification[] = [
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
      icon: <Star className="text-blue-600" size={20} />,
      link: 'https://www.hackerrank.com/profile/ankitbbb162'
    },
    {
      id: 'freelance',
      title: 'Freelance Product Work',
      subtitle: 'Gerald Technologies (Insurance POC)',
      icon: <Award className="text-blue-600" size={20} />,
      link: null
    },
    {
      id: 'community',
      title: 'Community Contributor',
      subtitle: 'Product Hunt & Indie Hackers',
      icon: <Users className="text-blue-600" size={20} />,
      link: null
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
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
        type: "spring" as const,
        stiffness: 300,
        damping: 20
      }
    }
  };



  return (
    <motion.section 
      id="portfolio" 
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
            Portfolio
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A comprehensive showcase of product management case studies, technical projects, and entrepreneurial initiatives that demonstrate strategic thinking and execution excellence.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 items-start">
          
          {/* Company Projects Column */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">
              Company Projects
            </h3>
            <motion.div 
              className="grid gap-6 flex-1"
              style={{ 
                gridTemplateRows: `repeat(${companyProjects.length}, 1fr)`,
                height: '100%'
              }}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {companyProjects.map((item) => (
                <motion.div
                  key={item.id}
                  className="group h-full"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <motion.div
                    className="h-full bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden relative flex flex-col"
                    variants={hoverVariants}
                  >


                    {/* Gradient Header */}
                    <div className={`bg-gradient-to-br ${item.gradient} p-4 sm:p-6 text-white relative overflow-hidden`}>
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white transform translate-x-12 -translate-y-12"></div>
                        <div className="absolute bottom-0 left-0 w-16 h-16 rounded-full bg-white transform -translate-x-8 translate-y-8"></div>
                      </div>
                      
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1 pr-4">
                            <h4 className="text-lg sm:text-xl font-bold mb-1 leading-tight">
                              {item.title}
                            </h4>
                            <p className="text-white/90 font-medium text-sm mb-2">{item.subtitle}</p>
                            <div className="flex items-center gap-1 text-white/80">
                              <Calendar size={12} />
                              <span className="text-xs">{item.period}</span>
                            </div>
                          </div>
                          
                          {/* Icon */}
                          <motion.div
                            className="bg-white/20 backdrop-blur-sm rounded-lg p-2"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            {item.icon}
                          </motion.div>
                        </div>

                        {/* AI Tools Icons */}
                        {item.aiTools && (
                          <div className="flex gap-1 mt-2">
                            {item.aiTools.map((tool, idx) => (
                              <motion.div
                                key={idx}
                                className="bg-white/20 backdrop-blur-sm rounded p-1"
                                whileHover={{ scale: 1.1 }}
                                title={tool.name}
                              >
                                <div className="w-4 h-4">{tool.icon}</div>
                              </motion.div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-5 flex-1 flex flex-col">
                      <p className="text-gray-700 mb-4 leading-relaxed text-xs sm:text-sm">
                        {item.description}
                      </p>

                      {/* Metrics */}
                      {item.metrics && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
                          {item.metrics.map((metric, idx) => (
                            <motion.div 
                              key={idx} 
                              className="bg-blue-50 rounded-lg p-2 text-center border border-blue-100"
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
                        <h5 className="font-semibold text-gray-900 mb-2 text-sm">Key Achievements</h5>
                        <ul className="space-y-1">
                          {item.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                              <motion.span 
                                className="text-blue-600 mt-0.5 font-bold"
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
                      <div className="flex flex-wrap gap-1 mb-4 mt-auto">
                        {item.tags.map((tag, idx) => (
                          <motion.span
                            key={idx}
                            className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-100"
                            whileHover={{ scale: 1.05 }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Side Projects Column */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">
              Side Projects
            </h3>
            <motion.div 
              className="grid gap-6 flex-1"
              style={{ 
                gridTemplateRows: `repeat(${sideProjects.length}, 1fr)`,
                height: '100%'
              }}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {sideProjects.map((item) => (
                <motion.div
                  key={item.id}
                  className="group h-full"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <motion.div
                    className="h-full bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden relative flex flex-col"
                    variants={hoverVariants}
                  >


                    {/* Gradient Header */}
                    <div className={`bg-gradient-to-br ${item.gradient} p-4 sm:p-6 text-white relative overflow-hidden`}>
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white transform translate-x-12 -translate-y-12"></div>
                        <div className="absolute bottom-0 left-0 w-16 h-16 rounded-full bg-white transform -translate-x-8 translate-y-8"></div>
                      </div>
                      
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1 pr-4">
                            <h4 className="text-lg sm:text-xl font-bold mb-1 leading-tight">
                              {item.title}
                            </h4>
                            <p className="text-white/90 font-medium text-sm mb-2">{item.subtitle}</p>
                            <div className="flex items-center gap-1 text-white/80">
                              <Calendar size={12} />
                              <span className="text-xs">{item.period}</span>
                            </div>
                          </div>
                          
                          {/* Icon */}
                          <motion.div
                            className="bg-white/20 backdrop-blur-sm rounded-lg p-2"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            {item.icon}
                          </motion.div>
                        </div>

                        {/* AI Tools Icons */}
                        {item.aiTools && (
                          <div className="flex gap-1 mt-2">
                            {item.aiTools.map((tool, idx) => (
                              <motion.div
                                key={idx}
                                className="bg-white/20 backdrop-blur-sm rounded p-1"
                                whileHover={{ scale: 1.1 }}
                                title={tool.name}
                              >
                                <div className="w-4 h-4">{tool.icon}</div>
                              </motion.div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-5 flex-1 flex flex-col">
                      <p className="text-gray-700 mb-4 leading-relaxed text-xs sm:text-sm">
                        {item.description}
                      </p>

                      {/* Metrics */}
                      {item.metrics && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
                          {item.metrics.map((metric, idx) => (
                            <motion.div 
                              key={idx} 
                              className="bg-blue-50 rounded-lg p-2 text-center border border-blue-100"
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
                        <h5 className="font-semibold text-gray-900 mb-2 text-sm">Key Achievements</h5>
                        <ul className="space-y-1">
                          {item.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                              <motion.span 
                                className="text-blue-600 mt-0.5 font-bold"
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
                      <div className="flex flex-wrap gap-1 mb-4 mt-auto">
                        {item.tags.map((tag, idx) => (
                          <motion.span
                            key={idx}
                            className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-100"
                            whileHover={{ scale: 1.05 }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 mt-auto">
                        {item.link && (
                          <motion.a
                            href={item.link}
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
                        {item.github && (
                          <motion.a
                            href={item.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center gap-1 bg-blue-100 text-blue-700 px-3 py-2 rounded-lg hover:bg-blue-200 transition-colors text-xs font-medium"
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
                      className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Certifications & Achievements */}
        <motion.div 
          className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 sm:p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">
            Certifications & Achievements
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                className="bg-blue-50 rounded-lg p-4 hover:shadow-md transition-shadow border border-blue-100"
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

export default Portfolio;
