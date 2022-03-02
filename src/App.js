import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Gallery from './Gallery';
import Navbar from './Navbar';
function App() {
  return (
    <div className="bg-dark text-light">
      <Navbar/>
    <Gallery/>
    
    </div>
  );
}

export default App;
