import React from 'react';
import './App.css'; // Importing CSS for styling
import Header from './Header';
import About from './About';
import Contact from './Contact';

const App = () => {
  return (
    <div className="app">
      <Header />
      <About />
      <Contact />
    </div>
  );
};

export default App;
