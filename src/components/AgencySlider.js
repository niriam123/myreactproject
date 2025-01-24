import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const AgencySlider = () => {
    const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    variableWidth: false,
    autoplay:true,
    autoplaySpeed: 10000,
    speed: 800,
    cssEase: 'linear',
    loop: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
      };
  return (
    <div className='big-section-padding'>
        <div className="slider-container padding-bottom-20">
      <Slider {...settings}>
        <div>
          <img src={`${process.env.PUBLIC_URL}/slickimage1.jpg`} alt="image"></img>
        </div>
        <div>
        <img src={`${process.env.PUBLIC_URL}/slickimage4.jpg`} alt="image"></img>
        </div>
        <div>
        <img src={`${process.env.PUBLIC_URL}/slickimage5.jpg`} alt="image"></img>
        </div>
        <div>
        <img src={`${process.env.PUBLIC_URL}/slickimage6.jpg`} alt="image"></img>
        </div>
        <div>
        <img src={`${process.env.PUBLIC_URL}/slickimage7.jpg`} alt="image"></img>
        </div>
        <div>
        <img src={`${process.env.PUBLIC_URL}/slickimage8.jpg`} alt="image"></img>
        </div>
        <div>
        <img src={`${process.env.PUBLIC_URL}/slickimage9.jpg`} alt="image"></img>
        </div>
        <div>
        <img src={`${process.env.PUBLIC_URL}/slickimage10.jpg`} alt="image"></img>
        </div>
      </Slider>
    </div>
    </div>
  )
}

export default AgencySlider
