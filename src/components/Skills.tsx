import React from 'react';
import { motion } from 'framer-motion';
import {
  Target,
  Brain,
  BarChart3,
  Users,
} from 'lucide-react';
import SectionHeader from './ui/SectionHeader';

const skillCategories = [
  {
    title: 'Product Management',
    icon: Target,
    color: 'text-term-accent border-term-border bg-term-elevated',
    skills: [
      'Strategy & Roadmapping',
      'Agile/Scrum',
      'Stakeholder Management',
      'Requirements Gathering',
      'User Research',
      'Metrics & KPIs',
      'A/B Testing',
      'Prototyping',
      'Cross-functional Leadership',
    ],
  },
  {
    title: 'AI & Technical',
    icon: Brain,
    color: 'text-term-accent border-term-border bg-term-elevated',
    skills: [
      'Generative AI',
      'RAG Applications',
      'Workflow Automation',
      'Python (Advanced)',
      'Machine Learning',
      'LLM Integrations',
      'Computer Vision',
      'Grounding DINO',
      'API Research',
    ],
  },
  {
    title: 'Data & Analytics',
    icon: BarChart3,
    color: 'text-term-accent border-term-border bg-term-elevated',
    skills: [
      'SQL',
      'Product Analytics',
      'Excel',
      'Tableau',
      'Clarity',
      'Data-Driven Decisions',
      'Performance Metrics',
      'Business Intelligence',
    ],
  },
  {
    title: 'Collaboration & Tools',
    icon: Users,
    color: 'text-term-accent border-term-border bg-term-elevated',
    skills: [
      'Jira',
      'Confluence',
      'Figma',
      'Miro',
      'GitHub',
      'Notion',
      'Sprint Planning',
      'Backlog Management',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-24">
      <SectionHeader
        eyebrow="Skills"
        title="Core"
        highlight="Skills"
        subtitle="A balanced toolkit spanning product strategy, AI innovation, data analytics, and cross-functional collaboration."
      />

      <motion.div
        className="grid md:grid-cols-2 gap-5 sm:gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        {skillCategories.map((category) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className="section-card p-6 sm:p-7 transition-shadow duration-300 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`border p-2.5 ${category.color}`}>
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-term-text">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="tag transition-colors duration-200 group-hover:border-term-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Skills;
