import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [activeSection, setActiveSection] = useState('About Me');

  return (
    <div className="App">
      <Header setActiveSection={setActiveSection} />
      {activeSection === 'About Me' && <AboutMe />}
      {activeSection === 'Portfolio' && <Portfolio />}
      {activeSection === 'Contact' && <Contact />}
      {activeSection === 'Resume' && <Resume />}
      <Footer />
    </div>
  );
}

export default App;