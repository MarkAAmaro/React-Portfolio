import React from 'react';
import Project from './Project';  // Assuming you have a Project.js file in the same folder

const Portfolio = () => {
  // Dummy data for now
  const projects = [
    {
      title: 'Tech Blog',
      imageUrl: 'path/to/image1.jpg',
      deployedUrl: 'ttps://limitless-sierra-77455-2b6ced556da9.herokuapp.com/',
      repoUrl: 'https://github.com/MarkAAmaro/Tech-Blog'
    },
    // Add more projects here
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