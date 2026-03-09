import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Security from './pages/Security/Security';  
import About from './pages/About/About';
import Features from './pages/Features/Features'; 
import Works from './pages/Works/Works'; 
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/security" element={<Security />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} /> 
        <Route path="/works" element={<Works />} />   
      </Routes>
    </BrowserRouter>
  );
}

export default App;
