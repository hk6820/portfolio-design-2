
import './Contact.css';

const Contact = ({
  heading,
  message,
  email,
  linkedIn,
  github,
  twitter,
  phone,
  location
}) => {
  if (!heading && !message && !email && !linkedIn && !github && !twitter && !phone && !location)
    return null;

  return (
    <section className="contact-section" id="contact">
      {heading && <h2 className="contact-title">{heading}</h2>}
      {message && <p className="contact-message">{message}</p>}

      <div className="contact-info">
        {email && (
          <a className="contact-button" href={`mailto:${email}`}>
            📧 {email}
          </a>
        )}
        {phone && (
          <a className="contact-button" href={`tel:${phone}`}>
            📱 {phone}
          </a>
        )}
        {linkedIn && (
          <a
            className="contact-button"
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 LinkedIn
          </a>
        )}
        {github && (
          <a
            className="contact-button"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            🐙 GitHub
          </a>
        )}
        {twitter && (
          <a
            className="contact-button"
            href={twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            🐦 Twitter
          </a>
        )}
      
      </div>
    </section>
  );
};

export default Contact;
