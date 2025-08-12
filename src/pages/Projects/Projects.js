import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Projects data - easily modifiable
  const projects = [
    {
      id: 1,
      title: 'Data Manager Backend Application',
      description: 'A full-stack e-commerce platform with user authentication, product management, and payment integration.',
      image: '🛒',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'MongoDB', "Express.js", 'AWS'],
      liveUrl: 'https://project1.com',
      githubUrl: 'https://github.com/Muhammadmudassir180/Data-Backend-Manager.git',
      features: [
        'I designed and developed a comprehensive Backend Data Manager, utilizing MongoDB as the primary database to store data.',
        'This included creating fully functional routes for updating Data, implementing JWT and Express Authentication for secure login and routing, and developing Error Handling Middleware to ensure smooth operation.',
        'Additionally, I used Bcrypt to encrypt passwords, enhancing security measures within the system.',
        'Admin dashboard for product management'
      ],
      status: 'completed'
    },
    {
      id: 2,
      title: 'Infrared Search and Tracking System',
      description: 'A Surveillance system utilizing IR cameras to detect and trach',
      image: '📋',
      category: 'frontend',
      technologies: ['Computer Vision', 'Deep Learning'],
      // liveUrl: 'https://project2.com',
      // githubUrl: 'https://github.com/username/project2',
      features: [
        'The development of a border surveillance system , utilizing IR cameras to detect and track threats.',
        'Optimized deep learning algorithms using YOLOv8 and YOLOv10 models for precise detection and Deep Learning Trackers for tracking, improving system accuracy by 25%',
        'Additionally, I integrated the system with a Pan-Tilt Unit, enhancing its control and flexibility',
      ],
      status: 'completed'
    },
    {
      id: 3,
      title: 'LLM-Powered Hybrid RAG System for Domain Knowledge Retrieval',
      description: 'Built an end-to-end NLP system that integrates semantic search with LLMs to generate context-aware responses grounded in authentic sources',
      image: '🌤️',
      category: 'frontend',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Weather API'],
      liveUrl: 'https://project3.com',
      githubUrl: 'https://github.com/username/project3',
      features: [
        'Built an end-to-end NLP system that integrates semantic search with LLMs to generate context-aware responses grounded in authentic sources.',
        'Designed custom datasets from scratch, performed embedding optimization, and fine-tuned transformer models for improved relevance and factual accuracy.',
        'Leveraged tools like FAISS and MongoDB to bridge structured and unstructured retrieval. Demonstrates strong foundations in ML, NLP pipelines, and practical deployment of LLMs.',
      ],
      status: 'completed'
    },
   
    {
      id: 4,
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
    // {
    //   id: 6,
    //   title: 'API Gateway',
    //   description: 'A microservices API gateway with authentication, rate limiting, and request routing.',
    //   image: '🔗',
    //   category: 'backend',
    //   technologies: ['Node.js', 'Express.js', 'Redis', 'JWT', 'Docker'],
    //   liveUrl: 'https://project6.com',
    //   githubUrl: 'https://github.com/username/project6',
    //   features: [
    //     'Request routing',
    //     'Authentication middleware',
    //     'Rate limiting',
    //     'Request logging',
    //     'Load balancing'
    //   ],
    //   status: 'completed'
    // }
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
