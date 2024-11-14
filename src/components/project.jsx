import React from 'react';

function Project({ title, image, deployLink, repoLink }) {
  return (
    <div className="project">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <a href={deployLink}>Live App</a>
      <a href={repoLink}>GitHub Repo</a>
    </div>
  );
}

export default Project;
