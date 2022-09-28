import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h3>Like what you see?</h3>
      <p>
        Check out my{" "}
        <a
          className="contact-container-link"
          href="https://www.linkedin.com/in/deondre-garcia/"
          target="_blank"
        >
          LinkedIn
        </a>{" "}
        ,{" "}
        <a
          className="contact-container-link"
          href="https://github.com/deondregarcia"
          target="_blank"
        >
          GitHub
        </a>
        , or shoot me an email at{" "}
        <a
          className="contact-container-link"
          href="mailto:deondre.garcia@yahoo.com"
        >
          deondre.garcia@yahoo.com
        </a>
        !
      </p>
    </div>
  );
};

export default Contact;
