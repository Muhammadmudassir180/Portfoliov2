import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/experience', label: 'Experience' },
    { path: '/education', label: 'Education' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
    { path: '/resume', label: 'Resume' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <span className="brand-text">Muhammad Mudassir</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsNavCollapsed(!isNavCollapsed)}
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${!isNavCollapsed ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.path}>
                <Link
                  className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                  to={link.path}
                  onClick={() => setIsNavCollapsed(true)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
