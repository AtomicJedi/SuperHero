import React from 'react';
import TinySlider from "tiny-slider-react";

const settings = {
  lazyload: true,
  nav: false,
  mouseDrag: true
};

class Slider extends React.Component {
  render() {
    return (
      <TinySlider class="my-slider" settings={settings}>
        <img src="https://placehold.it/200" alt="img"/>
        <img src="https://placehold.it/200" alt="img"/>
        <img src="https://placehold.it/200" alt="img"/>
      </TinySlider>
      )
    }
  }
export default Slider;
