import React from 'react';
import ButtonUpload from './../battons/buttonUpload/button_upload.jsx';
import TrasButton from './../battons/trasButton/trasButton.jsx';
import Slider from './../slider/slider.jsx';
import InputForm from './../inputForm/inputForm.jsx';
import "./cardHero.css";

const settings = {
  lazyload: true,
  nav: false,
  mouseDrag: true
};

class CardHero extends React.Component {
  render() {
    console.log('Hero:', this.props.hero)
    return (
      <div className="card_Hero">
        <div className="sliderInputbox">
          <h3>{this.props.hero.name}</h3>
          <div className="SliderBox">
          <Slider />
          </div>
          <div className="InputFormbox">
          <InputForm />
          </div>
        </div>

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
