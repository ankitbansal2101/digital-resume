import React from 'react';
import { Link } from 'react-router-dom';
import { projects, Project } from '../data/projects';

type ProjectVariant = 'company' | 'side-hustle';

const categoryLabel: Record<ProjectVariant, string> = {
  company: 'company project',
  'side-hustle': 'side hustle',
};

const ProjectEntry: React.FC<{ project: Project; variant: ProjectVariant }> = ({
  project,
  variant,
}) => (
  <section className={`career-entry project-entry project-entry--${variant}`}>
    <span className="project-category">{categoryLabel[variant]}</span>
    <p className="role-meta">{project.period}</p>
    <p className="role-company">{project.name}</p>
    <p className="role-location">{project.subtitle}</p>

    <h2>Overview</h2>
    <p>{project.summary}</p>

    <p className="mt-4">
      <Link to={`/projects/details/${project.slug}`} className="career-detail-link">
        View details →
      </Link>
    </p>
  </section>
);

const ProjectGroup: React.FC<{
  variant: ProjectVariant;
  title: string;
  pathLabel: string;
  items: Project[];
}> = ({ variant, title, pathLabel, items }) => (
  <div className={`projects-group projects-group--${variant}`}>
    <div className="projects-group-header">
      <p className="projects-group-path">{pathLabel}</p>
      <h2 className="projects-group-heading">{title}</h2>
    </div>
    {items.map((project) => (
      <ProjectEntry key={project.slug} project={project} variant={variant} />
    ))}
  </div>
);

const ProjectsPage: React.FC = () => {
  const companyProjects = projects.filter((p) => p.category === 'company');
  const sideHustles = projects.filter((p) => p.category === 'side-hustle');

  return (
    <article>
      <h1>Projects</h1>

      <ProjectGroup
        variant="company"
        title="Company Projects"
        pathLabel="$ ls ./company-projects/"
        items={companyProjects}
      />

      <ProjectGroup
        variant="side-hustle"
        title="Side Hustles"
        pathLabel="$ ls ./side-hustles/"
        items={sideHustles}
      />
    </article>
  );
};

export default ProjectsPage;
