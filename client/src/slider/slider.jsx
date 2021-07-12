import React from 'react';
import SliderSlic from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  lazyload: true,
  nav: false,
  mouseDrag: true,
  prevButton: {
    border: 7
  }
};

export default function Slider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <SliderSlic {...settings}>
            <div>
                <img src="https://www.fillmurray.com/230/340" alt="Img"/>
            </div>
            <div>
                <img src="https://www.fillmurray.com/230/340" alt="Img"/>
            </div>
            <div>
                <img src="https://www.fillmurray.com/230/340" alt="Img"/>
            </div>
                       
        </SliderSlic>
    );
}
