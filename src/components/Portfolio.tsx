import React from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  GraduationCap,
  Users,
  Bot,
  Sparkles,
  Code,
  Award,
  Star,
  TrendingUp,
  Target,
  Zap,
  Brain,
  Database,
  Cpu,
  BarChart3,
  Phone,
} from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import PortfolioCarousel from './ui/PortfolioCarousel';
import type { ProjectCardItem } from './ui/ProjectCard';

const companyProjects: ProjectCardItem[] = [
  {
    id: 'sirrus-martech-roadmap',
    title: 'Engagement & Martech Product Strategy',
    subtitle: 'Product Manager @ Sirrus.ai',
    period: 'Nov 2025 - Present',
    description:
      'Own the Engagement & Martech product roadmap for a B2B SaaS CRM platform serving real estate developers, driving strategy across lead management, customer journeys, AI-powered engagement, and workflow automation for multiple enterprise customers.',
    achievements: [
      'Drive product strategy across lead management, customer journeys, AI-powered engagement, and workflow automation',
      'Conducted 30+ stakeholder interviews with CMOs, Sales Heads, Customer Success, and frontline CRM users',
      'Completed 8+ on-site client visits to uncover workflow bottlenecks and influence roadmap prioritization',
      'Translated field insights from enterprise customers into product direction and release planning',
    ],
    tags: ['B2B SaaS', 'PropTech', 'Martech', 'Product Strategy', 'User Research', 'Customer Success'],
    gradient: 'from-term-accent-dim to-term-accent',
    icon: <Users className="text-term-accent" size={24} />,
    metrics: [
      { label: 'Stakeholder Interviews', value: '30+', icon: <Users className="text-term-accent" size={16} /> },
      { label: 'Client Visits', value: '8+', icon: <Target className="text-term-accent" size={16} /> },
      { label: 'Enterprise Customers', value: 'Multiple', icon: <TrendingUp className="text-term-accent" size={16} /> },
    ],
  },
  {
    id: 'sirrus-configurable-crm',
    title: 'Configurable CRM Architecture',
    subtitle: 'Product Manager @ Sirrus.ai',
    period: 'Nov 2025 - Present',
    description:
      'Led the vision and rollout of a configurable CRM architecture, Blueprint Management, Dynamic Lead Layouts, and Form Configuration, using AI-generated prototypes to accelerate stakeholder alignment and dramatically shorten enterprise onboarding.',
    achievements: [
      'Launched Blueprint Management for configurable CRM workflow design across enterprise accounts',
      'Shipped Dynamic Lead Layouts and Form Configuration to adapt the platform to client-specific sales processes',
      'Built live interactive prototypes, Blueprint Configurator and Details Page Builder, to accelerate stakeholder alignment before development',
      'Reduced customer onboarding timelines by ~90%, from 3 months down to 15 days',
    ],
    tags: ['CRM Architecture', 'Blueprint Management', 'AI Prototyping', 'Enterprise SaaS', 'Onboarding'],
    gradient: 'from-term-accent-dim to-term-accent',
    icon: <Target className="text-term-accent" size={24} />,
    links: [
      {
        label: 'Blueprint Prototype',
        href: 'https://sirrus3.vercel.app/developer/lead-settings/blueprint-configurator',
        type: 'demo',
      },
      {
        label: 'Page Builder',
        href: 'https://sirrus.vercel.app/settings/details-page-builder',
        type: 'demo',
      },
      { label: 'sirrus2', href: 'https://github.com/ankitbansal2101/sirrus2', type: 'github' },
      { label: 'sirrus', href: 'https://github.com/ankitbansal2101/sirrus', type: 'github' },
    ],
    metrics: [
      { label: 'Onboarding Reduction', value: '~90%', icon: <TrendingUp className="text-term-accent" size={16} /> },
      { label: 'Timeline', value: '3mo → 15d', icon: <Zap className="text-term-accent" size={16} /> },
      { label: 'Core Modules', value: '3', icon: <Target className="text-term-accent" size={16} /> },
    ],
  },
  {
    id: 'sirrus-ai-voice-agent',
    title: 'AI Voice Agent & Enterprise Integrations',
    subtitle: 'Product Manager @ Sirrus.ai',
    period: 'Nov 2025 - Present',
    description:
      'Defined and launched an AI Voice Agent integrated with Exotel, and delivered end-to-end enterprise integrations with Zoho CRM, PickyAssist WhatsApp, and Servetel Cloud Telephony, coordinating across engineering, implementation, and customer teams.',
    achievements: [
      'Launched AI Voice Agent with Exotel, designing conversation flows, prompt engineering, and lead qualification logic',
      'Built automated follow-up journeys across CRM, telephony, WhatsApp, and marketing workflows',
      'Delivered Zoho CRM integration for enterprise-specific data synchronization requirements',
      'Integrated PickyAssist WhatsApp and Servetel Cloud Telephony to support client business processes end-to-end',
    ],
    tags: ['AI Voice Agent', 'Exotel', 'Zoho CRM', 'PickyAssist', 'Servetel', 'Enterprise Integrations'],
    gradient: 'from-term-accent-dim to-term-accent',
    icon: <Bot className="text-term-accent" size={24} />,
    aiTools: [
      { name: 'Exotel', icon: <Phone className="text-term-accent" size={16} /> },
      { name: 'PickyAssist', icon: <Sparkles className="text-term-accent" size={16} /> },
      { name: 'Zoho CRM', icon: <Database className="text-term-accent" size={16} /> },
    ],
    metrics: [
      { label: 'Integrations Delivered', value: '3', icon: <Zap className="text-term-accent" size={16} /> },
      { label: 'Channels Orchestrated', value: '4+', icon: <Target className="text-term-accent" size={16} /> },
      { label: 'Voice Agent', value: 'Live', icon: <Bot className="text-term-accent" size={16} /> },
    ],
  },
  {
    id: 'asteria-rag-chatbot',
    title: 'AI-Powered RAG Chatbot',
    subtitle: 'Product @ Asteria Aerospace',
    period: 'Jan 2025 - Oct 2025',
    description:
      "Built and deployed an AI-powered chatbot using RAG trained on SkyDeck's help documentation, reducing support queries by 40%, accelerating user learning, and decreasing trial churn by 12%.",
    achievements: [
      'Reduced support query volume by 40%',
      'Decreased trial churn by 12%',
      'Accelerated user learning and onboarding process',
      'Improved overall customer experience and satisfaction',
    ],
    tags: ['RAG Applications', 'Generative AI', 'Customer Support', 'LLM Integration', 'Chatbot'],
    gradient: 'from-term-accent-dim to-term-accent',
    icon: <Bot className="text-term-accent" size={24} />,
    aiTools: [
      { name: 'RAG', icon: <Brain className="text-term-accent" size={16} /> },
      { name: 'LLM', icon: <Bot className="text-term-accent" size={16} /> },
      { name: 'Vector DB', icon: <Database className="text-term-accent" size={16} /> },
    ],
    metrics: [
      { label: 'Support Queries', value: '-40%', icon: <TrendingUp className="text-term-accent" size={16} /> },
      { label: 'Trial Churn', value: '-12%', icon: <Users className="text-term-accent" size={16} /> },
      { label: 'User Learning', value: 'Faster', icon: <Target className="text-term-accent" size={16} /> },
    ],
  },
  {
    id: 'ai-object-detection',
    title: 'AI Object Detection & Smart Summaries',
    subtitle: 'Product @ Asteria Aerospace',
    period: 'Jan 2025 - Oct 2025',
    description:
      'Ideated and launched automated AI object detection using Grounding DINO and automated smart summaries using LLM, enhancing drone data analysis capabilities.',
    achievements: [
      'Implemented computer vision using Grounding DINO for automated object detection',
      'Developed LLM-powered smart summaries for complex data analysis',
      'Accelerated data processing and insight generation',
      'Enhanced product capabilities with cutting-edge AI technologies',
    ],
    tags: ['Computer Vision', 'Grounding DINO', 'LLM Integration', 'Automation', 'AI Innovation'],
    gradient: 'from-term-accent-dim to-term-accent',
    icon: <Cpu className="text-term-accent" size={24} />,
    aiTools: [
      { name: 'Grounding DINO', icon: <Cpu className="text-term-accent" size={16} /> },
      { name: 'LLM', icon: <Brain className="text-term-accent" size={16} /> },
      { name: 'Computer Vision', icon: <Zap className="text-term-accent" size={16} /> },
    ],
    metrics: [
      { label: 'Processing Speed', value: '3x Faster', icon: <Zap className="text-term-accent" size={16} /> },
      { label: 'Accuracy', value: '95%+', icon: <Target className="text-term-accent" size={16} /> },
      { label: 'Automation', value: 'Full', icon: <TrendingUp className="text-term-accent" size={16} /> },
    ],
  },
  {
    id: 'smart-revenue-recovery',
    title: 'AI-Driven Revenue Recovery System',
    subtitle: 'Product @ IpaySmart',
    period: 'Jan 2023 - Dec 2024',
    description:
      'Owned Smart Revenue Recovery, integrating AI-driven payment risk models with dev & data teams; closed a major client in 1 month, boosted on-time payments by 12%, and added $1M to revenue.',
    achievements: [
      'Integrated AI-driven payment risk models with development and data teams',
      'Closed a major client in just 1 month',
      'Boosted on-time payments by 12% through intelligent automation',
      'Added $1M to company revenue through strategic product delivery',
    ],
    tags: ['AI Risk Models', 'Revenue Recovery', 'Payment Automation', 'Enterprise Sales'],
    gradient: 'from-term-accent-dim to-term-accent',
    icon: <Target className="text-term-accent" size={24} />,
    aiTools: [
      { name: 'AI Risk Models', icon: <Brain className="text-term-accent" size={16} /> },
      { name: 'Payment Analytics', icon: <BarChart3 className="text-term-accent" size={16} /> },
      { name: 'Automation', icon: <Sparkles className="text-term-accent" size={16} /> },
    ],
    metrics: [
      { label: 'Revenue Added', value: '$1M', icon: <TrendingUp className="text-term-accent" size={16} /> },
      { label: 'On-time Payments', value: '+12%', icon: <Target className="text-term-accent" size={16} /> },
      { label: 'Client Closure', value: '1 Month', icon: <Zap className="text-term-accent" size={16} /> },
    ],
  },
  {
    id: 'prepaid-billing-solution',
    title: 'Payment Features & Billing Solution',
    subtitle: 'Product @ Smart Energy Water',
    period: 'Jul 2021 - Jan 2023',
    description:
      'Partnered with design, dev & QA to launch 5+ new payment features, driving 25% uplift in client adoption and expanding ARR by $3M. Designed and delivered a Prepaid Billing & Payment solution.',
    achievements: [
      'Launched 5+ new payment features driving 25% uplift in client adoption',
      'Expanded ARR by $3M through strategic feature launches',
      'Closed 4 enterprise deals in 6 months with prepaid billing solution',
      'Created new revenue stream through innovative payment solutions',
    ],
    tags: ['Payment Solutions', 'Client Requirements', 'Revenue Growth', 'Enterprise Sales', 'B2B SaaS'],
    gradient: 'from-term-accent-dim to-term-accent',
    icon: <Zap className="text-term-accent" size={24} />,
    metrics: [
      { label: 'Client Adoption', value: '+25%', icon: <TrendingUp className="text-term-accent" size={16} /> },
      { label: 'ARR Expansion', value: '$3M', icon: <Target className="text-term-accent" size={16} /> },
      { label: 'Enterprise Deals', value: '4', icon: <Users className="text-term-accent" size={16} /> },
    ],
  },
];

