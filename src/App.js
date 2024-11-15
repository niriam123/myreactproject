import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import $ from 'jquery';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heropanel from "./components/Heropanel";
import './fonts/font.css'
import './components/index.css'

import Wanttostand from './components/Wanttostand';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import CustomCursor from './components/BallCursor';

function App() {
  
  return (
    <>
    <CustomCursor />
    <Heropanel />
    <Wanttostand />
    <ContactUs />
    <Footer />
    </>
  );
}

export default App;
