import React from 'react';
import Project from '../components/Project';
import './Portfolio.css'; // Assuming you'll style your portfolio

const Portfolio = () => {
  const projects = [
    {
    //   title: 'Project One',
    //   imageUrl: '/src/assets/project1.png',
    //   deployedUrl: 'https://example.com/project1',
    //   repoUrl: 'https://github.com/your-github-username/project1',
    },
    {
    //   title: 'Project Two',
    //   imageUrl: '/src/assets/project2.png',
    //   deployedUrl: 'https://example.com/project2',
    //   repoUrl: 'https://github.com/your-github-username/project2',
    },
    // Add more projects 
  ];

  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            imageUrl={project.imageUrl}
            deployedUrl={project.deployedUrl}
            repoUrl={project.repoUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
