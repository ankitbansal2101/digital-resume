import React from 'react';
import { skillGroups } from '../data/skills';

const SkillsPage: React.FC = () => {
  return (
    <article>
      <h1>Skills</h1>

      {skillGroups.map((group) => (
        <section key={group.title} className="career-entry">
          <h2>{group.title}</h2>
          <ul>
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ))}
    </article>
  );
};

export default SkillsPage;
