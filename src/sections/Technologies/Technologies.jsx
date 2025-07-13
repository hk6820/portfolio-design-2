import "./Technologies.css";

const Technologies = ({ languages = [] }) => {
  if (!languages.length) return null;

  return (
    <section className="programming-section" id="languages">
      <h2 className="section-title">Programming Languages</h2>
      <div className="programming-grid">
        {languages.map((lang, index) => (
          <div className="programming-card" key={index}>
            <h3>{lang.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;