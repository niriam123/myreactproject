import React, { useState, useEffect } from 'react'
import { Helmet } from "react-helmet";
import BallCursor from './BallCursor'
import Navbar from './Navbar'
import Footer from './Footer';
// import AgencySlider from './AgencySlider';
import AgencySlider from './AgencySlider';
import JoinKromlin from './JoinKromlin';
import WantToTeamKromlin from './WantToTeamKromlin';
import { motion } from "motion/react"
import { useInView } from "react-intersection-observer";

const Agency = () => {

    const [animate, setAnimate] = useState(false);
    
      useEffect(() => {
        setAnimate(true); // Trigger the animation on mount
      }, []);
      const { ref, inView } = useInView({
        triggerOnce: true, // Animation triggers only once
        threshold: 0, 
      });
    
  return (
    <>
    <Helmet>
        <title>Agency</title>
        <meta name="description" content="This is the description of my React page." />
      </Helmet>
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
                <div className="wrap-container video-upper-content">
                    <div className="hero-title">
                    <div className="hero-heading-container">
                    <div className="dashed-line"></div>
                    <motion.h1
                  className="h1-title padding-bottom-30"
                  initial={{ opacity: 0, y: 250 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    ease: "easeOut", // Ensures a smooth easing effect
                  }}>What we believe in <br></br> goes far beyond our projects </motion.h1>
                        <motion.p 
                        className="white-color h1-title padding-bottom-30"
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 1,
                          delay: 0.4,
                          ease: "easeOut", // Ensures a smooth easing effect
                        }}>Kromin is founded on values that the whole team shares and is ready to defend.</motion.p>
                    </div>
                    </div>
                </div>
            </div>
        </section>
      {/* Misson section */}
        <section className='misson-section big-section-padding'>
            <div className='columns wrap-container is-multiline'>
                <div class="column left-side is-12">
                  <motion.img className='misson-img padding-bottom-60' 
                  initial={{ opacity: 0, x: -250 }}
                  whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }} 
                transition={{
                  duration: 1,
                  ease: "easeOut", // Ensures a smooth easing effect
                }}
                  height={210} src={`${process.env.PUBLIC_URL}/mission.svg`}></motion.img>
                  <p className='p1'>Be solid Digital Partners for Companies and always create new and concrete opportunities thanks to solutions designed to engage the public and optimize profits.</p>
                </div>
                <div class="column right-side is-12">
                  <motion.img className='visson-img padding-bottom-60'
                  initial={{ opacity: 0, x: 250 }}
                  whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }} 
                transition={{
                  duration: 1,
                  ease: "easeOut", // Ensures a smooth easing effect
                }}
                  height={210} src={`${process.env.PUBLIC_URL}/vision.svg`}></motion.img>
                  <p className='p1'>We believe in deep intuitions, those of entrepreneurs who have the guts to create 
                    new paradigms. That's why we intend to be the unstoppable 
                    link between digital transformation and the power of business ideas.</p>
                </div>
                
            </div>
        </section>
        {/* End Misson section */}
        {/* we are kromlin */}
        <section class="we-are-kromlin-section big-section-padding">
          <div class="columns is-multiline">
            <motion.div class="column center-div is-12"
            initial={{ opacity: 0, y: 250 }}
            whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} 
          transition={{
            duration: 1,
            ease: "easeOut", // Ensures a smooth easing effect
          }}>
                <img className={`has-text-centered text visson-img ${animate ? 'text-animate' : ''}`} src={`${process.env.PUBLIC_URL}/we_are_kromlin_img.svg`}></img>
            </motion.div>
          </div>
        </section>
        <section className='wrap-container padding-bottom-100 is-clearfix'>
          <div class="columns is-multiline profile-pic-container">
              <div class="column profile-pic-box">
                <div class="profile-pic border-radius-right-top-0">
                  <img width={300} height={200} src={`${process.env.PUBLIC_URL}/picture1.webp`}></img>
                </div>
                  <h4>Emanuele Maria Esposito</h4>
                  <span> <span> CO-FOUNDER  </span> <br></br> HEAD OF MARKETING</span>
              </div>
              <div class="column profile-pic-box ">
                <div class="profile-pic border-radius-right-bottom-0">
                  <img width={300} height={200} src={`${process.env.PUBLIC_URL}/picture2.webp`}></img>
                </div>
                  <h4>Marco Ciotoli</h4>
                  <span> <span> CO-FOUNDER  </span> <br></br> HEAD OF Front-END DEV</span>
              </div>
              <div class="column profile-pic-box">
                <div class="profile-pic border-radius-right-top-0">
                  <img width={300} height={200} className='' src={`${process.env.PUBLIC_URL}/picture3.webp`}></img>
                </div>
                  <h4>Vincenzo Ruffa</h4>
                  <span> <span> CO-FOUNDER  </span> <br></br> HEAD OF BACK-END DEV</span>
              </div>
          </div>
        </section>
        <section className='wrap-container padding-bottom-100'>
          <div class="columns is-multiline profile-pic-container">
              <div class="column profile-pic-box">
                <div class="profile-pic border-radius-right-bottom-0">
                  <img width={300} height={200} src={`${process.env.PUBLIC_URL}/picture4.webp`}></img>
                </div>
                  <h4>Cesidio Borrelli</h4>
                  <span> COMMERCIAL SALES REPRESENTATIVE</span>
              </div>
              <div class="column profile-pic-box">
                <div class="profile-pic border-radius-right-top-0">
                  <img width={300} height={200} src={`${process.env.PUBLIC_URL}/picture5.webp`}></img>
                </div>
                  <h4>Silvia Staccone</h4>
                  <span>HEAD OF ACCOUNTING</span>
              </div>
              <div class="column profile-pic-box">
                <div class="profile-pic border-radius-right-bottom-0">
                  <img width={300} height={200} src={`${process.env.PUBLIC_URL}/picture6.webp`}></img>
                </div>
                  <h4>Pasquale Gallo</h4>
                  <span>PROJECT MANAGER | COPYWRITER</span>
              </div>
          </div>
        </section>
        <section className='wrap-container padding-bottom-100'>
          <div class="columns is-multiline profile-pic-container">
              <div class="column profile-pic-box">
                <div class="profile-pic border-radius-right-top-0">
                  <img width={300} height={200} src={`${process.env.PUBLIC_URL}/picture7.webp`}></img>
                </div>
                  <h4>Alessia Ceci</h4>
                  <span>COPYWRITER | CONTENT & COMMUNITY MANAGER</span>
              </div>
              <div class="column profile-pic-box">
                <div class="profile-pic border-radius-right-bottom-0">
                  <img width={300} height={200} className='' src={`${process.env.PUBLIC_URL}/picture8.webp`}></img>
                </div>
                  <h4>Sara Mastrantonio</h4>
                  <span>HEAD OF DESIGN</span>
              </div>
              <div class="column profile-pic-box">
                <div class="profile-pic border-radius-right-top-0">
                  <img width={300} height={200} src={`${process.env.PUBLIC_URL}/picture9.webp`}></img>
                </div>
                  <h4>Giuseppe Russo</h4>
                  <span>DESIGNER</span>
              </div>
              <div class="column profile-pic-box">
                <div class="profile-pic border-radius-right-bottom-0">
                  <img width={300} height={200} className='' src={`${process.env.PUBLIC_URL}/picture10.webp`}></img>
                </div>
                  <h4>Stefano Carlini</h4>
                  <span>JUNIOR UX/UI DESIGNER</span>
              </div>
          </div>
        </section>
        <section className='wrap-container padding-bottom-100'>
          <div class="columns is-multiline profile-pic-container">
              <div class="column profile-pic-box">
                <div class="profile-pic border-radius-right-bottom-0">
                  <img src={`${process.env.PUBLIC_URL}/picture11.webp`}></img>
                </div>
                  <h4>Lorenzo Promutico</h4>
                  <span>CREATIVE DIRECTOR</span>
              </div>
              <div class="column profile-pic-box">
                <div class="profile-pic border-radius-right-top-0">
                  <img width={300} height={200} src={`${process.env.PUBLIC_URL}/picture12.webp`}></img>
                </div>
                  <h4>Greta Testugini</h4>
                  <span>SOCIAL MEDIA MANAGER</span>
              </div>
              <div class="column profile-pic-box">
                <div class="profile-pic border-radius-right-bottom-0">
                  <img width={300} height={200} src={`${process.env.PUBLIC_URL}/picture13.webp`}></img>
                </div>
                  <h4>Giacomo Caruzzi</h4>
                  <span>ART DIRECTOR</span>
              </div>
              <div class="column profile-pic-box">
                <div class="profile-pic border-radius-right-top-0">
                  <img width={300} height={200} src={`${process.env.PUBLIC_URL}/picture14.webp`}></img>
                </div>
                  <h4>Alessandro Pietrobono</h4>
                  <span>VIDEO EDITOR & MOTION DESIGNER</span>
              </div>
          </div>
        </section>
        <section className='wrap-container padding-bottom-100'>
          <div class="columns is-multiline profile-pic-container">
              <div class="column profile-pic-box">
                <div class="profile-pic border-radius-right-top-0">
                  <img width={300} height={200} src={`${process.env.PUBLIC_URL}/picture15.webp`}></img>
                </div>
                  <h4>Riccardo Schietroma</h4>
                  <span>CREATIVE EXECUTIVE</span>
              </div>
              <div class="column profile-pic-box">
                <div class="profile-pic border-radius-right-bottom-0">
                  <img width={300} height={200} src={`${process.env.PUBLIC_URL}/picture16.webp`}></img>
                </div>
                  <h4>Stefan Ratanu</h4>
                  <span>GRAPHIC DESIGNER</span>
              </div>
              <div class="column profile-pic-box">
                <div class="profile-pic border-radius-right-top-0">
                  <img width={300} height={200} src={`${process.env.PUBLIC_URL}/picture17.webp`}></img>
                </div>
                  <h4>Cristian Ciotoli</h4>
                  <span>E-COMMERCE SPECIALIST</span>
              </div>
              <div class="column profile-pic-box">
                <div class="profile-pic border-radius-right-bottom-0">
                  <img width={300} height={200} src={`${process.env.PUBLIC_URL}/picture18.webp`}></img>
                </div>
                  <h4>Carlo Angeletti</h4>
                  <span>IT & WEB DEVELOPER</span>
              </div>
          </div>
        </section>
        <section className='wrap-container padding-bottom-100'>
          <div class="columns is-multiline profile-pic-container">
              <div class="column profile-pic-box">
                <div class="profile-pic border-radius-right-bottom-0">
                  <img width={300} height={200} src={`${process.env.PUBLIC_URL}/picture19.webp`}></img>
                </div>
                  <h4>Manuel Fontana</h4>
                  <span>FULL STACK DEV</span>
              </div>
              <div class="column profile-pic-box">
                <div class="profile-pic border-radius-right-top-0">
                  <img width={300} height={200} src={`${process.env.PUBLIC_URL}/picture20.webp`}></img>
                </div>
                  <h4>Matteo Pulcrano</h4>
                  <span>SENIOR BACK-END DEV</span>
              </div>
              <div class="column profile-pic-box">
                <div class="profile-pic border-radius-right-bottom-0">
                  <img width={300} height={200} src={`${process.env.PUBLIC_URL}/picture21.webp`}></img>
                </div>
                  <h4>Cristian Belli</h4>
                  <span>BACK-END DEV</span>
              </div>
              <div class="column profile-pic-box">
                <div class="profile-pic border-radius-right-top-0">
                  <img width={300} height={200} src={`${process.env.PUBLIC_URL}/picture22.webp`}></img>
                </div>
                  <h4>Elia De Santis</h4>
                  <span>BACK-END DEV</span>
              </div>
          </div>
        </section>
        <section className='wrap-container padding-bottom-100'>
          <div class="columns is-multiline profile-pic-container">
              <div class="column profile-pic-box">
                <div class="profile-pic border-radius-right-top-0">
                  <img width={300} height={200} src={`${process.env.PUBLIC_URL}/picture23.webp`}></img>
                </div>
                  <h4>Luca Denni</h4>
                  <span>BACK-END DEV</span>
              </div>
              <div class="column profile-pic-box">
                <div class="profile-pic border-radius-right-bottom-0">
                  <img width={300} height={200} src={`${process.env.PUBLIC_URL}/picture24.webp`}></img>
                </div>
                  <h4>Francesco Monti</h4>
                  <span>SENIOR FRONT-END DEV</span>
              </div>
              <div class="column profile-pic-box">
                <div class="profile-pic border-radius-right-top-0">
                  <img width={300} height={200} src={`${process.env.PUBLIC_URL}/picture25.webp`}></img>
                </div>
                  <h4>Emanuele Padovani</h4>
                  <span>FRONT-END DEV</span>
              </div>
              <div class="column profile-pic-box">
                <div class="profile-pic border-radius-right-bottom-0">
                  <img width={300} height={200} src={`${process.env.PUBLIC_URL}/picture26.webp`}></img>
                </div>
                  <h4>Gianmarco Ferretti</h4>
                  <span>FRONT-END DEV</span>
              </div>
          </div>
        </section>
        <section className='wrap-container'>
          <div class="columns is-multiline profile-pic-container">
              <div class="column profile-pic-box">
                <div class="profile-pic border-radius-right-bottom-0">
                  <img width={300} height={200} src={`${process.env.PUBLIC_URL}/picture27.webp`}></img>
                  <h4>Alessia Patrizi</h4>
                  <span>FRONT-END DEV</span>
                </div>
              </div>
              <div class="column profile-pic-box">
                <div class="profile-pic border-radius-right-top-0">
                  <img width={300} height={200} src={`${process.env.PUBLIC_URL}/picture28.webp`}></img>
                  <h4>Antonio Del Maestro</h4>
                  <span>SOCIAL MEDIA MANAGER</span>
                </div>
              </div>
              <div class="column profile-pic-box">
                <div class="profile-pic border-radius-right-bottom-0">
                  <img width={300} height={200} src={`${process.env.PUBLIC_URL}/picture_next25.webp`}></img>
                  <h4></h4>
                  <span></span>
                </div>
              </div>
          </div>
        </section>
    {/* Agency Slider */}
    <AgencySlider />
    {/* join kromlin */}
    <JoinKromlin />
    {/* want to team kromlin */}
    < WantToTeamKromlin />
    {/* Footer */}
    <Footer />
    </>
  );
}

export default Agency
