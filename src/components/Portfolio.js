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
    {
      title: 'Coding Knowledge Quiz',
      imageUrl: '/start quiz.png',
      deployedUrl: 'https://markaamaro.github.io/Coding-Knowledge-Quiz/',
      repoUrl: 'https://github.com/MarkAAmaro/Coding-Knowledge-Quiz'
    },
    {
      title: 'Dog Park And Go!',
      imageUrl: '/DogPark.png',
      deployedUrl: 'https://markaamaro.github.io/Dog-Park-And-Go/',
      repoUrl: 'https://github.com/MarkAAmaro/Dog-Park-And-Go'
    },
    {
      title: 'Weather Dashboard',
      imageUrl: '/Dashboard.png',
      deployedUrl: 'https://markaamaro.github.io/Weather-Dashboard/',
      repoUrl: 'https://github.com/MarkAAmaro/Weather-Dashboard'
    },
    {
      title: 'JavaScript Password Generator',
      imageUrl: '/passwordgenerator.png',
      deployedUrl: 'https://markaamaro.github.io/JavaScript-Password-Generator/',
      repoUrl: 'https://github.com/MarkAAmaro/JavaScript-Password-Generator'
    },
    {
      title: 'Daily Event Planner',
      imageUrl: '/Past,Present,Future.png',
      deployedUrl: 'https://markaamaro.github.io/Daily-Event-Planner/',
      repoUrl: 'https://github.com/MarkAAmaro/Daily-Event-Planner'
    }
  ];

  return (
    <div id="portfolio">
      <h2>Portfolio</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

