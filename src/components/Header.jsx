import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <div>
          <h1>Your Small Programmer</h1>
          <p className="tagline">Web Developer & Designer</p>
        </div>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/about-me">About Me</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
