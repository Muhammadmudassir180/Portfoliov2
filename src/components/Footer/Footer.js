import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', url: '"https://github.com/Muhammadmudassir180', icon: 'fab fa-github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/muhammad-mudassir-/', icon: 'fab fa-linkedin' },
    // { name: 'Twitter', url: 'https://twitter.com', icon: 'fab fa-twitter' },
    { name: 'Email', url: 'mailto:muhammadmudassir981@gmail.com', icon: 'fas fa-envelope' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="footer-title">Portfolio</h5>
            <p className="footer-description">
              A passionate developer creating innovative solutions and building amazing experiences.
            </p>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li><a href="/about">About</a></li>
              <li><a href="/experience">Experience</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="footer-title">Connect</h5>
            <div className="social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  title={social.name}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <hr className="footer-divider" />
        
        <div className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="copyright">
                © {currentYear} Your Name. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <p className="made-with">
                Made with <i className="fas fa-heart text-danger"></i> using React
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
