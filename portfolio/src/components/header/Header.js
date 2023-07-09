import React, { useState } from 'react';
import './Header.css';
import logo from './logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  // Function to handle mouse enter event for the projects dropdown menu
const handleProjectsMouseEnter = () => {
  setIsProjectsOpen(true); 
};

// Function to handle mouse leave event for the projects dropdown menu
const handleProjectsMouseLeave = () => {
  setIsProjectsOpen(false); 
};


  return (
    <header>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand ml-auto" to="/">
            <img src={logo} alt="Logo" width="30" height="30" className="navbar-brand-img" />
          </Link>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li
              className={`nav-item dropdown ${isProjectsOpen ? 'show' : ''}`}
              onMouseEnter={handleProjectsMouseEnter}
              onMouseLeave={handleProjectsMouseLeave}
            >
              <div className="nav-link dropdown-toggle" role="button" id="projectsDropdown" data-bs-toggle="dropdown">
                Projects
              </div>
              <ul className={`dropdown-menu ${isProjectsOpen ? 'show' : ''}`} aria-labelledby="projectsDropdown">
                <li>
                  <Link to="/projects/calculator" className="dropdown-item">
                    Calculator Project
                  </Link>
                </li>
                <li>
                  <Link to="/projects/drink-manager" className="dropdown-item">
                    Drink Manager Project
                  </Link>
                </li> 
            

              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>

            <li className='nav-item'>
                  <Link to="/testimonies" className="nav-link">
                    Testimonies
                  
                  </Link>
                </li>

          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
