import React from 'react';
import Layout from '../Layout/Layout';
import calculatorImage from './Calculator.png';
import './Projects.css';

function CalculatorProject() {
  return (
    <Layout>
      <div className="projects-container">
        <h1 className="projects-title">Let's check out some of my projects</h1>
        <div className="project">
          <div className="project-content">
            <div className="project-details">
              <h2 className="project-title">Calculator in C#</h2>
              <p className="project-description">
                A handy and efficient calculator application developed in C# for a school project. This fully functional
                calculator provides a user-friendly interface for performing basic arithmetic operations such as addition,
                subtraction, multiplication, and division
              </p>
            </div>
            <img src={calculatorImage} alt="Calculator" className="project-image" />
          </div>
        </div>
        <div className='link-container'>
        <a href="https://github.com/Sidepie101/Calculator" className="project-link" target="_blank" rel="noopener noreferrer">
        <span> Click here to check the code on GitHub</span> 
          
        </a>
        </div>
      </div>
    </Layout>
  );
}

export default CalculatorProject;
