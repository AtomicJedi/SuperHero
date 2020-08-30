import React from 'react';
import "./inputFormAllMight.sass";

class InputForm extends React.Component {
  render() {
    return (
      <div className="container">

        <form className="formBox">

          <div className="group">
            <input readonly disabled placeholder="Огромная физическая сила" />
            <span className="bar"></span>
            <label className="label_style">Впешите супер Силу</label>
          </div>

          <div className="group">
            <input disabled type="text" readonly placeholder="Всё хрошо!Потому что я сдесь!" />
            <span className="bar"></span>
            <label className="label_style">Девиз героя</label>
          </div>

          <div className="group">
            <input disabled type="text" readonly placeholder="ПЛЮС УЛЬТРА!!!" />
            <span className="bar"></span>
            <label className="label_style">Боевой клич!</label>
          </div>

          <div className="group">
            <input disabled type="text" readonly placeholder="Один за всех" />
            <span className="bar"></span>
            <label className="label_style">Спосбности</label>
          </div>

          <div>
            <label className="Label_Description">Краткое описание героя</label>
            <textarea readonly id="textarea__Description" placeholder="ведите тест сюда ;)">
               Приёмы:
               Texas Smash.
               Detroit Smash.
               Missouri Smash.
               Carolina Smash.
               New Hampshire Smash.
               Oklahoma Smash.
               United States of Smash
            </textarea>
          </div>

        </form>

      </div>

    )
  }
}

export default InputForm;
// <label className="Label_Description">Краткое описание героя</label>
// <span id="textarea__Description" placeholder="ведите тест сюда ;)">
//   <span>Приёмы:</span>
//   <span>Texas Smash.</span>
//   <span>Detroit Smash.</span>
//   <span>Missouri Smash.</span>
//   <span>Carolina Smash.</span>
//   <span>New Hampshire Smash.</span>
//   <span>Oklahoma Smash.</span>
//   <span>United States of Smash.</span>
// </span>
