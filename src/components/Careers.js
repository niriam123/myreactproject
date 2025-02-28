import React , {useState, useEffect} from "react"
import { Helmet } from "react-helmet";
import Navbar from './Navbar'
import Ballcursor from './BallCursor'
import Footer from './Footer'
import { motion } from "motion/react"
import { useInView } from "react-intersection-observer";
import ContactUs from "./ContactUs"

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0,
  });
  return (
    <>
    <Helmet>
        <title>Careers</title>
        <meta name="description" content="This is the description of my React page." />
      </Helmet>
      <Ballcursor />
      <Navbar />
      {/* Hero video container */}
      <section>
        <div className="video-wrapper">
          <div class="video-container">
            <video
              loop
              muted
              autoPlay
              playsInline
              src={`${process.env.PUBLIC_URL}/carrers_hero_video.mp4`}
            ></video>
          </div>
        </div>
        <div className="video-overlay">
          <div className="wrap-container video-upper-content">
            <div className="hero-title">
              <div className="hero-panel">
                <div className="dashed-line"></div>
                <motion.h1
                  className="h1-title padding-bottom-30"
                  initial={{ opacity: 0, y: 250 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    ease: "easeOut", // Ensures a smooth easing effect
                  }}
                >
                  We’re on the lookout for <br></br> new talents
                </motion.h1>
                <motion.p
                  className="white-color h1-title padding-bottom-30"
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.4,
                    ease: "easeOut", // Ensures a smooth easing effect
                  }}
                >
                  Like any self-respecting large family we have our share of
                  quirks, more or<br></br> less bizarre. It may seem difficult
                  to understand at first, but once you’re in,<br></br> you’ll be
                  hooked.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container section-padding">
          <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} 
          transition={{
            duration: 1,
            ease: "easeOut", // Ensures a smooth easing effect
          }}>
            <h6 className="sticky padding-bottom-20">WHY KROMLIN?</h6>
            <h2>Not just an ordinary<br></br> job application</h2>
            <div className="dashed-line"></div>
          </motion.div>
          <div className="columns is-multiline h1-title padding-bottom-30">
            <motion.div className="column is-6-widescreen"
            ref={ref}
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }} 
            transition={{
              duration: 1,
              ease: "easeOut", // Ensures a smooth easing effect
            }}>
              <h6 className="padding-bottom-20">01</h6>
              <h4 className="padding-bottom-20">You will face challenges</h4>
              <p>Kromin is continually growing, but with clear objectives to achieve. Our clients always deserve the best: at any cost.</p>
            </motion.div>
            <motion.div className="column is-6-widescreen"
            ref={ref}
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }} 
            transition={{
              duration: 1,
              delay: 0.1,
              ease: "easeOut", // Ensures a smooth easing effect
            }}>
              <h6 className="padding-bottom-20">02</h6>
              <h4 className="padding-bottom-20">You will make a difference</h4>
              <p>Feel free to approach each project as you see fit. We will always provide you with the appropriate support, but we need people who are out of the ordinary.</p>
            </motion.div>
          </div>
          <div className="columns is-multiline h1-title padding-bottom-30">
            <motion.div className="column is-6-widescreen"
            ref={ref}
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }} 
            transition={{
              duration: 1,
              dealy: 0.2,
              ease: "easeOut", // Ensures a smooth easing effect
            }}>
              <h6 className="padding-bottom-20">03</h6>
              <h4 className="padding-bottom-20">You will be part of a team</h4>
              <p>We are looking for professionals who share our vision and we strongly believe in the value of teamwork.</p>
            </motion.div>
            <motion.div className="column is-6-widescreen"
            ref={ref}
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }} 
            transition={{
              duration: 1,
              dealy:0.3,
              ease: "easeOut", // Ensures a smooth easing effect
            }}>
              <h6 className="padding-bottom-20">04</h6>
              <h4 className="padding-bottom-20">You will win with us</h4>
              <p>Your only task will be to give your best and win every challenge with us. We’ll be sure to find a way to celebrate each milestone to the full.</p>
            </motion.div>
          </div>
        </div>
      </section>
      <ContactUs contactusTitle="Have you limited experience, but so much desire to get involved?"
      contactusSubtitle="Kromin offers internships to give a chance, for the less experienced too, to<br>
      get started right away a professional career in the digital world." 
      contactusBtnText="Find Out More"/>
      <Footer />
    </>
  );
}

export default Careers
