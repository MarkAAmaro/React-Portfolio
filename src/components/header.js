import React, { useState } from 'react';

const Navigation = ({ setActiveSection, activeSection }) => {
  const handleClick = (section) => {
    setActiveSection(section);
  };

  return (
    <nav>
      {['About Me', 'Portfolio', 'Contact', 'Resume'].map((section) => (
        <button 
          key={section} 
          className={`nav-button ${activeSection === section ? 'active' : ''}`}
          onClick={() => handleClick(section)}
        >
          {section}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