const sideHustles: ProjectCardItem[] = [
  {
    id: 'the-coding-live',
    title: 'The Coding Live',
    subtitle: 'Founder · EdTech Side Hustle',
    period: '2020 – 2023',
    description:
      'Founded and scaled a profitable 1-on-1 online tutoring side hustle, connecting students globally with personalized coding instruction while working full-time in product.',
    achievements: [
      'Built a team of 5+ expert tutors and ran operations alongside a full-time PM career',
      'Trained 500+ students from 10+ countries in web development and data science',
      'Built scheduling, progress tracking, and learning path features without a large dev team',
      'Managed tutor onboarding, curriculum, and customer acquisition end-to-end',
    ],
    tags: ['EdTech', 'Founder', 'Tutoring', 'Revenue', 'Operations'],
    gradient: 'from-term-accent-dim to-term-accent',
    icon: <GraduationCap className="text-term-accent" size={24} />,
    metrics: [
      { label: 'Students Trained', value: '500+', icon: <Users className="text-term-accent" size={16} /> },
      { label: 'Countries', value: '10+', icon: <TrendingUp className="text-term-accent" size={16} /> },
      { label: 'Team Built', value: '5+', icon: <Users className="text-term-accent" size={16} /> },
    ],
  },
  {
    id: 'pmranker',
    title: 'PMRanker',
    subtitle: 'Founder · PM Side Hustle',
    period: '2025 – Present',
    description:
      'Bootstrapped a side hustle helping aspiring PMs practice real product challenges with AI-powered feedback, growing an organic community while working full-time at Sirrus.ai.',
    achievements: [
      'Built and shipped the platform solo outside of work hours',
      'Created 50+ scenario-based PM challenges and public submission portfolios',
      'Grew to 250+ users organically in the first month through product communities',
      'Runs as a self-sustaining learning community for aspiring product managers',
    ],
    tags: ['Founder', 'Product Management', 'Community', 'Bootstrapped', 'AI Feedback'],
    gradient: 'from-term-accent-dim to-term-accent',
    icon: <Sparkles className="text-term-accent" size={24} />,
    link: 'https://pmranker.com/',
    github: 'https://github.com/ankitbansal2101/PMRank',
    metrics: [
      { label: 'Users', value: '250+', icon: <Users className="text-term-accent" size={16} /> },
      { label: 'Challenges', value: '50+', icon: <Code className="text-term-accent" size={16} /> },
      { label: 'Growth', value: 'Organic', icon: <TrendingUp className="text-term-accent" size={16} /> },
    ],
  },
];

