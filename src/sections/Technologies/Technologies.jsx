import "./Technologies.css";
import { motion } from "framer-motion";
const Technologies = ({ languages = [],sectionTitle }) => {
  if (!languages.length) return null;

  return (
    <section className="programming-section" id="languages">
      <h2 className="section-title">{sectionTitle}</h2>
      <div className="programming-grid">
        {languages.map((lang, index) => (
          <motion.button
            className="programming-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            key={index}
          >
            {lang.name}
          </motion.button>
        ))}
      </div>
    </section>
  );
};

export default Technologies;