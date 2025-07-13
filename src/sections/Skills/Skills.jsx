import React from 'react';
import './Skills.css';

const Skills = ({ skills = [] }) => {
  if (!skills.length) return null;

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) =>
          skill?.title ? (
            <div className="skill-card" key={index}>
              {skill.icon && <div className="skill-icon">{skill.icon}</div>}
              <h3>{skill.title}</h3>
              {skill.description && <p>{skill.description}</p>}
              {skill.buttonText && (
                <button
                  className="skill-button"
                  onClick={() => skill.onClick?.()}
                >
                  {skill.buttonText}
                </button>
              )}
            </div>
          ) : null
        )}
      </div>
    </section>
  );
};

export default Skills;
