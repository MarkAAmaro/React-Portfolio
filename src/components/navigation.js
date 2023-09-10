import React, { useState } from 'react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('About Me');

  const handleClick = (section) => {
    setActiveSection(section);
  };

  return (
    <nav>
      {['About Me', 'Portfolio', 'Contact', 'Resume'].map((section) => (
        <button 
          key={section} 
          className={activeSection === section ? 'active' : ''}
          onClick={() => handleClick(section)}
        >
          {section}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;