import { Link } from "react-router-dom";

import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-container">

        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span>G</span>
            Glōvia
          </Link>

          <p>
            Your beauty. Your style. Your time.
          </p>
        </div>

        <div className="footer-column">
          <h4>Explore</h4>

          <Link to="/about">
            About
          </Link>

          <Link to="/services">
            Services
          </Link>

          <Link to="/contact">
            Contact
          </Link>
        </div>

        <div className="footer-column">
          <h4>Portals</h4>

          <Link to="/login">
            Customer Login
          </Link>

          <a href="http://localhost:3002">
            Salon Dashboard
          </a>

          <a href="http://localhost:3003">
            Admin Dashboard
          </a>
        </div>

        <div className="footer-column">
          <h4>Contact</h4>

          <span>
            hello@glovia.com
          </span>

          <span>
            Chennai, India
          </span>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="container">
          © 2026 Glōvia. All rights reserved.
        </div>
      </div>

    </footer>
  );
}

export default Footer;