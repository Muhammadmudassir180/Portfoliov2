import React from 'react';
import './Education.css';

const Education = () => {
  // Education data - easily modifiable
  const education = [
    {
      id: 1,
      degree: 'Master of Science in Computer Science',
      institution: 'Stanford University',
      location: 'Stanford, CA',
      period: '2021 - 2023',
      gpa: '3.9/4.0',
      description: 'Specialized in Artificial Intelligence and Machine Learning with focus on deep learning applications.',
      achievements: [
        'Graduated with Distinction',
        'Research Assistant in AI Lab',
        'Published 2 research papers',
        'Teaching Assistant for CS101'
      ],
      courses: ['Advanced Algorithms', 'Machine Learning', 'Deep Learning', 'Computer Vision', 'Natural Language Processing'],
      logo: '🎓'
    },
    {
      id: 2,
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of California, Berkeley',
      location: 'Berkeley, CA',
      period: '2017 - 2021',
      gpa: '3.8/4.0',
      description: 'Comprehensive study of computer science fundamentals with emphasis on software engineering and web development.',
      achievements: [
        'Dean\'s List (All Semesters)',
        'Computer Science Honor Society',
        'Capstone Project: E-commerce Platform',
        'Internship at Google'
      ],
      courses: ['Data Structures', 'Algorithms', 'Software Engineering', 'Database Systems', 'Web Development'],
      logo: '🏛️'
    },
    {
      id: 3,
      degree: 'High School Diploma',
      institution: 'Tech High School',
      location: 'San Francisco, CA',
      period: '2013 - 2017',
      gpa: '4.0/4.0',
      description: 'Strong foundation in STEM subjects with focus on computer science and mathematics.',
      achievements: [
        'Valedictorian',
        'National Merit Scholar',
        'President of Computer Club',
        'First Place in Science Fair'
      ],
      courses: ['AP Computer Science', 'AP Calculus', 'AP Physics', 'AP Statistics', 'Advanced Programming'],
      logo: '🎒'
    }
  ];

  const certifications = [
    {
      id: 1,
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      credential: 'AWS-CSA-001',
      logo: '☁️'
    },
    {
      id: 2,
      name: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: '2022',
      credential: 'GCP-PD-002',
      logo: '🌐'
    },
    {
      id: 3,
      name: 'Certified Scrum Master',
      issuer: 'Scrum Alliance',
      date: '2021',
      credential: 'CSM-003',
      logo: '📋'
    },
    {
      id: 4,
      name: 'Microsoft Certified: Azure Developer',
      issuer: 'Microsoft',
      date: '2022',
      credential: 'MS-AZ-004',
      logo: '💻'
    }
  ];

  return (
    <div className="education">
      <div className="container">
        {/* Header */}
        <div className="row mb-5">
          <div className="col-12">
            <h1 className="section-title">Education & Certifications</h1>
            <p className="text-center text-secondary">
              My academic journey and professional certifications that shape my expertise.
            </p>
          </div>
        </div>

        {/* Education Section */}
        <div className="row mb-5">
          <div className="col-12">
            <h2 className="section-subtitle">Academic Background</h2>
          </div>
          {education.map((edu) => (
            <div key={edu.id} className="col-12 mb-4">
              <div className="education-card card">
                <div className="card-body">
                  <div className="education-header">
                    <div className="education-logo">
                      <span className="logo-emoji">{edu.logo}</span>
                    </div>
                    <div className="education-info">
                      <div className="education-title-section">
                        <h3 className="education-degree">{edu.degree}</h3>
                        <span className="education-gpa">GPA: {edu.gpa}</span>
                      </div>
                      <h4 className="education-institution">{edu.institution}</h4>
                      <div className="education-meta">
                        <span className="education-location">
                          <i className="fas fa-map-marker-alt"></i> {edu.location}
                        </span>
                        <span className="education-period">
                          <i className="fas fa-calendar-alt"></i> {edu.period}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="education-content">
                    <p className="education-description">{edu.description}</p>
                    
                    <div className="education-achievements">
                      <h5>Key Achievements:</h5>
                      <ul>
                        {edu.achievements.map((achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="education-courses">
                      <h5>Relevant Courses:</h5>
                      <div className="course-tags">
                        {edu.courses.map((course) => (
                          <span key={course} className="course-tag">
                            {course}
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

        {/* Certifications Section */}
        <div className="row mb-5">
          <div className="col-12">
            <h2 className="section-subtitle">Professional Certifications</h2>
          </div>
          {certifications.map((cert) => (
            <div key={cert.id} className="col-lg-6 col-md-6 mb-4">
              <div className="certification-card card">
                <div className="card-body">
                  <div className="certification-header">
                    <div className="certification-logo">
                      <span className="logo-emoji">{cert.logo}</span>
                    </div>
                    <div className="certification-info">
                      <h4 className="certification-name">{cert.name}</h4>
                      <p className="certification-issuer">{cert.issuer}</p>
                      <div className="certification-meta">
                        <span className="certification-date">
                          <i className="fas fa-calendar"></i> {cert.date}
                        </span>
                        <span className="certification-id">
                          <i className="fas fa-id-card"></i> {cert.credential}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h3>Education Summary</h3>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-3 col-6 mb-3">
                    <div className="summary-item text-center">
                      <h4 className="summary-number">{education.length}</h4>
                      <p className="summary-label">Degrees</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-6 mb-3">
                    <div className="summary-item text-center">
                      <h4 className="summary-number">{certifications.length}</h4>
                      <p className="summary-label">Certifications</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-6 mb-3">
                    <div className="summary-item text-center">
                      <h4 className="summary-number">3.9</h4>
                      <p className="summary-label">Average GPA</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-6 mb-3">
                    <div className="summary-item text-center">
                      <h4 className="summary-number">6+</h4>
                      <p className="summary-label">Years of Study</p>
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

export default Education;
