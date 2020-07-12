import React from 'react';
import ButtonUpload from './../battons/buttonUpload/button_upload.jsx';
import TrasButton from './../battons/trasButton/trasButton.jsx';
import Slider from './../slider/slider.jsx';
import "./cardHero.css";

const settings = {
  lazyload: true,
  nav: false,
  mouseDrag: true
};

class CardHero extends React.Component {
  render() {
    return (
      <div className="card_Hero">
      <Slider />

      <div className="bottom_Panel">

        <div className="button_Upload">
        <ButtonUpload />
        </div>
        <div className="tras_Button">
         <TrasButton />
        </div>
       </div>

      </div>
    )
  }
}
export default CardHero;
