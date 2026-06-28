import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { getCareerRole, getLearningsHeading } from '../data/career';
import DetailSections from '../components/ui/DetailSections';
import TerminalCursor from '../components/ui/TerminalCursor';

const CareerDetailPage: React.FC = () => {
  const { slug = '' } = useParams();
  const role = getCareerRole(slug);

  if (!role) {
    return (
      <article>
        <p className="mb-6">
          <Link to="/career" className="text-term-muted hover:text-term-accent">
            ← Back to Career
          </Link>
        </p>
        <h1>Role not found</h1>
        <p>No career details found for &quot;{slug}&quot;.</p>
      </article>
    );
  }

  return (
    <article>
      <p className="mb-6">
        <Link to="/career" className="text-term-muted hover:text-term-accent">
          ← Back to Career
        </Link>
      </p>

      <p className="role-meta">{role.period}</p>
      <h1 className="role-company !mb-1">{role.company}</h1>
      <p className="role-location">{role.location}</p>

      <h2>Role Overview</h2>
      <p>{role.overview}</p>

      <h2>Technologies</h2>
      <ul>
        {role.technologies.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2>{getLearningsHeading(role)}</h2>
      <DetailSections sections={role.learnings} />

      {!role.isCurrent && role.careerHighlights && role.careerHighlights.length > 0 && (
        <>
          <h2>Career Highlights</h2>
          <DetailSections sections={role.careerHighlights} />
        </>
      )}

      <p className="mt-12 text-term-prompt">
        <TerminalCursor />
      </p>
    </article>
  );
};

export default CareerDetailPage;
