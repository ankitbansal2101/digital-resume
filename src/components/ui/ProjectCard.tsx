import React from 'react';
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
    <div className="border border-term-border bg-term-bg">
      <div className="border-b border-term-border px-5 py-4 sm:px-6 sm:py-5">
        <p className="text-term-dim text-xs mb-1">{item.subtitle}</p>
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <h4 className="text-term-accent text-lg sm:text-xl font-semibold leading-tight">
              {item.title}
            </h4>
            <div className="mt-2 inline-flex items-center gap-1.5 text-xs text-term-muted">
              <Calendar size={12} />
              {item.period}
            </div>
          </div>
          <div className="shrink-0 text-term-accent">{item.icon}</div>
        </div>

        {item.aiTools && (
          <div className="mt-3 flex flex-wrap gap-2">
            {item.aiTools.map((tool) => (
              <span
                key={tool.name}
                title={tool.name}
                className="tag text-[10px]"
              >
                {tool.name}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="p-5 sm:p-6">
        <p className="text-sm leading-relaxed text-term-muted mb-5">{item.description}</p>

        <div className="grid lg:grid-cols-2 gap-5 mb-5">
          {item.metrics && (
            <div>
              <h5 className="text-xs uppercase tracking-wider text-term-dim mb-3">
                // metrics
              </h5>
              <div className="grid grid-cols-3 gap-2">
                {item.metrics.map((metric) => (
                  <div key={metric.label} className="metric-card p-2">
                    <div className="flex justify-center mb-1 text-term-accent">{metric.icon}</div>
                    <div className="font-semibold text-sm text-term-text text-center">{metric.value}</div>
                    <div className="text-[10px] text-term-dim text-center leading-tight mt-0.5">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className={item.metrics ? '' : 'lg:col-span-2'}>
            <h5 className="text-xs uppercase tracking-wider text-term-dim mb-3">
              // achievements
            </h5>
            <ul className="space-y-2">
              {item.achievements.map((achievement) => (
                <li key={achievement} className="flex items-start gap-2 text-sm text-term-muted">
                  <span className="text-term-accent shrink-0">&gt;</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border border-term-border p-4 space-y-3">
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
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    link.type === 'github'
                      ? 'btn-secondary text-xs px-3 py-1.5'
                      : 'btn-primary text-xs px-3 py-1.5'
                  }
                >
                  {link.type === 'github' ? <Github size={13} /> : <ExternalLink size={13} />}
                  {link.label.toLowerCase()}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
