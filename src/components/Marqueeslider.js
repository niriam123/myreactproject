import React from 'react'
import Marquee from "react-fast-marquee";

const Marqueeslider = () => {
  return (
    <div className='marquee-container'>
      <Marquee pauseOnHover={true}>
        <div className="marquee-logo-img">
            <img src={`${process.env.PUBLIC_URL}/1.webp`} alt='logo'></img>
        </div>
        <div className="marquee-logo-img">
            <img src={`${process.env.PUBLIC_URL}/2.webp`} alt='logo'></img>
        </div>
        <div className="marquee-logo-img">
            <img src={`${process.env.PUBLIC_URL}/3.webp`} alt='logo'></img>
        </div>
        <div className="marquee-logo-img">
            <img src={`${process.env.PUBLIC_URL}/4.webp`} alt='logo'></img>
        </div>
        <div className="marquee-logo-img">
            <img src={`${process.env.PUBLIC_URL}/5.webp`} alt='logo'></img>
        </div>
        <div className="marquee-logo-img">
            <img src={`${process.env.PUBLIC_URL}/6.webp`} alt='logo'></img>
        </div>
        <div className="marquee-logo-img">
            <img src={`${process.env.PUBLIC_URL}/7.webp`} alt='logo'></img>
        </div>
        <div className="marquee-logo-img">
            <img src={`${process.env.PUBLIC_URL}/8.webp`} alt='logo'></img>
        </div>
        <div className="marquee-logo-img">
            <img src={`${process.env.PUBLIC_URL}/9.webp`} alt='logo'></img>
        </div>
        <div className="marquee-logo-img">
            <img src={`${process.env.PUBLIC_URL}/10.webp`} alt='logo'></img>
        </div>
      </Marquee>
      <Marquee direction="right" pauseOnHover={true}>
        <div className="marquee-logo-img">
            <img src={`${process.env.PUBLIC_URL}/logo1.webp`} alt='logo'></img>
        </div>
        <div className="marquee-logo-img">
            <img src={`${process.env.PUBLIC_URL}/logo2.webp`} alt='logo'></img>
        </div>
        <div className="marquee-logo-img">
            <img src={`${process.env.PUBLIC_URL}/logo3.webp`} alt='logo'></img>
        </div>
        <div className="marquee-logo-img">
            <img src={`${process.env.PUBLIC_URL}/logo4.webp`} alt='logo'></img>
        </div>
        <div className="marquee-logo-img">
            <img src={`${process.env.PUBLIC_URL}/logo5.webp`} alt='logo'></img>
        </div>
        <div className="marquee-logo-img">
            <img src={`${process.env.PUBLIC_URL}/logo6.webp`} alt='logo'></img>
        </div>
        <div className="marquee-logo-img">
            <img src={`${process.env.PUBLIC_URL}/logo7.webp`} alt='logo'></img>
        </div>
        <div className="marquee-logo-img">
            <img src={`${process.env.PUBLIC_URL}/logo8.webp`} alt='logo'></img>
        </div>
        <div className="marquee-logo-img">
            <img src={`${process.env.PUBLIC_URL}/logo9.webp`} alt='logo'></img>
        </div>
      </Marquee>
    </div>
  )
}

export default Marqueeslider
