import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProject } from '../data/projects';
import DetailSections from '../components/ui/DetailSections';
import TerminalCursor from '../components/ui/TerminalCursor';

const ProjectDetailPage: React.FC = () => {
  const { slug = '' } = useParams();
  const project = getProject(slug);

  if (!project) {
    return (
      <article>
        <p className="mb-6">
          <Link to="/projects" className="text-term-muted hover:text-term-accent">
            ← Back to Projects
          </Link>
        </p>
        <h1>Project not found</h1>
        <p>No project details found for &quot;{slug}&quot;.</p>
      </article>
    );
  }

  return (
    <article>
      <p className="mb-6">
        <Link to="/projects" className="text-term-muted hover:text-term-accent">
          ← Back to Projects
        </Link>
      </p>

      <span
        className={`project-category project-category--${
          project.category === 'company' ? 'company' : 'side-hustle'
        }`}
      >
        {project.category === 'company' ? 'company project' : 'side hustle'}
      </span>
      <p className="role-meta">{project.period}</p>
      <h1 className="role-company !mb-1">{project.name}</h1>
      <p className="role-location">{project.subtitle}</p>

      <h2>Overview</h2>
      <p>{project.overview}</p>

      <h2>Technologies</h2>
      <ul>
        {project.technologies.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2>Key Highlights</h2>
      <DetailSections sections={project.highlights} />

      {project.links && project.links.length > 0 && (
        <>
          <h2>Links</h2>
          <ul>
            {project.links.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}

      <p className="mt-12 text-term-prompt">
        <TerminalCursor />
      </p>
    </article>
  );
};

export default ProjectDetailPage;
