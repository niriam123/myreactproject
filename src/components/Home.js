import React from 'react'
import Navbar from './Navbar'
import BallCursor from './BallCursor'
import Heropanel from './Heropanel'
import Wanttostand from './Wanttostand'
import ContactUs from './ContactUs'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <BallCursor />
      <Heropanel />
      <Wanttostand />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default Home
