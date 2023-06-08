import React, { useState } from 'react';
import './Header.css';
import logo from './logo.png';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand ml-auto" href="/">
            <img src={logo} alt="Logo" width="30" height="30" className="navbar-brand-img" />
          </a>
          <button
            className={`navbar-toggler ${isNavOpen ? 'collapsed' : ''}`}
            type="button"
            onClick={toggleNav}
            aria-expanded={isNavOpen ? 'true' : 'false'}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link nav-link-animate" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-animate" href="/">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-animate" href="/">
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-animate" href="/">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
