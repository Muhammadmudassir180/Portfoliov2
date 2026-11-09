import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Icon from '../Icon/Icon';
import { profile } from '../../portfolio';
import './Navbar.css';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/experience', label: 'Experience' },
  { path: '/education', label: 'Education' },
  { path: '/projects', label: 'Projects' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
  { path: '/resume', label: 'Resume' }
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // React skips re-rendering when the value is unchanged, so this only renders when crossing the threshold
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-in">
        <Link className="nav-brand" to="/" onClick={() => setOpen(false)}>{profile.name}</Link>
        <button
          className="nav-toggle"
          type="button"
          onClick={() => setOpen(!open)}
          aria-controls="nav-links"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <Icon name={open ? 'xmark' : 'bars'} />
        </button>
        <nav id="nav-links" className={`nav-links${open ? ' open' : ''}`} aria-label="Main">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} end onClick={() => setOpen(false)}>
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
