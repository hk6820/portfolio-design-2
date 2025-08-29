import { motion } from "framer-motion";
import "./Hero.css";

const Hero = ({
  title,
  subtitle,
  buttonText,
  onButtonClick,
  avatar,
  description,
}) => {
  if (!title && !subtitle && !buttonText) return null;

  return (
    <section className="hero-section" id="home">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {subtitle}
        </motion.p>
        {title && <h1 className="hero-title">{title}</h1>}
        {description && <p className="hero-description">{description}</p>}
        {buttonText && (
          <motion.a
            className="hero-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/assets/Your_CV.pdf"
            download
          >
            {buttonText}
          </motion.a>
        )}
      </motion.div>

      {avatar && (
        <motion.div
          className="hero-avatar"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
        >
          <img src={avatar} alt="Profile" />
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
