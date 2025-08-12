import React from 'react';
import './Experience.css';

const Experience = () => {
  // Experience data - easily modifiable
  const experiences = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      location: 'San Francisco, CA',
      period: 'January 2023 - Present',
      type: 'Full-time',
      description: 'Leading development of enterprise web applications and mentoring junior developers.',
      achievements: [
        'Led a team of 5 developers in building a customer management system',
        'Improved application performance by 40% through optimization',
        'Implemented CI/CD pipeline reducing deployment time by 60%',
        'Mentored 3 junior developers and conducted code reviews'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker', 'Kubernetes'],
      logo: '🏢'
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      location: 'New York, NY',
      period: 'March 2021 - December 2022',
      type: 'Full-time',
      description: 'Developed and maintained multiple web applications for a fast-growing startup.',
      achievements: [
        'Built a real-time chat application serving 10,000+ users',
        'Developed RESTful APIs handling 1M+ requests daily',
        'Implemented automated testing increasing code coverage to 85%',
        'Collaborated with UX team to improve user experience'
      ],
      technologies: ['React', 'Express.js', 'PostgreSQL', 'Redis', 'Socket.io', 'Jest'],
      logo: '🚀'
    },
    {
      id: 3,
      title: 'Frontend Developer',
      company: 'Digital Agency ABC',
      location: 'Los Angeles, CA',
      period: 'June 2020 - February 2021',
      type: 'Contract',
      description: 'Worked on various client projects focusing on frontend development and UI/UX.',
      achievements: [
        'Developed 15+ responsive websites for different clients',
        'Optimized website loading speed by 50%',
        'Implemented modern CSS frameworks and animations',
        'Worked closely with designers to ensure pixel-perfect implementations'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'SASS', 'jQuery'],
      logo: '🎨'
    },
    {
      id: 4,
      title: 'Junior Developer Intern',
      company: 'TechCorp',
      location: 'Austin, TX',
      period: 'May 2019 - August 2019',
      type: 'Internship',
      description: 'Gained hands-on experience in web development and software engineering practices.',
      achievements: [
        'Assisted in developing internal tools and utilities',
        'Learned version control and collaborative development',
        'Participated in code reviews and team meetings',
        'Contributed to bug fixes and feature implementations'
      ],
      technologies: ['Python', 'Django', 'MySQL', 'Git', 'Linux', 'Docker'],
      logo: '💼'
    }
  ];

  return (
    <div className="experience">
      <div className="container">
        {/* Header */}
        <div className="row mb-5">
          <div className="col-12">
            <h1 className="section-title">Work Experience</h1>
            <p className="text-center text-secondary">
              My professional journey and the impact I've made in various roles.
            </p>
          </div>
        </div>

        {/* Experience Cards */}
        <div className="row">
          {experiences.map((exp) => (
            <div key={exp.id} className="col-12 mb-4">
              <div className="experience-card card">
                <div className="card-body">
                  <div className="experience-header">
                    <div className="experience-logo">
                      <span className="logo-emoji">{exp.logo}</span>
                    </div>
                    <div className="experience-info">
                      <div className="experience-title-section">
                        <h3 className="experience-title">{exp.title}</h3>
                        <span className="experience-type">{exp.type}</span>
                      </div>
                      <h4 className="experience-company">{exp.company}</h4>
                      <div className="experience-meta">
                        <span className="experience-location">
                          <i className="fas fa-map-marker-alt"></i> {exp.location}
                        </span>
                        <span className="experience-period">
                          <i className="fas fa-calendar-alt"></i> {exp.period}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="experience-content">
                    <p className="experience-description">{exp.description}</p>
                    
                    <div className="experience-achievements">
                      <h5>Achievements & Responsibilities:</h5>
                      <ul>
                        {exp.achievements.map((achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="experience-technologies">
                      <h5>Technologies Used:</h5>
                      <div className="tech-tags">
                        {exp.technologies.map((tech) => (
                          <span key={tech} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h3>Career Summary</h3>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-3 col-6 mb-3">
                    <div className="summary-item text-center">
                      <h4 className="summary-number">{experiences.length}+</h4>
                      <p className="summary-label">Years Experience</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-6 mb-3">
                    <div className="summary-item text-center">
                      <h4 className="summary-number">{experiences.length}</h4>
                      <p className="summary-label">Companies</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-6 mb-3">
                    <div className="summary-item text-center">
                      <h4 className="summary-number">15+</h4>
                      <p className="summary-label">Projects Completed</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-6 mb-3">
                    <div className="summary-item text-center">
                      <h4 className="summary-number">20+</h4>
                      <p className="summary-label">Technologies</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
