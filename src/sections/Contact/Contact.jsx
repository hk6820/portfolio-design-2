import React from 'react';
import './Contact.css';

const Contact = ({ heading, message, email }) => {
  if (!heading && !message && !email) return null;

  return (
    <section className="contact-section" id="contact">
      {heading && <h2 className="contact-title">{heading}</h2>}
      {message && <p className="contact-message">{message}</p>}
      {email && (
        <a className="contact-button" href={`mailto:${email}`}>
          {email}
        </a>
      )}
    </section>
  );
};

export default Contact;
