import React , {useState, useEffect} from "react"
import Navbar from './Navbar'
import Ballcursor from './BallCursor'
import Footer from './Footer'
import { motion } from "motion/react"
import { useInView } from "react-intersection-observer";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0,
  });
  return (
    <>
      <Ballcursor />
      <Navbar />

      {/* hero container */}
      <section className="">
        <div className="darg-bg">
          <div className="hero-panel wrap-container">
            <div className="hero-title">
              <div className="hero-panel">
                <div className="hero-dash-line"></div>
                <motion.h1
                  className="h1-title padding-bottom-30"
                  initial={{ opacity: 0, y: 250 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    ease: "easeOut", // Ensures a smooth easing effect
                  }}
                >
                  We know how to innovate,<br></br> we believe in ideas and<br></br> results
                </motion.h1>
                <motion.p
                  className="white-color"
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.5,
                    ease: "easeOut",
                  }}
                >
                  We see each new project as an opportunity to create something unique<br></br> and special: challenges
                  excite us. Always.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* our service container */}
      <section className="our-service-section section-padding">
        <div class="wrap-container">
          <h3 className="padding-bottom-60 padding-top-30">Services</h3>
          <motion.div className="columns is-multiline h1-title padding-bottom-30"
          ref={ref}
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} 
          transition={{
            duration: 1,
            ease: "easeOut", // Ensures a smooth easing effect
          }}>
            <div className="column is-6-widescreen"
              >
              <h4 className="padding-bottom-30">Data Analysis & Consulting</h4>
              <ul className="service-ul-color">
                <li>Insights</li>
                <li>Business Research</li>
              </ul>
            </div>
            <div className="column is-6-widescreen">
              <p className="padding-bottom-20">
                Through data analysis we identify valuable KPIs and determine what is the best strategy to pursue.
                Analyzing before doing allows us to create powerful strategies.
              </p>
              <a href="">
                <button className="white-btn our-service-btn">
                  Find Out More
                  <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M17.5075 6.13733L12.894 1.49673C12.5536 1.15433 12.5536 0.599194 12.894 0.256797C13.2344 -0.0855991 13.7863 -0.0855991 14.1267 0.256797L19.3565 5.51736C19.6969 5.85976 19.6969 6.4149 19.3565 6.75729L14.1267 12.0179C13.7863 12.3603 13.2344 12.3603 12.894 12.0179C12.5536 11.6755 12.5536 11.1203 12.894 10.7779L17.5075 6.13733Z"
                      fill="rgb(130, 39, 238)"
                    ></path>
                    <path
                      d="M18.7401 5.26064C19.2215 5.26064 19.6118 5.65318 19.6118 6.1374C19.6118 6.62162 19.2215 7.01416 18.7401 7.01416L0.871634 7.01416C0.390244 7.01416 0 6.62162 0 6.1374C0 5.65318 0.390244 5.26064 0.871634 5.26064L18.7401 5.26064Z"
                      fill="rgb(130, 39, 238)"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
          </motion.div>
          <motion.div className="columns is-multiline"
          ref={ref}
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} 
          transition={{
            duration: 1,
            ease: "easeOut", // Ensures a smooth easing effect
          }}>
            <div className="column is-6-widescreen">
              <h4 className="padding-bottom-30">Design & Development</h4>
              <ul className="service-ul-color second">
                <li>Digital Product</li>
                <li>Websites</li>
              </ul>
            </div>
            <div className="column is-6-widescreen">
              <p className="padding-bottom-20">
                We focus not only on the aesthetics of a product but also on what allows its functional use. We develop
                Digital Products able to automate and simplify the most sophisticated workflows.
              </p>
              <a href="">
                <button className="white-btn our-service-btn">
                  Find Out More
                  <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M17.5075 6.13733L12.894 1.49673C12.5536 1.15433 12.5536 0.599194 12.894 0.256797C13.2344 -0.0855991 13.7863 -0.0855991 14.1267 0.256797L19.3565 5.51736C19.6969 5.85976 19.6969 6.4149 19.3565 6.75729L14.1267 12.0179C13.7863 12.3603 13.2344 12.3603 12.894 12.0179C12.5536 11.6755 12.5536 11.1203 12.894 10.7779L17.5075 6.13733Z"
                      fill="rgb(0, 0, 0)"
                    ></path>
                    <path
                      d="M18.7401 5.26064C19.2215 5.26064 19.6118 5.65318 19.6118 6.1374C19.6118 6.62162 19.2215 7.01416 18.7401 7.01416L0.871634 7.01416C0.390244 7.01416 0 6.62162 0 6.1374C0 5.65318 0.390244 5.26064 0.871634 5.26064L18.7401 5.26064Z"
                      fill="rgb(0, 0, 0)"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
          </motion.div>
          <motion.div class="columns is-multiline"
          ref={ref}
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} 
          transition={{
            duration: 1,
            ease: "easeOut", // Ensures a smooth easing effect
          }}>
          <div className="column is-6-widescreen">
              <h4 className="padding-bottom-30">Creative Communication</h4>
              <ul className="service-ul-color third">
                <li>Social Management</li>
                <li>Video Production</li>
              </ul>
            </div>
            <div className="column is-6-widescreen"
              ref={ref}
              initial={{ opacity: 0, y: 100 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{
                duration: 1,
                ease: "easeOut", // Ensures a smooth easing effect
              }}>
              <p className="padding-bottom-20">
                We provide a wide range of high quality creative solutions with great visual impact that enhance the
                perception of the Brand. We reach the interest of thousands of users through content strategies that
                exploit the potential of the Brand.
              </p>
              <a href="">
                <button className="white-btn our-service-btn">
                  Find Out More
                  <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M17.5075 6.13733L12.894 1.49673C12.5536 1.15433 12.5536 0.599194 12.894 0.256797C13.2344 -0.0855991 13.7863 -0.0855991 14.1267 0.256797L19.3565 5.51736C19.6969 5.85976 19.6969 6.4149 19.3565 6.75729L14.1267 12.0179C13.7863 12.3603 13.2344 12.3603 12.894 12.0179C12.5536 11.6755 12.5536 11.1203 12.894 10.7779L17.5075 6.13733Z"
                      fill="rgb(16, 207, 196)"
                    ></path>
                    <path
                      d="M18.7401 5.26064C19.2215 5.26064 19.6118 5.65318 19.6118 6.1374C19.6118 6.62162 19.2215 7.01416 18.7401 7.01416L0.871634 7.01416C0.390244 7.01416 0 6.62162 0 6.1374C0 5.65318 0.390244 5.26064 0.871634 5.26064L18.7401 5.26064Z"
                      fill="rgb(16, 207, 196)"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
          </motion.div>
          <motion.div class="columns is-multiline"
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{
            duration: 1,
            ease: "easeOut", // Ensures a smooth easing effect
          }}>
            <div class="column is-6-widescreen">
              <h4 className="padding-bottom-30">Marketing & Strategy</h4>
              <ul className="service-ul-color forth">
                <li>Inbound Marketing</li>
                <li>Performance Advertising</li>
              </ul>
            </div>
            <div class="column is-6-widescreen">
              <p className="padding-bottom-20">
                We follow our clients along a path aimed at achieving their objectives through Marketing and Performance
                Advertising strategies capable of engaging the audience, enhancing brand loyalty, increasing sales and
                profits.
              </p>
              <a href="">
                <button className="white-btn our-service-btn">
                  Find Out More
                  <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M17.5075 6.13733L12.894 1.49673C12.5536 1.15433 12.5536 0.599194 12.894 0.256797C13.2344 -0.0855991 13.7863 -0.0855991 14.1267 0.256797L19.3565 5.51736C19.6969 5.85976 19.6969 6.4149 19.3565 6.75729L14.1267 12.0179C13.7863 12.3603 13.2344 12.3603 12.894 12.0179C12.5536 11.6755 12.5536 11.1203 12.894 10.7779L17.5075 6.13733Z"
                      fill="rgb(73, 159, 249)"
                    ></path>
                    <path
                      d="M18.7401 5.26064C19.2215 5.26064 19.6118 5.65318 19.6118 6.1374C19.6118 6.62162 19.2215 7.01416 18.7401 7.01416L0.871634 7.01416C0.390244 7.01416 0 6.62162 0 6.1374C0 5.65318 0.390244 5.26064 0.871634 5.26064L18.7401 5.26064Z"
                      fill="rgb(73, 159, 249)"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      {/* contact us */}
      <section className="contact-us-section purple-bg white-color">
        <div className="container container-padding ">
          <div className="columns is-vcentered">
            <div className="column is-6-widescreen">
              <h3 className="white-color padding-bottom-10">Have you found the service you were looking for?</h3>
              <p className="small white-color">
                Contact us to meet our experts who will advise you according to your business goals.
              </p>
            </div>
            <div className="column is-6-widescreen is-display-flex is-justify-content-center">
              <a href="">
                <button className="white-btn contact-us-btn">
                  Contact Us
                  <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M17.5075 6.13733L12.894 1.49673C12.5536 1.15433 12.5536 0.599194 12.894 0.256797C13.2344 -0.0855991 13.7863 -0.0855991 14.1267 0.256797L19.3565 5.51736C19.6969 5.85976 19.6969 6.4149 19.3565 6.75729L14.1267 12.0179C13.7863 12.3603 13.2344 12.3603 12.894 12.0179C12.5536 11.6755 12.5536 11.1203 12.894 10.7779L17.5075 6.13733Z"
                      fill="rgba(0, 0, 0, 0.7)"
                    ></path>
                    <path
                      d="M18.7401 5.26064C19.2215 5.26064 19.6118 5.65318 19.6118 6.1374C19.6118 6.62162 19.2215 7.01416 18.7401 7.01416L0.871634 7.01416C0.390244 7.01416 0 6.62162 0 6.1374C0 5.65318 0.390244 5.26064 0.871634 5.26064L18.7401 5.26064Z"
                      fill="rgba(0, 0, 0, 0.7)"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
        <img className="transparent-drop-img" src={`${process.env.PUBLIC_URL}/transparent_dropImg.png`}></img>
      </section>
      {/* Our Partners */}
      <section className="section-inner-padding">
          <div class="wrap-container">
            <span className="special-label">Our partners</span>
            <h2 className="padding-top-20">Every time at our side</h2>
            <div className="hero-dash-line"></div>
            <div class="columns is-multiline our-partners-columns padding-top-50">
              <div class="column is-3-widescreen is-6-mobile is-display-flex is-justify-content-center">
                <img src={`${process.env.PUBLIC_URL}/partners_logo1.svg`} alt=""></img>
              </div>
              <div class="column is-3-widescreen is-6-mobile is-display-flex is-justify-content-center">
              <img src={`${process.env.PUBLIC_URL}/partners_logo2.svg`} alt=""></img>
              </div>
              <div class="column is-3-widescreen is-6-mobile is-display-flex is-justify-content-center">
              <img src={`${process.env.PUBLIC_URL}/partners_logo3.svg`} alt=""></img>
              </div>
              <div class="column is-3-widescreen is-6-mobile is-display-flex is-justify-content-center">
              <img src={`${process.env.PUBLIC_URL}/partners_logo4.svg`} alt=""></img>
              </div>
            </div>
          </div>
      </section>
      {/* footer */}
      <Footer />
    </>
  );
}

export default Services
