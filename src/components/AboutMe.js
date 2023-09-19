import React from 'react';

const AboutMe = () => {
  console.log('AboutMe component loaded');
  return (
    <div id="about-me">
      <h2>About Me</h2>
      <img src="/school pick.jpg" alt="Mark Amaro" className="resize-image" />
      <p>I am a college graduate from Texas A@M San Antonio with the bachelor's in Accounting. I am a business analyst who has worked 9 years conducting investigative research for improving and implementing business processes. I have always had a love for computers and wanted to jump into the world of coding to expand my horizon. I am currently in a bootcamp to improve my skillset for coding and will continue to provide more projects as time goes on.
</p>
    </div>
  );
};

export default AboutMe;
