import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, TrendingUp, Users, Target, Zap, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 'asteria-aerospace',
      title: 'Product@Asteria Aerospace',
      company: 'Asteria Aerospace',
      location: 'Bangalore - Remote',
      period: 'Jan 2025 – Present',
      gradient: 'from-blue-500 to-blue-600',
      icon: <Briefcase className="text-white" size={24} />,
      status: 'Current',
      achievements: [
        'Defined product strategy and roadmap for drone data workflows, driving a 22% increase in client adoption',
        'Built and deployed an AI-powered chatbot using RAG trained on SkyDeck\'s help documentation, reducing support queries by 40% and decreasing trial churn by 12%',
        'Ideated and launched automated AI object detection using Grounding DINO and automated smart summaries using LLM',
        'Leveraged AI tools to rapidly prototype and build POCs, accelerating design validation and development cycles',
        'Drove backlog grooming, sprint planning, and user feedback loops ensuring 95% on-time, high-quality releases'
      ],
      keyMetrics: [
        { label: 'Client Adoption', value: '+22%', icon: <TrendingUp className="text-green-600" size={16} /> },
        { label: 'Support Queries', value: '-40%', icon: <Zap className="text-blue-600" size={16} /> },
        { label: 'On-time Delivery', value: '95%', icon: <Target className="text-purple-600" size={16} /> }
      ],
      tags: ['AI Product Strategy', 'RAG Applications', 'Computer Vision', 'Drone Technology']
    },
    {
      id: 'ipaysmart',
      title: 'Product@Ipaysmart (SEW product)',
      company: 'IpaySmart (Smart Energy Water)',
      location: 'Noida',
      period: 'Jan 2023 – Dec 2024',
      gradient: 'from-blue-500 to-blue-600',
      icon: <Target className="text-white" size={24} />,
      status: 'Previous',
      achievements: [
        'Owned Smart Revenue Recovery, integrating AI-driven payment risk models with dev & data teams; closed a major client in 1 month and added $1M to revenue',
        'Launched Landlord Payments portal, securing adoption from 4 enterprise clients, contributing 15% to ARR growth',
        'Streamlined backlog management & sprint execution across distributed teams, improving velocity by 20% and reducing scope slippage',
        'Boosted on-time payments by 12% through intelligent automation and risk modeling',
        'Led cross-functional collaboration to deliver enterprise-grade payment solutions'
      ],
      keyMetrics: [
        { label: 'Revenue Added', value: '$1M', icon: <TrendingUp className="text-green-600" size={16} /> },
        { label: 'ARR Growth', value: '+15%', icon: <Target className="text-blue-600" size={16} /> },
        { label: 'Team Velocity', value: '+20%', icon: <Zap className="text-purple-600" size={16} /> }
      ],
      tags: ['AI-driven Risk Models', 'Revenue Recovery', 'Enterprise B2B', 'Payment Solutions']
    },
    {
      id: 'smart-energy-water',
      title: 'Product@Smart Energy Water',
      company: 'Smart Energy Water',
      location: 'Noida',
      period: 'Jul 2021 – Jan 2023',
      gradient: 'from-blue-500 to-blue-600',
      icon: <Award className="text-white" size={24} />,
      status: 'Previous',
      achievements: [
        'Partnered with design, dev & QA and closely worked on client requirements to launch 5+ new payment features, driving 25% uplift in client adoption',
        'Designed and delivered a Prepaid Billing & Payment solution that closed 4 enterprise deals in 6 months, creating a new revenue stream',
        'Expanded ARR by $3M through strategic feature launches and client-focused product enhancements',
        'Conducted user research and collaborated with stakeholders to prioritize features, ensuring alignment with client needs and long-term strategy',
        'Led product initiatives that significantly improved client satisfaction and retention rates'
      ],
      keyMetrics: [
        { label: 'Client Adoption', value: '+25%', icon: <TrendingUp className="text-green-600" size={16} /> },
        { label: 'ARR Expansion', value: '$3M', icon: <Target className="text-blue-600" size={16} /> },
        { label: 'Enterprise Deals', value: '4', icon: <Users className="text-purple-600" size={16} /> }
      ],
      tags: ['Payment Solutions', 'Client Requirements', 'Revenue Growth', 'User Research']
    },
    {
      id: 'collegedunia',
      title: 'Business Analyst Intern@Collegedunia',
      company: 'Collegedunia',
      location: 'Gurgaon',
      period: 'Jan 2020 – Jun 2020',
      gradient: 'from-blue-500 to-blue-600',
      icon: <Briefcase className="text-white" size={24} />,
      status: 'Internship',
      achievements: [
        'Led web scraping and data extraction projects to enrich database with 200+ verified college listings',
        'Built automation scripts to monitor admission portals and speed up content updates',
        'Delivered dashboards and reports to guide editorial and SEO efforts with data-driven insights'
      ],
      keyMetrics: [
        { label: 'College Listings', value: '200+', icon: <Users className="text-green-600" size={16} /> },
        { label: 'Automation', value: 'Scripts', icon: <Zap className="text-blue-600" size={16} /> },
        { label: 'Data Insights', value: 'Driven', icon: <Target className="text-purple-600" size={16} /> }
      ],
      tags: ['Data Extraction', 'Automation', 'Analytics', 'EdTech']
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
      id="experience" 
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
            Work
            <span className="ml-2 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            4+ years of product management experience across aerospace, fintech, and utilities, driving innovation and measurable business impact.
          </p>
        </motion.div>

        {/* Career Timeline Visualization */}
        <motion.div 
          className="mb-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 sm:p-8 border border-blue-100"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">
            Career
            <span className="ml-2 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Journey
            </span>
          </h3>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
            {experiences.map((exp, index) => (
              <React.Fragment key={exp.id}>
                <motion.div
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                >
                  <div className={`bg-gradient-to-br ${exp.gradient} rounded-full p-3 mb-2 shadow-lg`}>
                    <div className="w-5 h-5 text-white">{exp.icon}</div>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-xs">{exp.company}</h4>
                  <p className="text-gray-600 text-xs">{exp.period.split(' – ')[0]}</p>
                </motion.div>
                
                {index < experiences.length - 1 && (
                  <motion.div
                    className="hidden sm:block w-6 h-0.5 bg-gradient-to-r from-blue-300 to-cyan-300"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.7 + index * 0.2, duration: 0.5 }}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* Experience Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              className="group"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden relative h-full flex flex-col"
                variants={hoverVariants}
              >


                {/* Gradient Header */}
                <div className={`bg-gradient-to-br ${exp.gradient} p-6 sm:p-8 text-white relative overflow-hidden`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white transform translate-x-16 -translate-y-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white transform -translate-x-12 translate-y-12"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1 pr-4">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-4 leading-tight">
                          {exp.title}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-white/80">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span className="text-sm">{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Company Icon */}
                      <motion.div
                        className="bg-white/20 backdrop-blur-sm rounded-xl p-3"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        {exp.icon}
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 flex-1 flex flex-col">
                  {/* Key Metrics */}
                  {exp.keyMetrics && (
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {exp.keyMetrics.map((metric, idx) => (
                        <motion.div 
                          key={idx} 
                          className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-3 text-center border border-blue-100"
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
                    <h4 className="font-semibold text-gray-900 mb-3 text-base">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.slice(0, 4).map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <motion.div 
                            className="bg-blue-100 rounded-full p-0.5 mt-1 flex-shrink-0"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5 + idx * 0.1 }}
                          >
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          </motion.div>
                          <span className="text-xs sm:text-sm leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {exp.tags.map((tag, idx) => (
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
      </div>
    </motion.section>
  );
};

export default Experience;