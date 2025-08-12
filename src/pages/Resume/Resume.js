import React from 'react';
import './Resume.css';

const Resume = () => {
  const personalInfo = {
    name: 'Your Name',
    title: 'Full Stack Developer',
    email: 'your.email@example.com',
    phone: '+1 (234) 567-8900',
    location: 'San Francisco, CA',
    website: 'www.yourwebsite.com',
    linkedin: 'linkedin.com/in/yourprofile',
    github: 'github.com/yourusername'
  };

  const skills = {
    'Programming Languages': ['JavaScript', 'Python', 'Java', 'C++', 'SQL'],
    'Frontend Technologies': ['React', 'Vue.js', 'HTML5', 'CSS3', 'SASS', 'Bootstrap'],
    'Backend Technologies': ['Node.js', 'Express.js', 'Django', 'Flask', 'Spring Boot'],
    'Databases': ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase'],
    'Cloud & DevOps': ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Git'],
    'Tools & Others': ['VS Code', 'Postman', 'Figma', 'Jira', 'Agile']
  };

  const experience = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: 'January 2023 - Present',
      location: 'San Francisco, CA',
      achievements: [
        'Led development of enterprise web applications using React and Node.js',
        'Mentored 5 junior developers and conducted code reviews',
        'Improved application performance by 40% through optimization',
        'Implemented CI/CD pipeline reducing deployment time by 60%',
        'Collaborated with cross-functional teams to deliver high-quality products'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      period: 'March 2021 - December 2022',
      location: 'New York, NY',
      achievements: [
        'Developed and maintained multiple web applications for a fast-growing startup',
        'Built real-time chat application serving 10,000+ users',
        'Developed RESTful APIs handling 1M+ requests daily',
        'Implemented automated testing increasing code coverage to 85%',
        'Worked closely with UX team to improve user experience'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency ABC',
      period: 'June 2020 - February 2021',
      location: 'Los Angeles, CA',
      achievements: [
        'Developed 15+ responsive websites for different clients',
        'Optimized website loading speed by 50%',
        'Implemented modern CSS frameworks and animations',
        'Worked closely with designers to ensure pixel-perfect implementations',
        'Maintained and updated existing client websites'
      ]
    }
  ];

  const education = [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'Stanford University',
      period: '2021 - 2023',
      gpa: '3.9/4.0',
      highlights: ['Graduated with Distinction', 'Research Assistant in AI Lab', 'Published 2 research papers']
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of California, Berkeley',
      period: '2017 - 2021',
      gpa: '3.8/4.0',
      highlights: ['Dean\'s List (All Semesters)', 'Computer Science Honor Society', 'Capstone Project: E-commerce Platform']
    }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce platform with user authentication, product management, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      link: 'https://github.com/username/project1'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates and team collaboration features.',
      technologies: ['React', 'Firebase', 'Material-UI', 'Socket.io'],
      link: 'https://github.com/username/project2'
    },
    {
      title: 'Weather Dashboard',
      description: 'Weather application that displays current weather and forecasts using multiple weather APIs.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Weather API'],
      link: 'https://github.com/username/project3'
    }
  ];

  const certifications = [
    { name: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', year: '2023' },
    { name: 'Google Cloud Professional Developer', issuer: 'Google Cloud', year: '2022' },
    { name: 'Certified Scrum Master', issuer: 'Scrum Alliance', year: '2021' }
  ];

  const handleDownload = () => {
    // This would typically generate and download a PDF
    alert('Resume download functionality would be implemented here. You can add a PDF generation library like jsPDF or use a backend service.');
  };

  return (
    <div className="resume">
      <div className="container">
        {/* Header */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="resume-header">
              <h1 className="section-title">Resume</h1>
              <button onClick={handleDownload} className="btn btn-primary download-btn">
                <i className="fas fa-download me-2"></i>
                Download PDF
              </button>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8">
            {/* Personal Information */}
            <div className="resume-section">
              <div className="personal-info-card card">
                <div className="card-body text-center">
                  <h2 className="resume-name">{personalInfo.name}</h2>
                  <h3 className="resume-title">{personalInfo.title}</h3>
                  <div className="contact-details">
                    <div className="contact-row">
                      <span><i className="fas fa-envelope"></i> {personalInfo.email}</span>
                      <span><i className="fas fa-phone"></i> {personalInfo.phone}</span>
                    </div>
                    <div className="contact-row">
                      <span><i className="fas fa-map-marker-alt"></i> {personalInfo.location}</span>
                      <span><i className="fas fa-globe"></i> {personalInfo.website}</span>
                    </div>
                    <div className="contact-row">
                      <span><i className="fab fa-linkedin"></i> {personalInfo.linkedin}</span>
                      <span><i className="fab fa-github"></i> {personalInfo.github}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="resume-section">
              <h3 className="section-heading">Professional Summary</h3>
              <div className="card">
                <div className="card-body">
                  <p>
                    Experienced Full Stack Developer with over 3 years of expertise in building scalable web applications. 
                    Proficient in modern web technologies including React, Node.js, and Python. Strong problem-solving skills 
                    and ability to work in fast-paced environments. Passionate about creating efficient, user-friendly solutions 
                    and staying current with emerging technologies.
                  </p>
                </div>
              </div>
            </div>

            {/* Work Experience */}
            <div className="resume-section">
              <h3 className="section-heading">Work Experience</h3>
              {experience.map((exp, index) => (
                <div key={index} className="experience-item card mb-3">
                  <div className="card-body">
                    <div className="experience-header">
                      <h4 className="job-title">{exp.title}</h4>
                      <span className="company-name">{exp.company}</span>
                    </div>
                    <div className="experience-meta">
                      <span><i className="fas fa-calendar"></i> {exp.period}</span>
                      <span><i className="fas fa-map-marker-alt"></i> {exp.location}</span>
                    </div>
                    <ul className="achievements-list">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Projects */}
            <div className="resume-section">
              <h3 className="section-heading">Key Projects</h3>
              {projects.map((project, index) => (
                <div key={index} className="project-item card mb-3">
                  <div className="card-body">
                    <div className="project-header">
                      <h4 className="project-title">{project.title}</h4>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                        <i className="fab fa-github"></i>
                      </a>
                    </div>
                    <p className="project-description">{project.description}</p>
                    <div className="project-technologies">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-4">
            {/* Skills */}
            <div className="resume-section">
              <h3 className="section-heading">Skills</h3>
              <div className="skills-card card">
                <div className="card-body">
                  {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category} className="skill-category">
                      <h5 className="skill-category-title">{category}</h5>
                      <div className="skill-tags">
                        {skillList.map((skill, index) => (
                          <span key={index} className="skill-tag">{skill}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="resume-section">
              <h3 className="section-heading">Education</h3>
              {education.map((edu, index) => (
                <div key={index} className="education-item card mb-3">
                  <div className="card-body">
                    <h4 className="degree-title">{edu.degree}</h4>
                    <p className="institution-name">{edu.institution}</p>
                    <div className="education-meta">
                      <span><i className="fas fa-calendar"></i> {edu.period}</span>
                      <span><i className="fas fa-star"></i> GPA: {edu.gpa}</span>
                    </div>
                    <ul className="highlights-list">
                      {edu.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="resume-section">
              <h3 className="section-heading">Certifications</h3>
              <div className="certifications-card card">
                <div className="card-body">
                  {certifications.map((cert, index) => (
                    <div key={index} className="certification-item">
                      <h5 className="certification-name">{cert.name}</h5>
                      <p className="certification-issuer">{cert.issuer}</p>
                      <span className="certification-year">{cert.year}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
