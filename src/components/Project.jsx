import React from 'react';
import PropTypes from 'prop-types';
import './Project.css'; 

const Project = ({ title, imageUrl, deployedUrl, repoUrl }) => {
  return (
    <div className="project">
      <h3>{title}</h3>
      <a href={deployedUrl} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} alt={title} />
      </a>
      <p>
        <a href={repoUrl} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      </p>
    </div>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  deployedUrl: PropTypes.string.isRequired,
  repoUrl: PropTypes.string.isRequired,
};

export default Project;
