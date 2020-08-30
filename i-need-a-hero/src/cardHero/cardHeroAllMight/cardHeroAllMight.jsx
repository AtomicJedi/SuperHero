import React from 'react';
import ButtonUpload from './../../buttons/buttonUpload/button_upload.jsx';
import TrasButton from './../../buttons/trasButton/trasButton.jsx';
import Slider from './../../slider/slider.jsx';
import InputForm from './inputFormAllMight.jsx';
import "./../cardHero.css";

const settings = {
  lazyload: true,
  nav: false,
  mouseDrag: true
};

class CardAllMight extends React.Component {
  render() {
    return (
      <div className="card_Hero">
        <div className="sliderInputbox">
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
export default CardAllMight;
