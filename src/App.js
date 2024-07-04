import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import Banner from './components/Banner.js';
import Services from './components/Services.js';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Banner/>
    <Services/>
    </div>
  );
}

export default App;
