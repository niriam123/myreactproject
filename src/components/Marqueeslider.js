import React from 'react'
import Marquee from "react-fast-marquee";
import logo1 from '../assets/images/1.webp'
import ReactPlayer from "react-player";

const Marqueeslider = () => {
  return (
    <div className='marquee-container'>
      <Marquee pauseOnHover={true}>
        <div className="marquee-logo-img">
            <img src={logo1} alt='logo'></img>
        </div>
        <div className="marquee-logo-img">
            <img src={require('../assets/images/2.webp')} alt='logo'></img>
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
      <ReactPlayer url='https://www.youtube.com/watch?v=T8TZQ6k4SLE' playing={false} volume={0.5} controls />
    </div>
  )
}

export default Marqueeslider
