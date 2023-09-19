import React from 'react';
import Navigation from './Navigation';

const Header = ({ setActiveSection, activeSection }) => {
  console.log("Header loaded");
  return (
    <header>
      <h1>Mark Amaro</h1>
      <Navigation setActiveSection={setActiveSection} activeSection={activeSection} />
    </header>
  );
};

export default Header;
