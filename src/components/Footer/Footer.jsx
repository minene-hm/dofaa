import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="footer-container">

      <div className="footer-top">

        <div className="footer-logo-container">
          <img src={logo} alt="Dofaa Logo" className="footer-logo" />
          <span className="footer-brand">DOFAA</span>
        </div>

        <nav className="footer-nav">
          <Link to="/">Home</Link>
          <Link to="/features">Features</Link>
          <Link to="/how-it-works">How it Works</Link>
          <Link to="/security">Security</Link>
          <Link to="/about">About</Link>
        </nav>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Dofaa. All rights reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;