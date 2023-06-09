import React from 'react';
import Layout from '../Layout/Layout';
import './Contact.css';

const Contact = () => {
    

    return (
        <Layout>
      <div className="contact-container">
        <h1 className="contact-title">Feel free to reach out!</h1>
        <p className="contact-subtitle">
          Quick Chat? DM me on &nbsp;
          <span>
            <a
              href="https://www.linkedin.com/in/taha-moukhlisse/"
              className="linkedin-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </span>
        </p>
        <div className="contact-form">
          <h2 className="form-title">Leave a Message</h2>
          <form>
            <div className="form-group">
              <input type="text" id="name" name="name" placeholder="Name" required />
            </div>
            <div className="form-group">
              <input type="email" id="email" name="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <input type="tel" id="phone" name="phone" placeholder="Phone number" />
            </div>
            <div className="form-group">
              <textarea id="message" name="message" placeholder="Message" required></textarea>
            </div>
            <button type="submit" className="submit-button">
              <span className="submit-text">SUBMIT</span>
            </button>
          </form>
        </div>
      </div>
    </Layout>
    );
};

export default Contact;
