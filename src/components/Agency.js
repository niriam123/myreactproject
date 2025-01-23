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
                <div className="wrap-container video-upper-content">
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
            <div className='columns wrap-container is-multiline'>
                <div class="column left-side is-12">
                  <img className='misson-img padding-bottom-60' height={210} src={`${process.env.PUBLIC_URL}/mission.svg`}></img>
                  <p className='p1'>Be solid Digital Partners for Companies and always create new and concrete opportunities thanks to solutions designed to engage the public and optimize profits.</p>
                </div>
                <div class="column right-side is-12">
                  <img className='visson-img padding-bottom-60' height={210} src={`${process.env.PUBLIC_URL}/vision.svg`}></img>
                  <p className='p1'>We believe in deep intuitions, those of entrepreneurs who have the guts to create 
                    new paradigms. That's why we intend to be the unstoppable 
                    link between digital transformation and the power of business ideas.</p>
                </div>
                
            </div>
        </section>
        {/* End Misson section */}
        {/* we are kromlin */}
        <section class="we-are-kromlin-section big-section-padding">
          <div class="columns">
            <div class="column center-div is-12">
                <img className={`has-text-centered text visson-img ${animate ? 'text-animate' : ''}`} src={`${process.env.PUBLIC_URL}/we_are_kromlin_img.svg`}></img>
            </div>
            
          </div>
        </section>
        <section className='wrap-container padding-bottom-100'>
          <div class="columns profile-pic-container">
              <div class="column profile-pic-box">
                <div class="profile-pic">
                  <img width={300} height={200} className='border-radius-right-top-0' src={`${process.env.PUBLIC_URL}/picture1.webp`}></img>
                  <h4>Emanuele Maria Esposito</h4>
                  <span> <span> CO-FOUNDER  </span> <br></br> HEAD OF MARKETING</span>
                </div>
              </div>
              <div class="column profile-pic-box">
                <div class="profile-pic">
                  <img width={300} height={200} className='border-radius-right-bottom-0' src={`${process.env.PUBLIC_URL}/picture2.webp`}></img>
                  <h4>Marco Ciotoli</h4>
                  <span> <span> CO-FOUNDER  </span> <br></br> HEAD OF Front-END DEV</span>
                </div>
              </div>
              <div class="column profile-pic-box">
                <div class="profile-pic">
                  <img width={300} height={200} className='border-radius-right-top-0' src={`${process.env.PUBLIC_URL}/picture3.webp`}></img>
                  <h4>Vincenzo Ruffa</h4>
                  <span> <span> CO-FOUNDER  </span> <br></br> HEAD OF BACK-END DEV</span>
                </div>
              </div>
          </div>
        </section>
        <section className='wrap-container padding-bottom-100'>
          <div class="columns profile-pic-container">
              <div class="column profile-pic-box">
                <div class="profile-pic">
                  <img width={300} height={200} className='border-radius-right-bottom-0' src={`${process.env.PUBLIC_URL}/picture4.webp`}></img>
                  <h4>Cesidio Borrelli</h4>
                  <span> COMMERCIAL SALES REPRESENTATIVE</span>
                </div>
              </div>
              <div class="column profile-pic-box">
                <div class="profile-pic">
                  <img width={300} height={200} className='border-radius-right-top-0' src={`${process.env.PUBLIC_URL}/picture5.webp`}></img>
                  <h4>Silvia Staccone</h4>
                  <span>HEAD OF ACCOUNTING</span>
                </div>
              </div>
              <div class="column profile-pic-box">
                <div class="profile-pic">
                  <img width={300} height={200} className='border-radius-right-bottom-0' src={`${process.env.PUBLIC_URL}/picture6.webp`}></img>
                  <h4>Pasquale Gallo</h4>
                  <span>PROJECT MANAGER | COPYWRITER</span>
                </div>
              </div>
          </div>
        </section>
        <section className='wrap-container padding-bottom-100'>
          <div class="columns profile-pic-container">
              <div class="column profile-pic-box">
                <div class="profile-pic">
                  <img width={300} height={200} className='border-radius-right-top-0' src={`${process.env.PUBLIC_URL}/picture7.webp`}></img>
                  <h4>Alessia Ceci</h4>
                  <span>COPYWRITER | CONTENT & COMMUNITY MANAGER</span>
                </div>
              </div>
              <div class="column profile-pic-box">
                <div class="profile-pic">
                  <img width={300} height={200} className='border-radius-right-bottom-0' src={`${process.env.PUBLIC_URL}/picture8.webp`}></img>
                  <h4>Sara Mastrantonio</h4>
                  <span>HEAD OF DESIGN</span>
                </div>
              </div>
              <div class="column profile-pic-box">
                <div class="profile-pic">
                  <img width={300} height={200} className='border-radius-right-top-0' src={`${process.env.PUBLIC_URL}/picture9.webp`}></img>
                  <h4>Giuseppe Russo</h4>
                  <span>DESIGNER</span>
                </div>
              </div>
              <div class="column profile-pic-box">
                <div class="profile-pic">
                  <img width={300} height={200} className='border-radius-right-bottom-0' src={`${process.env.PUBLIC_URL}/picture10.webp`}></img>
                  <h4>Stefano Carlini</h4>
                  <span>JUNIOR UX/UI DESIGNER</span>
                </div>
              </div>
          </div>
        </section>
        <section className='wrap-container padding-bottom-100'>
          <div class="columns profile-pic-container">
              <div class="column profile-pic-box">
                <div class="profile-pic">
                  <img width={300} height={200} className='border-radius-right-bottom-0' src={`${process.env.PUBLIC_URL}/picture11.webp`}></img>
                  <h4>Lorenzo Promutico</h4>
                  <span>CREATIVE DIRECTOR</span>
                </div>
              </div>
              <div class="column profile-pic-box">
                <div class="profile-pic">
                  <img width={300} height={200} className='border-radius-right-top-0' src={`${process.env.PUBLIC_URL}/picture12.webp`}></img>
                  <h4>Greta Testugini</h4>
                  <span>SOCIAL MEDIA MANAGER</span>
                </div>
              </div>
              <div class="column profile-pic-box">
                <div class="profile-pic">
                  <img width={300} height={200} className='border-radius-right-bottom-0' src={`${process.env.PUBLIC_URL}/picture13.webp`}></img>
                  <h4>Giacomo Caruzzi</h4>
                  <span>ART DIRECTOR</span>
                </div>
              </div>
              <div class="column profile-pic-box">
                <div class="profile-pic">
                  <img width={300} height={200} className='border-radius-right-top-0' src={`${process.env.PUBLIC_URL}/picture14.webp`}></img>
                  <h4>Alessandro Pietrobono</h4>
                  <span>VIDEO EDITOR & MOTION DESIGNER</span>
                </div>
              </div>
          </div>
        </section>
        <section className='wrap-container padding-bottom-100'>
          <div class="columns profile-pic-container">
              <div class="column profile-pic-box">
                <div class="profile-pic">
                  <img width={300} height={200} className='border-radius-right-top-0' src={`${process.env.PUBLIC_URL}/picture15.webp`}></img>
                  <h4>Riccardo Schietroma</h4>
                  <span>CREATIVE EXECUTIVE</span>
                </div>
              </div>
              <div class="column profile-pic-box">
                <div class="profile-pic">
                  <img width={300} height={200} className='border-radius-right-bottom-0' src={`${process.env.PUBLIC_URL}/picture16.webp`}></img>
                  <h4>Stefan Ratanu</h4>
                  <span>GRAPHIC DESIGNER</span>
                </div>
              </div>
              <div class="column profile-pic-box">
                <div class="profile-pic">
                  <img width={300} height={200} className='border-radius-right-top-0' src={`${process.env.PUBLIC_URL}/picture17.webp`}></img>
                  <h4>Cristian Ciotoli</h4>
                  <span>E-COMMERCE SPECIALIST</span>
                </div>
              </div>
              <div class="column profile-pic-box">
                <div class="profile-pic">
                  <img width={300} height={200} className='border-radius-right-bottom-0' src={`${process.env.PUBLIC_URL}/picture18.webp`}></img>
                  <h4>Carlo Angeletti</h4>
                  <span>IT & WEB DEVELOPER</span>
                </div>
              </div>
          </div>
        </section>
        <section className='wrap-container padding-bottom-100'>
          <div class="columns profile-pic-container">
              <div class="column profile-pic-box">
                <div class="profile-pic">
                  <img width={300} height={200} className='border-radius-right-bottom-0' src={`${process.env.PUBLIC_URL}/picture19.webp`}></img>
                  <h4>Manuel Fontana</h4>
                  <span>FULL STACK DEV</span>
                </div>
              </div>
              <div class="column profile-pic-box">
                <div class="profile-pic">
                  <img width={300} height={200} className='border-radius-right-top-0' src={`${process.env.PUBLIC_URL}/picture20.webp`}></img>
                  <h4>Matteo Pulcrano</h4>
                  <span>SENIOR BACK-END DEV</span>
                </div>
              </div>
              <div class="column profile-pic-box">
                <div class="profile-pic">
                  <img width={300} height={200} className='border-radius-right-bottom-0' src={`${process.env.PUBLIC_URL}/picture21.webp`}></img>
                  <h4>Cristian Belli</h4>
                  <span>BACK-END DEV</span>
                </div>
              </div>
              <div class="column profile-pic-box">
                <div class="profile-pic">
                  <img width={300} height={200} className='border-radius-right-top-0' src={`${process.env.PUBLIC_URL}/picture22.webp`}></img>
                  <h4>Elia De Santis</h4>
                  <span>BACK-END DEV</span>
                </div>
              </div>
          </div>
        </section>
        <section className='wrap-container padding-bottom-100'>
          <div class="columns profile-pic-container">
              <div class="column profile-pic-box">
                <div class="profile-pic">
                  <img width={300} height={200} className='border-radius-right-top-0' src={`${process.env.PUBLIC_URL}/picture23.webp`}></img>
                  <h4>Luca Denni</h4>
                  <span>BACK-END DEV</span>
                </div>
              </div>
              <div class="column profile-pic-box">
                <div class="profile-pic">
                  <img width={300} height={200} className='border-radius-right-bottom-0' src={`${process.env.PUBLIC_URL}/picture24.webp`}></img>
                  <h4>Francesco Monti</h4>
                  <span>SENIOR FRONT-END DEV</span>
                </div>
              </div>
              <div class="column profile-pic-box">
                <div class="profile-pic">
                  <img width={300} height={200} className='border-radius-right-top-0' src={`${process.env.PUBLIC_URL}/picture25.webp`}></img>
                  <h4>Emanuele Padovani</h4>
                  <span>FRONT-END DEV</span>
                </div>
              </div>
              <div class="column profile-pic-box">
                <div class="profile-pic">
                  <img width={300} height={200} className='border-radius-right-bottom-0' src={`${process.env.PUBLIC_URL}/picture26.webp`}></img>
                  <h4>Gianmarco Ferretti</h4>
                  <span>FRONT-END DEV</span>
                </div>
              </div>
          </div>
        </section>
        <section className='wrap-container padding-bottom-100'>
          <div class="columns profile-pic-container">
              <div class="column profile-pic-box">
                <div class="profile-pic">
                  <img width={300} height={200} className='border-radius-right-bottom-0' src={`${process.env.PUBLIC_URL}/picture27.webp`}></img>
                  <h4>Alessia Patrizi</h4>
                  <span>FRONT-END DEV</span>
                </div>
              </div>
              <div class="column profile-pic-box">
                <div class="profile-pic">
                  <img width={300} height={200} className='border-radius-right-top-0' src={`${process.env.PUBLIC_URL}/picture28.webp`}></img>
                  <h4>Antonio Del Maestro</h4>
                  <span>SOCIAL MEDIA MANAGER</span>
                </div>
              </div>
              <div class="column profile-pic-box">
                <div class="profile-pic">
                  <img width={300} height={200} className='border-radius-right-bottom-0' src={`${process.env.PUBLIC_URL}/picture_next25.webp`}></img>
                  <h4></h4>
                  <span></span>
                </div>
              </div>
          </div>
        </section>
    {/* Footer */}
    <Footer />
    </>
  );
}

export default Agency