const certifications = [
  {
    id: 'data-science',
    title: 'Data Science Certification',
    subtitle: 'Python and R – Dimensionless Technologies',
    icon: <Code className="text-term-accent" size={20} />,
    link: 'https://drive.google.com/file/d/0B9Mo5_VWtsqjZVdQdmd4ZjByaHFxY1pXS29LYmg2UGtISWJF/view?usp=drive_link&resourcekey=0-9Xn_cfUXTStNro1BM7x7Gw',
  },
  {
    id: 'hackerrank',
    title: '5⭐ HackerRank',
    subtitle: 'Python & SQL Excellence',
    icon: <Star className="text-term-accent" size={20} />,
    link: 'https://www.hackerrank.com/profile/ankitbbb162',
  },
  {
    id: 'freelance',
    title: 'Freelance Product Work',
    subtitle: 'Gerald Technologies (Insurance POC)',
    icon: <Award className="text-term-accent" size={20} />,
    link: null,
  },
  {
    id: 'community',
    title: 'Community Contributor',
    subtitle: 'Product Hunt & Indie Hackers',
    icon: <Users className="text-term-accent" size={20} />,
    link: null,
  },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="scroll-mt-24">
      <SectionHeader
        eyebrow="Portfolio"
        title="Featured"
        highlight="Work"
        subtitle="Company case studies and founder side hustles that show strategic thinking, client-led discovery, and execution beyond the day job."
      />

      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <PortfolioCarousel
            title="Company"
            highlight="Projects"
            items={companyProjects}
            variant="company"
            autoPlayMs={9000}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <PortfolioCarousel
            title="Side"
            highlight="Hustles"
            items={sideHustles}
            variant="hustle"
            autoPlayMs={7000}
          />
        </motion.div>

        <motion.div
          className="section-card p-6 sm:p-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <h3 className="text-lg sm:text-xl font-bold text-term-text mb-6 text-center">
            Certifications & <span className="gradient-text">Achievements</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                className="rounded-xl border border-term-border bg-term-elevated/50 p-4 transition-all duration-200 hover:shadow-card hover:border-term-border"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
              >
                <div className="flex items-start gap-3">
                  <div className="rounded-lg border border-white bg-term-surface p-2">{cert.icon}</div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-term-text mb-1 text-sm">{cert.title}</h4>
                    <p className="text-term-muted text-xs mb-2">{cert.subtitle}</p>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-term-accent hover:text-term-accent text-xs font-medium"
                      >
                        View Certificate
                        <ExternalLink size={10} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
