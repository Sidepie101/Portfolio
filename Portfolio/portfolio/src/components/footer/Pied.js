import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Pied.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Pied() {
  return (
    <footer className="bg-dark text-white fixed-bottom">
      <div className="container-fluid d-flex justify-content-between align-items-center" style={{ height: '80px' }}>
        <div className="me-auto ml-3">
          <p className="lets-connect">Let's connect</p>
        </div>
        <div className="d-flex align-items-center">
          <div className="text-white me-3">
            <a
              href="https://www.linkedin.com/your-linkedin-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </div>
          <div className="text-white">
            <a
              href="https://github.com/your-github-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
          </div>
        </div>
      </div>
      <div className="gradient-bg text-center py-2">
        <p className="m-0">&copy; 2023 - 2023 TahaM. All rights reserved.</p>
      </div>
    </footer>
  );


}

export default Pied