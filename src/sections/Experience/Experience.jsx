import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Experience.css";

const Experience = ({ experience = [], sectionTitle }) => {
  if (!experience.length) return null;

  return (
    <section className="experience-section" id="experience">
      <h2 className="experience-title">{sectionTitle}</h2>
      <div className="experience-grid">
        {experience.map(
          (job, index) =>
            job?.title &&
            job?.employer && (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <ExperienceCard job={job} />
              </motion.div>
            )
        )}
      </div>
    </section>
  );
};

const ExperienceCard = ({ job }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(!expanded);

  const descriptionLines = job.description?.split("\n") || [];
  const isLong = descriptionLines.length > 3;

  return (
    <motion.div
      className="experience-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h3>{job.title}</h3>
      <p>{job.employer}</p>

      {job.techStack && (
        <div className="experience-techstack">
          <strong>Tech Stack:</strong> <span>{job.techStack.join(", ")}</span>
        </div>
      )}
      {job.years && <span className="experience-years">{job.years}</span>}

      {descriptionLines.length > 0 && (
        <motion.ul
          layout
          className={`experience-description ${
            expanded ? "expanded" : "collapsed"
          }`}
        >
          {descriptionLines
            .slice(0, expanded ? descriptionLines.length : 3)
            .map((line, i) => (
              <li key={i}>{line}</li>
            ))}
        </motion.ul>
      )}

      {isLong && (
        <motion.button
          className="read-more-btn"
          onClick={toggleExpanded}
          whileTap={{ scale: 0.97 }}
        >
          {expanded ? "Show Less" : "Read More"}
        </motion.button>
      )}
    </motion.div>
  );
};

export default Experience;
