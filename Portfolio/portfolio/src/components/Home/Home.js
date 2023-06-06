import React from 'react';
import './Home.css';
import Layout from '../Layout/Layout';
import avatar from './avatar.png';

const Home = () => {
  return (
    <Layout>
      <div className="home-container">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="hey-text">Hey!</h1>
            <h2 className="name-text">
              <span className="orange-text">I'm</span> Taha
              <span className="typing-cursor">|</span>

            </h2>
            <h2 className="welcome-text">
              Welcome to my portfolio!
            </h2>
            <p className="info-text">
              Check out my{' '}
              <a
              className='github'
                href="https://github.com/Sidepie101"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>{' '}
              and{' '}
              <a
                className='linkedin'
                href="https://www.linkedin.com/in/taha-moukhlisse/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              .
            </p>

            <div className="description-text">
              <div className="card orange-card">
                <p>
                  <span className="material-symbols-outlined">laptop_windows</span>
                  I'm a passionate technophile with a keen interest in both technology and finance. I have a strong foundation in programming and possess skills in C# and JavaScript. Over time, I've delved into back-end development using Node.js and Vue.js, while also exploring React for front-end development.
                </p>
              </div>
              <div className="card orange-card">
                <p>
                  <span className="material-symbols-outlined">rocket_launch</span>
                  What truly ignites my enthusiasm is working with data. I thrive in data manipulation and analysis, leveraging my skills in SQL, MySQL, Cassandra, and MongoDB to extract valuable insights. I believe data is the backbone of informed decision-making and enjoy exploring innovative ways to extract meaningful patterns from it.
                </p>
              </div>
              <div className="card orange-card">
                <p>
                  <span className="material-symbols-outlined">brush</span>
                  Besides my focus on data, I'm also well-versed in front-end web development. I strive to create visually appealing and user-friendly interfaces that enhance the overall user experience. My proficiency in front-end technologies, coupled with my eye for design, allows me to develop captivating web applications.

</p>
              </div>
            </div>

          </div>
          <div className="col-lg-6">
            <img src={avatar} alt="Profile" className="profile-image" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
