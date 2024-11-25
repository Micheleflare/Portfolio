import React from 'react';
import './Footer.css'; // Assuming you'll style your footer

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 Your Small Programmer. All Rights Reserved.</p>
      <div className="footer-links">
        <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/your-linkedin-username/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://stackoverflow.com/users/your-stackoverflow-id" target="_blank" rel="noopener noreferrer">Stack Overflow</a>
      </div>
    </footer>
  );
};

export default Footer;
