import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './fonts/font.css'
import './components/index.css'

import Home from './components/Home';
import Agency from './components/Agency';
import Services from './components/Services';
import Careers from './components/Careers';

function App() {
  
  return (
    <Router basename="/myreactproject">
        
        <Routes>
        <Route path="/" element={<Home />} />  
          <Route path="/Agency" element={<Agency />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Careers" element={<Careers />} />
            {/* Redirect all other routes to the homepage */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
  
  </Router>
  );
}

export default App;
