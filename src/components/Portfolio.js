import React from 'react';
import Project from './Project';

const Portfolio = () => {
  const projects = [
    {
      title: 'Tech Blog',
      imageUrl: process.env.PUBLIC_URL + '/BlogTracker.png',
      deployedUrl: 'https://limitless-sierra-77455-2b6ced556da9.herokuapp.com/',
      repoUrl: 'https://github.com/MarkAAmaro/Tech-Blog'
    },
    {
      title: 'Coding Knowledge Quiz',
      imageUrl: process.env.PUBLIC_URL + '/start quiz.png', 
      repoUrl: 'https://github.com/MarkAAmaro/Coding-Knowledge-Quiz'
    },
    {
      title: 'Dog Park And Go!',
      imageUrl: process.env.PUBLIC_URL + '/DogPark.png',
      deployedUrl: 'https://markaamaro.github.io/Dog-Park-And-Go/',
      repoUrl: 'https://github.com/MarkAAmaro/Dog-Park-And-Go'
    },
    {
      title: 'Weather Dashboard',
      imageUrl: process.env.PUBLIC_URL + '/Dashboard.png',
      deployedUrl: 'https://markaamaro.github.io/Weather-Dashboard/',
      repoUrl: 'https://github.com/MarkAAmaro/Weather-Dashboard'
    },
    {
      title: 'JavaScript Password Generator',
      imageUrl: process.env.PUBLIC_URL + '/passwordgenerator.png',
      deployedUrl: 'https://markaamaro.github.io/JavaScript-Password-Generator/',
      repoUrl: 'https://github.com/MarkAAmaro/JavaScript-Password-Generator'
    },
    {
      title: 'Daily Event Planner',
      imageUrl: process.env.PUBLIC_URL + '/Past,Present,Future.png',
      deployedUrl: 'https://markaamaro.github.io/Daily-Event-Planner/',
      repoUrl: 'https://github.com/MarkAAmaro/Daily-Event-Planner'
    },
    {
      title: 'Rememories',
      imageUrl: process.env.PUBLIC_URL + '/Rememories.png',
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
