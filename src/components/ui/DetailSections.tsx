import React from 'react';
import type { DetailSection } from '../../data/career';

const DetailSections: React.FC<{ sections: DetailSection[] }> = ({ sections }) => (
  <>
    {sections.map((section) => (
      <div key={section.title ?? section.items[0]} className="detail-section-block">
        {section.title && <h3>{section.title}</h3>}
        {section.intro && <p>{section.intro}</p>}
        <ul>
          {section.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    ))}
  </>
);

export default DetailSections;
