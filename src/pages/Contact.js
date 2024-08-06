import React, { useState, useEffect } from "react";
import "../css/pages/contact.css";
import AccountLinks from "../components/AccountLinks";
import ContactForm from "../components/ContactForm";
const Contact = () => {
  const [loadState, setLoadState] = useState(false);
  useEffect(() => {
    setLoadState(true);
  }, []);
  return (
    <div>
      <div className="page-header">
        <div className="line"></div>
        <h1>Contact</h1>
        <div className="line"></div>
      </div>

      <div className="contact-section">
        <div className="form-section">
          <p>Get in touch with me: </p>
          <ContactForm />
        </div>
        <p>OR</p>
        <div className="link-section">
          <p>Find Me on: </p>
          <AccountLinks loadState={loadState} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
