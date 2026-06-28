import type { DetailSection } from './career';

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  name: string;
  summary: string;
  category: 'company' | 'side-hustle';
  subtitle: string;
  period: string;
  overview: string;
  technologies: string[];
  highlights: DetailSection[];
  links?: ProjectLink[];
}

export const projects: Project[] = [
  {
    slug: 'sirrus-martech',
    name: 'Engagement & Martech Product Strategy',
    summary:
      'Product roadmap for a B2B SaaS CRM serving real estate developers across lead management, customer journeys, AI engagement, and workflow automation.',
    category: 'company',
    subtitle: 'Product Manager @ Sirrus.ai',
    period: 'Nov 2025 - Present',
    overview:
      'Own the Engagement & Martech product roadmap for a B2B SaaS CRM platform serving real estate developers, driving strategy across lead management, customer journeys, AI-powered engagement, and workflow automation for multiple enterprise customers.',
    technologies: [
      'B2B SaaS, PropTech, Martech, Product Strategy',
      'User Research, Stakeholder Management, Customer Success',
    ],
    highlights: [
      {
        items: [
          'Conducted 30+ stakeholder interviews with CMOs, Sales Heads, Customer Success, and frontline CRM users',
          'Completed 8+ on-site client visits to uncover workflow bottlenecks and influence roadmap prioritization',
          'Translated field insights from enterprise customers into product direction and release planning',
        ],
      },
    ],
  },
  {
    slug: 'sirrus-crm',
    name: 'Configurable CRM Architecture',
    summary:
      'Blueprint Management, Dynamic Lead Layouts, and Form Configuration with AI prototypes that cut enterprise onboarding from 3 months to 15 days.',
    category: 'company',
    subtitle: 'Product Manager @ Sirrus.ai',
    period: 'Nov 2025 - Present',
    overview:
      'Led the vision and rollout of a configurable CRM architecture using AI-generated prototypes to accelerate stakeholder alignment and dramatically shorten enterprise onboarding.',
    technologies: [
      'CRM Architecture, Blueprint Management, AI Prototyping',
      'Enterprise SaaS, Dynamic Lead Layouts, Form Configuration',
    ],
    highlights: [
      {
        items: [
          'Launched Blueprint Management for configurable CRM workflow design across enterprise accounts',
          'Shipped Dynamic Lead Layouts and Form Configuration to adapt the platform to client-specific sales processes',
          'Built live interactive prototypes to accelerate stakeholder alignment before development',
          'Reduced customer onboarding timelines by ~90%, from 3 months down to 15 days',
        ],
      },
    ],
    links: [
      { label: 'Blueprint Prototype', href: 'https://sirrus3.vercel.app/developer/lead-settings/blueprint-configurator' },
      { label: 'Page Builder', href: 'https://sirrus.vercel.app/settings/details-page-builder' },
      { label: 'sirrus2 GitHub', href: 'https://github.com/ankitbansal2101/sirrus2' },
      { label: 'sirrus GitHub', href: 'https://github.com/ankitbansal2101/sirrus' },
    ],
  },
  {
    slug: 'sirrus-voice',
    name: 'AI Voice Agent & Enterprise Integrations',
    summary:
      'AI Voice Agent with Exotel plus Zoho CRM, PickyAssist WhatsApp, and Servetel Cloud Telephony integrations for enterprise real estate workflows.',
    category: 'company',
    subtitle: 'Product Manager @ Sirrus.ai',
    period: 'Nov 2025 - Present',
    overview:
      'Defined and launched an AI Voice Agent integrated with Exotel, and delivered end-to-end enterprise integrations with Zoho CRM, PickyAssist WhatsApp, and Servetel Cloud Telephony.',
    technologies: [
      'AI Voice Agent, Exotel, Prompt Engineering, Lead Qualification',
      'Zoho CRM, PickyAssist, Servetel, WhatsApp API, Cloud Telephony',
    ],
    highlights: [
      {
        items: [
          'Launched AI Voice Agent with Exotel, designing conversation flows, prompt engineering, and lead qualification logic',
          'Built automated follow-up journeys across CRM, telephony, WhatsApp, and marketing workflows',
          'Delivered Zoho CRM, PickyAssist WhatsApp, and Servetel Cloud Telephony integrations for enterprise data sync',
        ],
      },
    ],
  },
  {
    slug: 'asteria-rag',
    name: 'AI-Powered RAG Chatbot',
    summary:
      "RAG chatbot trained on SkyDeck documentation that reduced support queries by 40% and trial churn by 12%.",
    category: 'company',
    subtitle: 'Product @ Asteria Aerospace',
    period: 'Jan 2025 - Oct 2025',
    overview:
      "Built and deployed an AI-powered chatbot using RAG trained on SkyDeck's help documentation, reducing support queries by 40%, accelerating user learning, and decreasing trial churn by 12%.",
    technologies: ['RAG, LLM, Vector Databases', 'Generative AI, Customer Support Automation'],
    highlights: [
      {
        items: [
          'Reduced support query volume by 40%',
          'Decreased trial churn by 12%',
          'Accelerated user learning and onboarding process',
        ],
      },
    ],
  },
  {
    slug: 'asteria-cv',
    name: 'AI Object Detection & Smart Summaries',
    summary:
      'Automated object detection using Grounding DINO and LLM-powered smart summaries for drone data analysis.',
    category: 'company',
    subtitle: 'Product @ Asteria Aerospace',
    period: 'Jan 2025 - Oct 2025',
    overview:
      'Ideated and launched automated AI object detection using Grounding DINO and automated smart summaries using LLM, enhancing drone data analysis capabilities.',
    technologies: ['Grounding DINO, Computer Vision, LLM', 'Drone Telemetry, Automation'],
    highlights: [
      {
        items: [
          'Implemented computer vision using Grounding DINO for automated object detection',
          'Developed LLM-powered smart summaries for complex data analysis',
          'Accelerated data processing and insight generation for aerospace clients',
        ],
      },
    ],
  },
  {
    slug: 'revenue-recovery',
    name: 'AI-Driven Revenue Recovery',
    summary:
      'Smart Revenue Recovery with AI payment risk models that added $1M revenue and improved on-time payments by 12%.',
    category: 'company',
    subtitle: 'Product @ IPaySmart',
    period: 'Jan 2023 - Dec 2024',
    overview:
      'Owned Smart Revenue Recovery, integrating AI-driven payment risk models with dev and data teams to close a major client in 1 month and improve on-time payments by 12%.',
    technologies: ['AI Risk Models, Payment Analytics', 'Automation, B2B SaaS, Enterprise Sales'],
    highlights: [
      {
        items: [
          'Closed a major client in 1 month and added $1M to revenue',
          'Boosted on-time payments by 12% through intelligent automation',
          'Integrated AI-driven payment risk models with development and data teams',
        ],
      },
    ],
  },
  {
    slug: 'prepaid-billing',
    name: 'Prepaid Billing & Payment Solution',
    summary:
      'Prepaid billing and payment features that drove 25% client adoption uplift and $3M ARR expansion.',
    category: 'company',
    subtitle: 'Product @ Smart Energy Water',
    period: 'Jul 2021 - Jan 2023',
    overview:
      'Partnered with design, dev and QA to launch 5+ new payment features and a Prepaid Billing & Payment solution that expanded ARR by $3M.',
    technologies: ['Payment Solutions, B2B SaaS', 'Prepaid Billing, Client Requirements, User Research'],
    highlights: [
      {
        items: [
          'Launched 5+ new payment features driving 25% uplift in client adoption',
          'Closed 4 enterprise deals in 6 months with prepaid billing solution',
          'Expanded ARR by $3M through strategic feature launches',
        ],
      },
    ],
  },
  {
    slug: 'pmranker',
    name: 'PMRanker',
    summary:
      'Side hustle helping aspiring PMs practice real product challenges with AI-powered feedback. 250+ users and 50+ challenges.',
    category: 'side-hustle',
    subtitle: 'Founder · PM Side Hustle',
    period: '2025 - Present',
    overview:
      'Bootstrapped a side hustle helping aspiring PMs practice real product challenges with AI-powered feedback, growing an organic community while working full-time at Sirrus.ai.',
    technologies: ['Product Management, AI Feedback', 'Community Building, Bootstrapped SaaS'],
    highlights: [
      {
        items: [
          'Built and shipped the platform solo outside of work hours',
          'Created 50+ scenario-based PM challenges and public submission portfolios',
          'Grew to 250+ users organically in the first month through product communities',
        ],
      },
    ],
    links: [
      { label: 'pmranker.com', href: 'https://pmranker.com/' },
      { label: 'GitHub', href: 'https://github.com/ankitbansal2101/PMRank' },
    ],
  },
  {
    slug: 'coding-live',
    name: 'The Coding Live',
    summary:
      'Founded a profitable 1-on-1 online tutoring side hustle, training 500+ students across 10+ countries in coding and data science.',
    category: 'side-hustle',
    subtitle: 'Founder · EdTech Side Hustle',
    period: '2020 - 2023',
    overview:
      'Founded and scaled a profitable 1-on-1 online tutoring side hustle, connecting students globally with personalized coding instruction while working full-time in product.',
    technologies: ['EdTech, Operations, Curriculum Design', 'Tutoring, Scheduling, Customer Acquisition'],
    highlights: [
      {
        items: [
          'Built a team of 5+ expert tutors and ran operations alongside a full-time PM career',
          'Trained 500+ students from 10+ countries in web development and data science',
          'Managed tutor onboarding, curriculum, and customer acquisition end-to-end',
        ],
      },
    ],
  },
];

export const getProject = (slug: string): Project | undefined =>
  projects.find((project) => project.slug === slug);
