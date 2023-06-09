import React from 'react'
import Layout from '../Layout/Layout';
import './Contact.css'

const Contact = () => {
    return (
        <Layout>
            <div className="contact-container">
                <h1 className="contact-title">Feel free to reach out!</h1>
                <p className="contact-subtitle">Quick Chat? DM me on
                    <span>
                        <a href='https://www.linkedin.com/in/taha-moukhlisse/' className="linkedin-text" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
                    </span>

                </p>
                <div className="contact-form">
                    <h2 className="form-title">Leave a Message</h2>
                    <form>
                        <div className="form-group">
                            <label  htmlFor="name">Name</label>
                            <input type="text" id="name" name="name"required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Phone number</label>
                            <input type="email" id="email" name="email"  />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" required></textarea>
                        </div>
                        <button type="submit" className="submit-button">Submit</button>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;