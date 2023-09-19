import React from 'react';
import Project from './Project';  

const Portfolio = () => {
  
  const projects = [
    {
      title: 'Tech Blog',
      imageUrl: '/BlogTracker.png',
      deployedUrl: 'https://limitless-sierra-77455-2b6ced556da9.herokuapp.com/',
      repoUrl: 'https://github.com/MarkAAmaro/Tech-Blog'
    },
    // ... other projects
  ];

  return (
    <div id="portfolio">
      <h2>Portfolio</h2>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
};

export default Portfolio;

