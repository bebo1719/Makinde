import React from 'react';
import Project from '../components/Project';

function Portfolio() {
  const projects = [
    { title: 'Project 1', image: 'path/to/image1.jpg', deployLink: '#', repoLink: '#' },
    { title: 'Project 2', image: 'path/to/image2.jpg', deployLink: '#', repoLink: '#' },
    // Add more projects as needed
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
