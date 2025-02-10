import React, {useEffect} from 'react'
import Navbar from './Navbar'
import BallCursor from './BallCursor'
import Heropanel from './Heropanel'
import Wanttostand from './Wanttostand'
import ContactUs from './ContactUs'
import Footer from './Footer'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <BallCursor />
      <Heropanel />
      <Wanttostand />
      <ContactUs contactusTitle="Do you have a challenge for us?"
      contactusSubtitle="Let's create new opportunities together:<br>
      tell us about your vision." 
      contactusBtnText="Contact Us"/>
      <Footer />
    </div>
  )
}

export default Home
