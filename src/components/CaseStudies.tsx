import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Users, TrendingUp, Target, Zap, Bot, Brain, Database, Cpu, BarChart3, Sparkles } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  company: string;
  duration: string;
  description: string;
  challenge: string;
  solution: string;
  impact: string[];
  tags: string[];
  link?: string;
  size: 'small' | 'medium' | 'large';
  gradient: string;
  aiTools: {
    name: string;
    icon: React.ReactNode;
  }[];
  metrics?: {
    label: string;
    value: string;
    icon: React.ReactNode;
  }[];
}

const CaseStudies: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: 'asteria-rag-chatbot',
      title: 'AI-Powered Support Chatbot',
      company: 'Asteria Aerospace',
      duration: 'Jan 2025 - Present',
      description: 'Built and deployed an AI-powered chatbot using RAG (Retrieval-Augmented Generation) trained on SkyDeck\'s help documentation to reduce support queries and improve user onboarding.',
      challenge: 'High volume of repetitive support queries was overwhelming the support team and causing delays in trial customer onboarding, leading to increased drop-offs during the trial period.',
      solution: 'Developed a RAG-based chatbot that could instantly answer common questions by retrieving relevant information from the help documentation. Integrated it directly into the SkyDeck platform for seamless user experience.',
      impact: [
        'Reduced support query volume by 40%',
        'Accelerated user learning and onboarding',
        'Decreased trial customer drop-offs by 25%',
        'Improved customer satisfaction scores'
      ],
      tags: ['AI/ML', 'RAG', 'Customer Support', 'User Onboarding', 'Chatbot', 'Product Strategy'],
      size: 'large',
      gradient: 'from-blue-500 to-purple-600',
      aiTools: [
        { name: 'RAG', icon: <Brain className="text-white" size={20} /> },
        { name: 'NLP', icon: <Bot className="text-white" size={20} /> },
        { name: 'Vector DB', icon: <Database className="text-white" size={20} /> }
      ],
      metrics: [
        { label: 'Support Queries', value: '-40%', icon: <TrendingUp className="text-green-600" size={16} /> },
        { label: 'Trial Drop-offs', value: '-25%', icon: <Users className="text-blue-600" size={16} /> },
        { label: 'User Satisfaction', value: '+35%', icon: <Target className="text-purple-600" size={16} /> }
      ]
    },
    {
      id: 'drone-log-analysis',
      title: 'Drone Telemetry Anomaly Detection',
      company: 'Asteria Aerospace',
      duration: 'Jan 2025 - Present',
      description: 'Launched a comprehensive Drone Log Analysis system for telemetry anomaly detection, replacing reliance on third-party tools and driving new customer acquisition.',
      challenge: 'Customers were dependent on expensive third-party tools for drone telemetry analysis, creating friction in the sales process and limiting our competitive advantage.',
      solution: 'Built an in-house telemetry analysis system with anomaly detection capabilities, integrated directly into our platform. Used AI/ML algorithms to identify patterns and anomalies in drone flight data.',
      impact: [
        'Eliminated dependency on third-party tools',
        'Reduced customer acquisition cost',
        'Increased platform stickiness',
        'Generated new revenue stream'
      ],
      tags: ['Data Analytics', 'Anomaly Detection', 'Drone Technology', 'Product Development', 'Competitive Strategy'],
      size: 'medium',
      gradient: 'from-emerald-500 to-teal-600',
      aiTools: [
        { name: 'ML Analytics', icon: <BarChart3 className="text-white" size={20} /> },
        { name: 'Pattern Recognition', icon: <Cpu className="text-white" size={20} /> },
        { name: 'Data Processing', icon: <Database className="text-white" size={20} /> }
      ],
      metrics: [
        { label: 'New Customers', value: '+60%', icon: <Users className="text-green-600" size={16} /> },
        { label: 'Cost Savings', value: '$50K/year', icon: <TrendingUp className="text-blue-600" size={16} /> },
        { label: 'Platform Usage', value: '+45%', icon: <Zap className="text-purple-600" size={16} /> }
      ]
    },
    {
      id: 'smart-revenue-recovery',
      title: 'Smart Revenue Recovery System',
      company: 'IPaySmart',
      duration: 'Jan 2023 - Dec 2024',
      description: 'Owned end-to-end delivery of Smart Revenue Recovery system that significantly improved on-time payment rates through intelligent automation and customer engagement.',
      challenge: 'High rate of late payments was affecting cash flow and requiring significant manual intervention from the collections team, impacting operational efficiency.',
      solution: 'Designed and implemented an automated revenue recovery system with smart notifications, payment reminders, and escalation workflows. Integrated behavioral analytics to optimize timing and messaging.',
      impact: [
        'Boosted on-time payments by 12% in 3 months',
        'Reduced manual collection efforts by 60%',
        'Improved cash flow predictability',
        'Enhanced customer payment experience'
      ],
      tags: ['Fintech', 'Automation', 'Revenue Optimization', 'Customer Experience', 'Data-Driven'],
      size: 'small',
      gradient: 'from-orange-500 to-red-500',
      aiTools: [
        { name: 'Smart Automation', icon: <Sparkles className="text-white" size={20} /> },
        { name: 'Behavioral Analytics', icon: <Brain className="text-white" size={20} /> }
      ],
      metrics: [
        { label: 'On-time Payments', value: '+12%', icon: <TrendingUp className="text-green-600" size={16} /> },
        { label: 'Manual Effort', value: '-60%', icon: <Zap className="text-blue-600" size={16} /> },
        { label: 'Cash Flow', value: 'Improved', icon: <Target className="text-purple-600" size={16} /> }
      ]
    },
    {
      id: 'landlord-payments-portal',
      title: 'Enterprise Landlord Payments Portal',
      company: 'IPaySmart',
      duration: 'Jan 2023 - Dec 2024',
      description: 'Defined requirements and shipped a comprehensive Landlord Payments Portal, securing adoption from 4 major enterprise clients and expanding market reach.',
      challenge: 'Landlords needed a dedicated platform to manage multiple property payments, track tenant payment history, and generate reports, but existing solutions were fragmented.',
      solution: 'Built a comprehensive portal with multi-property management, automated rent collection, tenant communication tools, and detailed analytics dashboard tailored for enterprise landlords.',
      impact: [
        'Secured 4 enterprise client adoptions',
        'Expanded into new market segment',
        'Increased average contract value',
        'Improved client retention rates'
      ],
      tags: ['Enterprise B2B', 'Portal Development', 'Market Expansion', 'Client Success', 'Requirements Gathering'],
      size: 'medium',
      gradient: 'from-indigo-500 to-blue-600',
      aiTools: [
        { name: 'Analytics Dashboard', icon: <BarChart3 className="text-white" size={20} /> },
        { name: 'Automation', icon: <Cpu className="text-white" size={20} /> }
      ],
      metrics: [
        { label: 'Enterprise Clients', value: '4 New', icon: <Users className="text-green-600" size={16} /> },
        { label: 'Contract Value', value: '+40%', icon: <TrendingUp className="text-blue-600" size={16} /> },
        { label: 'Market Reach', value: 'Expanded', icon: <Target className="text-purple-600" size={16} /> }
      ]
    },
    {
      id: 'prepaid-billing-solution',
      title: 'Prepaid Billing & Payment Solution',
      company: 'Smart Energy Water',
      duration: 'Jul 2021 - Jan 2023',
      description: 'Designed and delivered a comprehensive Prepaid Billing & Payment solution that opened new revenue streams and secured multiple enterprise deals.',
      challenge: 'Utility companies needed a prepaid billing system to better manage cash flow and reduce bad debt, but existing solutions were complex and expensive to implement.',
      solution: 'Developed a user-friendly prepaid billing system with real-time balance tracking, automated top-up reminders, and flexible payment options. Focused on simplicity and reliability.',
      impact: [
        'Closed 4 enterprise deals in 6 months',
        'Created new revenue stream worth $200K annually',
        'Improved utility company cash flow management',
        'Reduced implementation complexity by 50%'
      ],
      tags: ['Utilities', 'Prepaid Systems', 'Enterprise Sales', 'Revenue Generation', 'Product Innovation'],
      size: 'small',
      gradient: 'from-green-500 to-emerald-600',
      aiTools: [
        { name: 'Real-time Processing', icon: <Zap className="text-white" size={20} /> },
        { name: 'Smart Alerts', icon: <Sparkles className="text-white" size={20} /> }
      ],
      metrics: [
        { label: 'Enterprise Deals', value: '4 in 6mo', icon: <Users className="text-green-600" size={16} /> },
        { label: 'New Revenue', value: '$200K/year', icon: <TrendingUp className="text-blue-600" size={16} /> },
        { label: 'Implementation', value: '-50% complexity', icon: <Zap className="text-purple-600" size={16} /> }
      ]
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

  // Grid layout configuration for Bento-style
  const getGridClass = (size: string, index: number) => {
    switch (size) {
      case 'large':
        return 'col-span-1 md:col-span-2 row-span-2';
      case 'medium':
        return 'col-span-1 row-span-1';
      case 'small':
        return 'col-span-1 row-span-1';
      default:
        return 'col-span-1 row-span-1';
    }
  };

  return (
    <section id="case-studies" className="py-8 sm:py-10 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-full mx-auto px-2 sm:px-4 lg:px-6">
        {/* Header */}
        <motion.div 
          className="text-center mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Product Management
            <span className="ml-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Case Studies
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Real-world product challenges I've solved, from AI-powered solutions to enterprise platforms. 
            Each case study demonstrates strategic thinking, execution excellence, and measurable impact.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 auto-rows-fr"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              className={`${getGridClass(study.size, index)} group`}
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div
                className="h-full bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden relative"
                variants={hoverVariants}
              >
                {/* Gradient Header */}
                <div className={`bg-gradient-to-br ${study.gradient} p-6 sm:p-8 text-white relative overflow-hidden`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white transform translate-x-16 -translate-y-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white transform -translate-x-12 translate-y-12"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold mb-2 leading-tight">
                          {study.title}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-white/90">
                          <span className="font-medium">{study.company}</span>
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span className="text-sm">{study.duration}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* AI Tools Icons */}
                      <div className="flex gap-2 ml-4">
                        {study.aiTools.map((tool, idx) => (
                          <motion.div
                            key={idx}
                            className="bg-white/20 backdrop-blur-sm rounded-lg p-2"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            title={tool.name}
                          >
                            {tool.icon}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 flex-1 flex flex-col">
                  <p className="text-gray-700 mb-4 leading-relaxed text-xs sm:text-sm">
                    {study.description}
                  </p>

                  {/* Metrics */}
                  {study.metrics && (
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {study.metrics.map((metric, idx) => (
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

                  {/* Impact Points */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Impact</h4>
                    <ul className="space-y-1">
                      {study.impact.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                          <motion.span 
                            className="text-green-500 mt-0.5 font-bold"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5 + idx * 0.1 }}
                          >
                            ✓
                          </motion.span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mt-auto">
                    {study.tags.slice(0, 4).map((tag, idx) => (
                      <motion.span
                        key={idx}
                        className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                    {study.tags.length > 4 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                        +{study.tags.length - 4}
                      </span>
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

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-8 p-6 sm:p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white transform translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white transform -translate-x-12 translate-y-12"></div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-xl sm:text-2xl font-bold mb-3">
              Want to discuss these case studies in detail?
            </h3>
            <p className="text-blue-100 mb-6 text-sm sm:text-base max-w-2xl mx-auto">
              I'd love to walk you through my approach, decision-making process, and lessons learned from each project.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.a
                href="mailto:ankitbbb162@gmail.com"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Discussion
                <ExternalLink size={16} />
              </motion.a>
              <motion.a
                href="/Ankit_Bansal_PM.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
                <ExternalLink size={16} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
