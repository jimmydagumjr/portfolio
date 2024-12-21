import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <h2>contact</h2>
      <p>Email: <a href="mailto:jimmy@example.com">jimmy@example.com</a></p>
      <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
      <p>
        Find me on{' '}
        <a href="https://www.linkedin.com/in/jimmy-dagum-jr" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </p>
    </section>
  );
};

export default Contact;
