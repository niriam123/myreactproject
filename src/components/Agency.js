import React, { useState, useEffect } from 'react'
import BallCursor from './BallCursor'
import Navbar from './Navbar'
import Footer from './Footer';

const Agency = () => {
    const [animate, setAnimate] = useState(false);
    
      useEffect(() => {
        setAnimate(true); // Trigger the animation on mount
      }, []);
    
  return (
    <>
      <BallCursor />
      <Navbar />
      {/* Hero video container */}
        <section>
            <div className='video-wrapper'>
                <div class="video-container">
                    <video loop muted autoPlay playsInline src={`${process.env.PUBLIC_URL}/team_hero_video-bae3a860ee92cec95c3000a02b2781ae.mp4`} >
                    </video>
                </div>
            </div>
            <div className='video-overlay'>
                <div className="container video-upper-content">
                    <div className="hero-title">
                    <div className="hero-heading-container">
                    <div className="dashed-line"></div>
                        <h1 className={`text h1-title padding-bottom-30 ${animate ? 'text-animate' : ''}`}>
                        What we believe in <br></br>
                        goes far beyond our projects
                        </h1>
                        <p className='white-color'>Kromin is founded on values that the whole team shares and is ready to defend.</p>
                    </div>
                    </div>
                </div>
            </div>
        </section>
      {/* Misson section */}
        <section className='misson-section big-section-padding'>
            <div className='container'>
                <img className='misson-img padding-bottom-60' height={210} src={`${process.env.PUBLIC_URL}/mission.svg`}></img>
                <p className='p1'>Be solid Digital Partners for Companies and always create new and concrete opportunities thanks to solutions designed to engage the public and optimize profits.</p>
            </div>
        </section>
    {/* Footer */}
    <Footer />
    </>
  );
}

export default Agency
