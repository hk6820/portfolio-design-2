import { useState, useEffect } from 'react';
import './Projects.css';

const generateLoopingGroups = (projects) => {
  const result = [];
  const isMobile = window.innerWidth < 768;
  const groupSize = isMobile ? 1 : 2;
  const len = projects.length;

  for (let i = 0; i < len; i += groupSize) {
    const group = projects.slice(i, i + groupSize);
    if (group.length < groupSize && len > groupSize) {
      // Wrap to start if needed
      group.push(...projects.slice(0, groupSize - group.length));
    }
    result.push(group);
  }

  return result;
};



const Projects = ({ projects = [],sectionTitle }) => {
  const [groupedProjects, setGroupedProjects] = useState(() =>
  generateLoopingGroups(projects)
);
const [currentIndex, setCurrentIndex] = useState(0);

useEffect(() => {
  const handleResize = () => {
    setGroupedProjects(generateLoopingGroups(projects));
    setCurrentIndex(0); // Reset to first
  };

  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, [projects]);
  if (!projects.length) return null;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === groupedProjects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? groupedProjects.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">{sectionTitle}</h2>

      <div className="slider-container">
        <button className="arrow left-arrow" onClick={prevSlide}>
          ‹
        </button>

        <div className="slider-wrapper">
          <div
            className="slider-track"
            style={{
              transform: `translateX(-${currentIndex * (100 / groupedProjects.length)}%)`,
              width: `${groupedProjects.length * 100}%`,
            }}
          >
            {groupedProjects.map((group, index) => (
              <div
                className="project-slide"
                key={index}
                style={{ width: `${100 / groupedProjects.length}%` }}
              >
                <div className="project-group">
                  {group.map((project, i) => (
                    <div className="project-card" key={i}>
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
                        <p>{project.description}</p>
                        {project.tags && (
                          <div className="project-tags">
                            {project.tags.map((tag, j) => (
                              <span key={j} className="project-tag">
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="project-button"
                          >
                            View Project
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="arrow right-arrow" onClick={nextSlide}>
          ›
        </button>
      </div>
    </section>
  );
};

export default Projects;
