import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Link } from 'react-scroll';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './fonts/font.css'
import './components/index.css'

import Home from './components/Home';
import Agency from './components/Agency';

function App() {
  
  return (
    <Router>
        
        <Routes>
        <Route path="/" element={<Home />} />  
          <Route path="/Agency" element={<Agency />} />
            {/* Redirect all other routes to the homepage */}
        <Route path="*" element={<Navigate to="/" />} />
        </Routes>
  
  </Router>
  );
}

export default App;
