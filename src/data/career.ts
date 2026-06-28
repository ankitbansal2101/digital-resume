export interface DetailSection {
  title?: string;
  intro?: string;
  items: string[];
}

export interface CareerRole {
  slug: string;
  period: string;
  company: string;
  title: string;
  location: string;
  isCurrent: boolean;
  overview: string;
  technologies: string[];
  learnings: DetailSection[];
  careerHighlights?: DetailSection[];
}

export const careerRoles: CareerRole[] = [
  {
    slug: 'sirrus-ai',
    period: 'Nov 2025 - Present',
    company: 'Sirrus.ai',
    title: 'Product Manager',
    location: 'Mumbai, India',
    isCurrent: true,
    overview:
      'Own the Engagement & Martech product roadmap for a B2B SaaS CRM platform serving real estate developers. Drive strategy across lead management, customer journeys, AI-powered engagement, and workflow automation used by multiple enterprise customers.',
    technologies: [
      'Product: Roadmapping, User Research, Stakeholder Management, Enterprise SaaS',
      'AI: Voice Agents, LLM Integrations, RAG, AI Prototyping, Prompt Engineering',
      'Integrations: Exotel, Zoho CRM, PickyAssist, Servetel Cloud Telephony',
      'Tools: Figma, Jira, Confluence, GitHub',
    ],
    learnings: [
      {
        items: [
          'Deep client-facing discovery with CMOs, Sales Heads, and Customer Success teams across 8+ on-site visits in proptech',
          'Using AI-generated prototypes (Blueprint Configurator, Details Page Builder) to align enterprise stakeholders before development',
          'Orchestrating voice, WhatsApp, CRM, and telephony workflows as one engagement stack for real estate developers',
          'Leading configurable CRM architecture work that cut enterprise onboarding from 3 months to 15 days',
          'Building and launching an AI Voice Agent with Exotel, including conversation flows, prompt engineering, and lead qualification logic',
        ],
      },
    ],
  },
  {
    slug: 'asteria-aerospace',
    period: 'Jan 2025 - Oct 2025',
    company: 'Asteria Aerospace',
    title: 'Associate 2 Product Manager',
    location: 'Bangalore, India (Remote)',
    isCurrent: false,
    overview:
      'Defined product strategy and roadmap for drone data workflows, driving a 22% increase in client adoption while leading AI initiatives across support automation, computer vision, and LLM-powered summaries.',
    technologies: [
      'AI: RAG, LLM, Grounding DINO, Computer Vision, Vector Databases',
      'Product: Agile/Scrum, Sprint Planning, User Research, Backlog Management',
      'Domain: Drone Data Workflows, Aerospace SaaS, Telemetry Analytics',
    ],
    learnings: [
      {
        items: [
          'Building RAG chatbots on internal documentation to reduce support load and trial churn in a complex aerospace product',
          'Working with domain-heavy engineering teams on drone telemetry and computer vision use cases',
          'Shipping AI POCs quickly to validate product direction before full engineering investment',
        ],
      },
    ],
    careerHighlights: [
      {
        items: [
          'Defined product strategy and roadmap for drone data workflows, driving a 22% increase in client adoption',
          'Built and deployed an AI-powered RAG chatbot reducing support queries by 40% and trial churn by 12%',
          'Launched automated AI object detection using Grounding DINO and smart summaries using LLM',
          'Drove backlog grooming, sprint planning, and user feedback loops ensuring 95% on-time releases',
        ],
      },
    ],
  },
  {
    slug: 'ipaysmart',
    period: 'Jan 2023 - Dec 2024',
    company: 'IPaySmart (Smart Energy Water)',
    title: 'Associate 2 Product Manager',
    location: 'Noida, India',
    isCurrent: false,
    overview:
      'Owned Smart Revenue Recovery and enterprise payment products, integrating AI-driven payment risk models with dev and data teams to unlock revenue, improve collections, and scale B2B adoption.',
    technologies: [
      'AI: Payment Risk Models, Automation, Predictive Analytics',
      'Product: B2B SaaS, Backlog Management, Enterprise Sales, Sprint Execution',
      'Tools: Jira, Confluence, SQL, Tableau, Excel',
    ],
    learnings: [
      {
        title: 'AI-driven revenue recovery',
        items: [
          'Translating payment behavior data into product interventions that measurably improve collections',
          'Coordinating AI, data, and engineering teams on revenue recovery automation',
        ],
      },
      {
        title: 'Enterprise B2B delivery',
        items: [
          'Balancing enterprise client requirements with platform scalability across utility and property domains',
          'Running sprint execution across distributed teams while improving velocity by 20%',
        ],
      },
    ],
    careerHighlights: [
      {
        items: [
          'Closed a major client in 1 month and added $1M to revenue through Smart Revenue Recovery',
          'Boosted on-time payments by 12% through intelligent automation and risk modeling',
          'Launched Landlord Payments portal adopted by 4 enterprise clients, contributing 15% to ARR growth',
          'Led cross-functional delivery of enterprise-grade payment solutions for property managers',
        ],
      },
    ],
  },
  {
    slug: 'smart-energy-water',
    period: 'Jul 2021 - Jan 2023',
    company: 'Smart Energy Water',
    title: 'Associate Product Manager',
    location: 'Noida, India',
    isCurrent: false,
    overview:
      'Partnered with design, engineering, and QA to launch payment features and billing solutions for enterprise utility clients, expanding ARR by $3M and driving a 25% uplift in client adoption.',
    technologies: [
      'Product: Requirements Gathering, User Research, Roadmapping, Client Delivery',
      'Domain: Payments, Billing, B2B SaaS, Utilities, Prepaid Systems',
      'Tools: Figma, Jira, SQL, Excel',
    ],
    learnings: [
      {
        items: [
          'End-to-end ownership from client requirements to feature launch in a B2B utilities context',
          'Creating new revenue streams through prepaid billing and payment modules',
          'Working closely with enterprise clients to translate operational pain into shippable product scope',
        ],
      },
    ],
    careerHighlights: [
      {
        title: 'Payment features and billing',
        items: [
          'Launched 5+ new payment features driving 25% uplift in client adoption',
          'Designed and delivered a Prepaid Billing & Payment solution that closed 4 enterprise deals in 6 months',
          'Expanded ARR by $3M through strategic feature launches and client-focused enhancements',
        ],
      },
    ],
  },
  {
    slug: 'collegedunia',
    period: 'Jan 2020 - Jun 2020',
    company: 'Collegedunia',
    title: 'Business Analyst Intern',
    location: 'Gurgaon, India',
    isCurrent: false,
    overview:
      'Automated data workflows and built analytics pipelines to enrich college listings, monitor admission portals, and support editorial and SEO efforts with data-driven insights.',
    technologies: ['Python', 'SQL', 'Web Scraping', 'Data Analytics', 'Automation'],
    learnings: [
      {
        items: [
          'First exposure to using Python and SQL to automate repetitive data workflows at scale',
          'Building dashboards that influence editorial and growth decisions in an EdTech environment',
        ],
      },
    ],
    careerHighlights: [
      {
        items: [
          'Led web scraping and data extraction to enrich database with 200+ verified college listings',
          'Built automation scripts to monitor admission portals and speed up content updates',
          'Delivered dashboards and reports to guide editorial and SEO efforts with data-driven insights',
        ],
      },
    ],
  },
];

export const education = {
  slug: 'education',
  degree: 'B.Tech – Civil Engineering',
  school: 'Punjab Engineering College, Chandigarh',
  period: '2017 - 2021',
  graduated: 'May 2021',
  note: 'Engineering background that sharpened analytical thinking, structured problem-solving, and the ability to break down complex systems, skills that translate directly into product management.',
};

export const getCareerRole = (slug: string): CareerRole | undefined =>
  careerRoles.find((role) => role.slug === slug);

export const getLearningsHeading = (role: CareerRole): string => {
  if (role.isCurrent) return 'New things I am learning';
  if (role.slug === 'smart-energy-water' || role.slug === 'collegedunia') {
    return 'Things I learnt during this time';
  }
  return 'New things I learnt during this time';
};
