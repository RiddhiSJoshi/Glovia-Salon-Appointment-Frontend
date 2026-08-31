import { useState } from "react";

import "./Contact.scss";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);
  };

  return (
    <div className="contact-page">

      <section className="page-hero">
        <div className="container">

          <span className="section-label">
            CONTACT
          </span>

          <h1>
            We'd love to
            <span> hear from you.</span>
          </h1>

          <p>
            Have a question about Glōvia? Send us a
            message.
          </p>

        </div>
      </section>

      <section className="section">
        <div className="container contact-container">

          <div className="contact-info">

            <span className="section-label">
              GET IN TOUCH
            </span>

            <h2>
              Let's talk.
            </h2>

            <p>
              Whether you're a customer looking for a
              salon or a salon owner interested in joining
              Glōvia, we're here to help.
            </p>

            <div className="contact-details">
              <div>
                <strong>Email</strong>
                <span>
                  hello@glovia.com
                </span>
              </div>

              <div>
                <strong>Location</strong>
                <span>
                  Chennai, India
                </span>
              </div>
            </div>

          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <label>
              Name
              <input
                type="text"
                placeholder="Your name"
                required
              />
            </label>

            <label>
              Email
              <input
                type="email"
                placeholder="you@example.com"
                required
              />
            </label>

            <label>
              Message
              <textarea
                rows="5"
                placeholder="How can we help?"
                required
              />
            </label>

            <button
              type="submit"
              className="primary-btn"
            >
              Send Message
            </button>

            {submitted && (
              <div className="success-message">
                Thank you! Your message has been received.
              </div>
            )}

          </form>

        </div>
      </section>

    </div>
  );
}

export default Contact;