import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
// import Project from './components/Project/Project';
import React, { useState } from 'react';
import AboutMe from './components/pages/AboutMe/AboutMe';
import Portfolio from './components/pages/Portfolio/Portfolio';
import Contact from './components/pages/Contact/Contact';
import Resume from './components/pages/Resume/Resume';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <AboutMe />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <div className="parallax">
        <div id="stars1"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
      <Header handlePageChange={handlePageChange} currentPage={currentPage}/>
      {renderPage()}
      {/* <Project /> */}
      <Footer />
    </div>
  );
}

export default App;
