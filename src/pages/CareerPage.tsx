import React from 'react';
import { Link } from 'react-router-dom';
import { careerRoles, education } from '../data/career';

const CareerPage: React.FC = () => {
  return (
    <article>
      <h1>Career Journey</h1>

      {careerRoles.map((role) => (
        <section key={role.slug} className="career-entry">
          <p className="role-meta">{role.period}</p>
          <p className="role-company">{role.company}</p>
          <p className="role-location">{role.location}</p>

          <h2>Role Overview</h2>
          <p>{role.overview}</p>

          <p className="mt-4">
            <Link to={`/career/details/${role.slug}`} className="career-detail-link">
              View details →
            </Link>
          </p>
        </section>
      ))}

      <section className="career-entry">
        <p className="role-meta">{education.period}</p>
        <p className="role-company">{education.school}</p>
        <p className="role-location">Graduated {education.graduated}</p>

        <h2>{education.degree}</h2>
        <p>{education.note}</p>
      </section>
    </article>
  );
};

export default CareerPage;
