import './Education.css';

const Education = ({educationData,sectionTitle}) => {
  return (
    <section className="education-section" id="education">
      <h2 className="education-title">{sectionTitle}</h2>
      <div className="education-grid">
        {educationData.map((edu, index) => (
          <div className="education-card" key={index}>
            <h3>{edu.institution}</h3>
            <p className="degree">{edu.degree}</p>
            <p className="duration">{edu.duration}</p>
            <p className="description">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
