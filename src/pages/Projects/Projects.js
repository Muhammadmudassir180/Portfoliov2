import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Projects data - easily modifiable
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with user authentication, product management, and payment integration.',
      image: '🛒',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      liveUrl: 'https://project1.com',
      githubUrl: 'https://github.com/username/project1',
      features: [
        'User authentication and authorization',
        'Product catalog with search and filters',
        'Shopping cart and checkout process',
        'Payment integration with Stripe',
        'Admin dashboard for product management'
      ],
      status: 'completed'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      image: '📋',
      category: 'frontend',
      technologies: ['React', 'Firebase', 'Material-UI', 'Socket.io'],
      liveUrl: 'https://project2.com',
      githubUrl: 'https://github.com/username/project2',
      features: [
        'Real-time task updates',
        'Team collaboration',
        'Task assignment and deadlines',
        'Progress tracking',
        'File attachments'
      ],
      status: 'completed'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A weather application that displays current weather and forecasts using multiple weather APIs.',
      image: '🌤️',
      category: 'frontend',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Weather API'],
      liveUrl: 'https://project3.com',
      githubUrl: 'https://github.com/username/project3',
      features: [
        'Current weather display',
        '5-day forecast',
        'Location-based weather',
        'Weather alerts',
        'Responsive design'
      ],
      status: 'completed'
    },
    {
      id: 4,
      title: 'Blog Platform',
      description: 'A content management system for creating and managing blog posts with rich text editing.',
      image: '📝',
      category: 'fullstack',
      technologies: ['React', 'Express.js', 'PostgreSQL', 'AWS S3'],
      liveUrl: 'https://project4.com',
      githubUrl: 'https://github.com/username/project4',
      features: [
        'Rich text editor',
        'Image upload and management',
        'SEO optimization',
        'Comment system',
        'Admin panel'
      ],
      status: 'in-progress'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing projects and skills with modern design.',
      image: '🎨',
      category: 'frontend',
      technologies: ['React', 'Bootstrap', 'CSS3', 'JavaScript'],
      liveUrl: 'https://project5.com',
      githubUrl: 'https://github.com/username/project5',
      features: [
        'Responsive design',
        'Project showcase',
        'Contact form',
        'Smooth animations',
        'SEO optimized'
      ],
      status: 'completed'
    },
    {
      id: 6,
      title: 'API Gateway',
      description: 'A microservices API gateway with authentication, rate limiting, and request routing.',
      image: '🔗',
      category: 'backend',
      technologies: ['Node.js', 'Express.js', 'Redis', 'JWT', 'Docker'],
      liveUrl: 'https://project6.com',
      githubUrl: 'https://github.com/username/project6',
      features: [
        'Request routing',
        'Authentication middleware',
        'Rate limiting',
        'Request logging',
        'Load balancing'
      ],
      status: 'completed'
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'fullstack', label: 'Full Stack' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="projects">
      <div className="container">
        {/* Header */}
        <div className="row mb-5">
          <div className="col-12">
            <h1 className="section-title">My Projects</h1>
            <p className="text-center text-secondary">
              A collection of projects that showcase my skills and passion for development.
            </p>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="filter-buttons">
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter.key)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="row">
          {filteredProjects.map((project) => (
            <div key={project.id} className="col-lg-6 col-md-6 mb-4">
              <div className="project-card card">
                <div className="project-image">
                  <span className="project-emoji">{project.image}</span>
                  <div className="project-overlay">
                    <div className="project-links">
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                    </div>
                  </div>
                  <div className={`project-status ${project.status}`}>
                    {project.status === 'completed' ? '✓ Completed' : '🔄 In Progress'}
                  </div>
                </div>
                
                <div className="card-body">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-features">
                    <h5>Key Features:</h5>
                    <ul>
                      {project.features.slice(0, 3).map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="card text-center">
              <div className="card-body">
                <h3>Interested in Working Together?</h3>
                <p className="mb-4">
                  I'm always open to discussing new opportunities and exciting projects.
                </p>
                <a href="/contact" className="btn btn-primary">
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
