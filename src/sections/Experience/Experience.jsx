import React from 'react';
import './Experience.css';

const Experience = ({ experience = [] }) => {
  if (!experience.length) return null;

  return (
    <section className="experience-section" id="experience">
      <h2 className="experience-title">Experience</h2>
      <div className="experience-grid">
        {experience.map((job, index) => (
          job?.title && job?.employer && (
            <div className="experience-card" key={index}>
              <h3>{job.title}</h3>
              <p>{job.employer}</p>
              {job.years && <span className="experience-years">{job.years}</span>}
              {job.description && <p className="experience-description">{job.description}</p>}
            </div>
          )
        ))}
      </div>
    </section>
  );
};

export default Experience;
