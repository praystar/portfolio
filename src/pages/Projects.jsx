import React, { useState } from 'react';
import { items } from '../components/websites/constants';
import '../styles/Projects.css';

function Projects() {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <div className="projects-wrapper">
      <div className="projects-container">
        {items.slice(0, 8).map((item, index) => (
          <div
            key={index}
            className={`project-slide ${activeIndex === index ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
            onMouseEnter={() => setActiveIndex(index)}
          >
            <img src={item.url} alt={item.title} className="project-image" />
            {activeIndex === index && (
              <div className="project-overlay">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
