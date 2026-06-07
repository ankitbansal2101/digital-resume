import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ExternalLink, Github } from 'lucide-react';

export interface ProjectCardItem {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  description: string;
  achievements: string[];
  tags: string[];
  gradient: string;
  icon: React.ReactNode;
  metrics?: {
    label: string;
    value: string;
    icon: React.ReactNode;
  }[];
  aiTools?: {
    name: string;
    icon: React.ReactNode;
  }[];
  link?: string | null;
  github?: string | null;
  links?: {
    label: string;
    href: string;
    type: 'demo' | 'github';
  }[];
}

interface ProjectCardProps {
  item: ProjectCardItem;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ item }) => {
  const actionLinks = [
    ...(item.links ?? []),
    ...(item.link ? [{ label: 'View', href: item.link, type: 'demo' as const }] : []),
    ...(item.github && !item.links?.some((l) => l.href === item.github)
      ? [{ label: 'GitHub', href: item.github, type: 'github' as const }]
      : []),
  ];

  return (
    <div className="overflow-hidden flex flex-col h-full rounded-xl border border-brand-200/60 bg-cream-50 shadow-sm">
      <div className={`relative bg-gradient-to-br ${item.gradient} px-6 py-5 sm:px-8 sm:py-6 text-white overflow-hidden`}>
        <div className="absolute inset-0 hero-grid opacity-20" />
        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />

        <div className="relative z-10 flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-white/70 mb-1">
              {item.subtitle}
            </p>
            <h4 className="text-xl sm:text-2xl font-bold leading-tight">{item.title}</h4>
            <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/90">
              <Calendar size={12} />
              {item.period}
            </div>
          </div>
          <div className="shrink-0 rounded-2xl border border-white/15 bg-white/10 p-3 backdrop-blur-sm">
            {item.icon}
          </div>
        </div>

        {item.aiTools && (
          <div className="relative z-10 mt-4 flex flex-wrap gap-2">
            {item.aiTools.map((tool) => (
              <span
                key={tool.name}
                title={tool.name}
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/10 px-2 py-1 text-xs text-white/90"
              >
                <span className="w-3.5 h-3.5">{tool.icon}</span>
                {tool.name}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="flex-1 p-6 sm:p-8">
        <p className="text-sm sm:text-base leading-relaxed text-stone-600 mb-6">{item.description}</p>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {item.metrics && (
            <div>
              <h5 className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-3">
                Impact Metrics
              </h5>
              <div className="grid grid-cols-3 gap-2">
                {item.metrics.map((metric) => (
                  <div key={metric.label} className="metric-card p-3">
                    <div className="flex justify-center mb-1">{metric.icon}</div>
                    <div className="font-bold text-sm text-brand-950 text-center">{metric.value}</div>
                    <div className="text-[10px] sm:text-xs text-stone-500 text-center leading-tight mt-0.5">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className={item.metrics ? '' : 'lg:col-span-2'}>
            <h5 className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-3">
              Key Achievements
            </h5>
            <ul className="space-y-2">
              {item.achievements.map((achievement) => (
                <li key={achievement} className="flex items-start gap-2.5 text-sm text-stone-600">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-xl border border-brand-100 bg-cream-100/80 p-4 space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <span key={tag} className="tag text-xs">
                {tag}
              </span>
            ))}
          </div>

          {actionLinks.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-1">
              {actionLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    link.type === 'github'
                      ? 'btn-secondary text-xs px-3 py-2 text-brand-700 border-brand-100 bg-cream-50'
                      : 'btn-primary text-xs px-3 py-2'
                  }
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {link.type === 'github' ? <Github size={13} /> : <ExternalLink size={13} />}
                  {link.label}
                </motion.a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
