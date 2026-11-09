import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon';
import { profile } from '../../portfolio';
import './Footer.css';

const socialLinks = [
  { name: 'GitHub', url: profile.github.url, icon: 'github' },
  { name: 'LinkedIn', url: profile.linkedin.url, icon: 'linkedin-in' },
  { name: 'Email', url: `mailto:${profile.email}`, icon: 'envelope' }
];

const Footer = () => (
  <footer className="footer">
    <div className="footer-in glass">
      <div>
        <h3>{profile.name}</h3>
        <p>{profile.tagline}</p>
      </div>
      <div>
        <h3>Quick links</h3>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/experience">Experience</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div>
        <h3>Connect</h3>
        <div className="socials">
          {socialLinks.map((s) => (
            <a key={s.name} className="icon-btn" href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.name}>
              <Icon name={s.icon} />
            </a>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
        <span>Built with React</span>
      </div>
    </div>
  </footer>
);

export default Footer;
