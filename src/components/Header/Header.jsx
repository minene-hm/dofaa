import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/images/logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo-container" onClick={closeMenu}>
          <img src={logo} alt="Dofaa Logo" className="logo-icon" />
          <span className="brand">DOFAA</span>
        </Link>

        <nav className="nav">
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
          <Link to="/features" className={`nav-link ${isActive('/features') ? 'active' : ''}`}>Features</Link>
          <Link to="/works" className={`nav-link ${isActive('/works') ? 'active' : ''}`}>How it Works</Link>
          <Link to="/security" className={`nav-link ${isActive('/security') ? 'active' : ''}`}>Security</Link>
          <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>About</Link>
        </nav>

        <div className="right">
          <button className="cta-button">Download the App</button>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <span className={`hamburger ${menuOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      <div className={`mobile-sidebar ${menuOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <Link to="/" className="logo-container" onClick={closeMenu}>
            <img src={logo} alt="Dofaa Logo" className="logo-icon" />
            <span className="brand">DOFAA</span>
          </Link>
          <button className="close-btn" onClick={closeMenu}>×</button>
        </div>
        <nav className="mobile-nav">
          <Link to="/" className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`} onClick={closeMenu}>Home</Link>
          <Link to="/features" className={`mobile-nav-link ${isActive('/features') ? 'active' : ''}`} onClick={closeMenu}>Features</Link>
          <Link to="/works" className={`mobile-nav-link ${isActive('/works') ? 'active' : ''}`} onClick={closeMenu}>How it Works</Link>
          <Link to="/security" className={`mobile-nav-link ${isActive('/security') ? 'active' : ''}`} onClick={closeMenu}>Security</Link>
          <Link to="/about" className={`mobile-nav-link ${isActive('/about') ? 'active' : ''}`} onClick={closeMenu}>About</Link>
        </nav>
        <div className="mobile-cta">
          <button className="cta-button" onClick={closeMenu}>Download the App</button>
        </div>
      </div>

      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </header>
  );
};

export default Header;