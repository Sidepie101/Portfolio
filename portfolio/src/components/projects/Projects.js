import React from 'react';
import Layout from '../Layout/Layout';
import calculatorImage from './Calculator.png';
import drinkImage from './drink_manager.png';
import './Projects.css';

function Projects() {
  return (
    <Layout>
      <div className="projects-container">
        <h1 className="projects-title">Let's check out some of my projects</h1>

        <div className="project">
          <div className="project-details">
            <h2 className="project-title">Calculator in C#</h2>
            <p className="project-description">
              Calculator App: A handy and efficient calculator application developed in C# for a school project. This fully
              functional calculator provides a user-friendly interface for performing basic arithmetic operations such as
              addition, subtraction, multiplication, and division.
            </p>
          </div>
          <img src={calculatorImage} alt="Calculator" className="project-image" />
        </div>

        <div className="project">
          <div className="project-details">
            <h2 className="project-title">Cafe Manager in C# and SQL</h2>
            <p className="project-description">
              Drink Management App: Developed with C# and SQL Express, this app serves as a comprehensive database management
              tool for drinks. It allows users to create, update, and delete drink entries, while providing essential details
              such as prices, sizes, types, and unique codes for each drink.
            </p>
          </div>
          <img src={drinkImage} alt="Drink Manager" className="project-image-wide" />
        </div>
      </div>
    </Layout>
  );
}

export default Projects;
