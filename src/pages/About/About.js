import React from 'react';
import './About.css';

const About = () => {
  const personalInfo = {
    name: 'Your Name',
    age: '25',
    location: 'Your City, Country',
    email: 'your.email@example.com',
    phone: '+1 234 567 8900',
    website: 'www.yourwebsite.com',
    freelance: 'Available'
  };

  const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'SASS'] },
    { category: 'Backend', items: ['Node.js', 'Express.js', 'Python', 'Django', 'PHP', 'MySQL'] },
    { category: 'Tools', items: ['Git', 'VS Code', 'Docker', 'AWS', 'Figma', 'Postman'] },
    { category: 'Other', items: ['REST APIs', 'GraphQL', 'MongoDB', 'Firebase', 'Jest', 'Webpack'] }
  ];

  const experiences = [
    {
      year: '2023 - Present',
      title: 'Senior Full Stack Developer',
      company: 'Tech Company',
      description: 'Leading development of web applications using modern technologies.'
    },
    {
      year: '2021 - 2023',
      title: 'Full Stack Developer',
      company: 'Startup Inc',
      description: 'Developed and maintained multiple web applications and APIs.'
    },
    {
      year: '2020 - 2021',
      title: 'Junior Developer',
      company: 'Digital Agency',
      description: 'Worked on frontend development and UI/UX improvements.'
    }
  ];

  return (
    <div className="about">
      <div className="container">
        {/* Header Section */}
        <div className="row mb-5">
          <div className="col-12">
            <h1 className="section-title">About Me</h1>
            <p className="text-center text-secondary">
              Get to know me better and understand my journey in the world of technology.
            </p>
          </div>
        </div>

        {/* Personal Information */}
        <div className="row mb-5">
          <div className="col-lg-6 mb-4">
            <div className="card h-100">
              <div className="card-header">
                <h3>Personal Information</h3>
              </div>
              <div className="card-body">
                <div className="personal-info">
                  {Object.entries(personalInfo).map(([key, value]) => (
                    <div key={key} className="info-item">
                      <span className="info-label">{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
                      <span className="info-value">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6 mb-4">
            <div className="card h-100">
              <div className="card-header">
                <h3>About Me</h3>
              </div>
              <div className="card-body">
                <p>
                  I am a passionate Full Stack Developer with over 3 years of experience in creating 
                  innovative web solutions. My journey in technology started with a curiosity to build 
                  things that make a difference in people's lives.
                </p>
                <p>
                  I specialize in modern web technologies including React, Node.js, and Python. 
                  I love solving complex problems and turning ideas into reality through clean, 
                  efficient, and maintainable code.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to 
                  open-source projects, or sharing knowledge with the developer community.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="row mb-5">
          <div className="col-12">
            <h2 className="section-title">Skills & Technologies</h2>
          </div>
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="col-lg-6 col-md-6 mb-4">
              <div className="card">
                <div className="card-header">
                  <h4>{skillGroup.category}</h4>
                </div>
                <div className="card-body">
                  <div className="skills-grid">
                    {skillGroup.items.map((skill) => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="row">
          <div className="col-12">
            <h2 className="section-title">Professional Journey</h2>
            <div className="timeline">
              {experiences.map((experience, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content card">
                    <div className="card-body">
                      <div className="timeline-header">
                        <h5 className="timeline-title">{experience.title}</h5>
                        <span className="timeline-year">{experience.year}</span>
                      </div>
                      <h6 className="timeline-company">{experience.company}</h6>
                      <p className="timeline-description">{experience.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
