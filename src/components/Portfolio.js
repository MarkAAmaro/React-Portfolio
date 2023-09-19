import React from 'react';
import Project from './Project';  

const Portfolio = () => {
  
  const projects = [
    {
      title: 'Tech Blog',
      imageUrl: 'path/to/image1.jpg',
      deployedUrl: 'ttps://limitless-sierra-77455-2b6ced556da9.herokuapp.com/',
      repoUrl: 'https://github.com/MarkAAmaro/Tech-Blog'
    },
    
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