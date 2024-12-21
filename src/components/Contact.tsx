import React from "react";
import ContactCSS from "./../assets/css/Contact.module.css";

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <h2>contact</h2>
      <div className={ContactCSS.contactWrapper}>
        <p className={ContactCSS.contactDescription}>
          I'm always open to new opportunities and collaborations. Feel free to
          reach out to me via email, or connect with me on LinkedIn to send a
          message directly. I'm happy to connect and discuss how we can work
          together!
        </p>
        <p className={ContactCSS.contactDescription}>
          email:{" "}
          <a href="mailto:jimmydagumjr@gmail.com">jimmydagumjr@gmail.com</a>
        </p>
        <p className={ContactCSS.contactDescription}>
          linkedin:
          <a
            href="https://www.linkedin.com/in/jimmy-dagum-jr"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.linkedin.com/in/jimmy-dagum-jr
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
