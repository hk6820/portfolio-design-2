import React from 'react';
import './Projects.css';

const Projects = ({ projects = [] }) => {
  if (!projects.length) return null;

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) =>
          project?.title ? (
            <div className="project-card" key={index}>
              {project.image && (
  <div className="project-image-wrapper">
    <img
      src={project.image}
      alt={project.title}
      className="project-image"
    />
  </div>
)}

              <div className="project-content">
                <h3>{project.title}</h3>
                {project.description && <p>{project.description}</p>}
                {project.tags && (
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button"
                  >
                    View Project
                  </a>
                )}
              </div>
            </div>
          ) : null
        )}
      </div>
    </section>
  );
};

export default Projects;
