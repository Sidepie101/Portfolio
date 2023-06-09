import React from 'react';
import Layout from '../Layout/Layout';
import drinkImage from './drink_manager.png';
import './Projects.css';

function DrinkManagerProject() {
  return (
    <Layout>
      <div className="projects-container">
        <h1 className="projects-title">Let's check out some of my projects</h1>
        <div className="project">
          <div className="project-content">
            <div className="project-details">
              <h2 className="project-title">Cafe Manager in C# and SQL</h2>
              <p className="project-description">
                Drink Management App: Developed with C# and SQL Express, this app serves as a comprehensive database
                management tool for drinks. It allows users to create, update, and delete drink entries, while providing
                essential details such as prices, sizes, types, and unique codes for each drink.
              </p>
            </div>
            <img src={drinkImage} alt="Drink Manager" className="project-image-wide" />
          </div>
        </div>
        <div className='link-container'>
        <a href="https://github.com/Sidepie101/Drink-Manager" className="project-link" target="_blank" rel="noopener noreferrer">
        <span> Check the code on GitHub</span> 
          
        </a>
        </div>
      </div>
    </Layout>
  );
}

export default DrinkManagerProject;