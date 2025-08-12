import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'SQL', level: 80 }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6">
              <div className="hero-content fade-in-up">
                <h1 className="hero-title">
                  Hi, I'm <span className="text-accent">Your Name</span>
                </h1>
                <h2 className="hero-subtitle">Full Stack Developer</h2>
                <p className="hero-description">
                  Passionate about creating innovative web solutions and building 
                  exceptional user experiences. I specialize in modern web technologies 
                  and love turning complex problems into simple, beautiful solutions.
                </p>
                <div className="hero-buttons">
                  <Link to="/projects" className="btn btn-primary me-3">
                    View My Work
                  </Link>
                  <Link to="/contact" className="btn btn-outline-primary">
                    Get In Touch
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image fade-in-up">
                <div className="profile-card">
                  <div className="profile-image">
                    {/* Add your profile image here */}
                    <div className="placeholder-image">
                      <i className="fas fa-user"></i>
                    </div>
                  </div>
                  <div className="profile-info">
                    <h3>Your Name</h3>
                    <p>Full Stack Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section section">
        <div className="container">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="row">
            {skills.map((skill, index) => (
              <div key={skill.name} className="col-lg-6 col-md-6 mb-4">
                <div className="skill-card card">
                  <div className="card-body">
                    <div className="skill-header">
                      <h5 className="skill-name">{skill.name}</h5>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="cta-title">Ready to Start a Project?</h2>
              <p className="cta-description">
                Let's work together to bring your ideas to life. I'm always excited 
                to take on new challenges and create something amazing.
              </p>
              <Link to="/contact" className="btn btn-primary btn-lg">
                Let's Talk
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
