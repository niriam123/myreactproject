import React from 'react'
import Slider from "react-slick";

const Slickslider = () => {
    const settings = {
        variableWidth: true,
    autoplay: true,
    slidesToShow: 8,
    speed: 5000,
    slidesToScroll: 1,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    autoplaySpeed: 0,
    cssEase: 'linear',
    arrows: true,
    draggable: false,
      };
      const settings1 = {
        rtl: true, 
        arrows:false,
        variableWidth: true,
    autoplay: true,
    slidesToShow: 8,
    speed: 5000,
    slidesToScroll: 1,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    autoplaySpeed: 0,
    cssEase: 'linear',
    arrows: true,
    draggable: false,
      };
  return (
    <div className="slider-container">
      <Slider {...settings} className='mb-6'>
        <div>
            <img src="1.webp" alt='logo'></img>
        </div>
        <div>
            <img src="2.webp" alt='logo'></img>
        </div>
        <div>
            <img src="3.webp" alt='logo'></img>
        </div>
        <div>
            <img src="4.webp" alt='logo'></img>
        </div>
        <div>
            <img src="5.webp" alt='logo'></img>
        </div>
        <div>
            <img src="6.webp" alt='logo'></img>
        </div>
        <div>
            <img src="7.webp" alt='logo'></img>
        </div>
        <div>
            <img src="8.webp" alt='logo'></img>
        </div>
        <div>
            <img src="9.webp" alt='logo'></img>
        </div>
        <div>
            <img src="10.webp" alt='logo'></img>
        </div>
      </Slider>
      <Slider {...settings1}>
        <div>
            <img src="logo1.webp" alt='logo'></img>
        </div>
        <div>
            <img src="logo2.webp" alt='logo'></img>
        </div>
        <div>
            <img src="logo4.webp" alt='logo'></img>
        </div>
        <div>
            <img src="logo5.webp" alt='logo'></img>
        </div>
        <div>
            <img src="logo6.webp" alt='logo'></img>
        </div>
        <div>
            <img src="logo7.webp" alt='logo'></img>
        </div>
        <div>
            <img src="logo8.webp" alt='logo'></img>
        </div>
        <div>
            <img src="logo9.webp" alt='logo'></img>
        </div>
        <div>
            <img src="logo6.webp" alt='logo'></img>
        </div>
      </Slider>
    </div>
    
  )
}

export default Slickslider
