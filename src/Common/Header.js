import { useState } from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <span className="logo-mark">G</span>

          <span className="logo-text">
            Glōvia
          </span>
        </Link>

        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <nav className={`navigation ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          <Link to="/about" onClick={closeMenu}>
            About
          </Link>

          <Link to="/services" onClick={closeMenu}>
            Services
          </Link>

          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>

          <Link
            to="/login"
            className="header-login"
            onClick={closeMenu}
          >
            Login
          </Link>

          <Link
            to="/login"
            className="header-book"
            onClick={closeMenu}
          >
            Book Appointment
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;