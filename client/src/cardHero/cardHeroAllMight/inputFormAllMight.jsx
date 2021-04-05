import React from 'react';
import "./inputFormAllMight.sass";

class InputForm extends React.Component {
  render() {
    const desc = " Приёмы:\n" +
      "      Texas Smash.\n" +
      "      Detroit Smash.\n" +
      "      Missouri Smash.\n" +
      "      New Hampshire Smash.\n" +
      "      Oklahoma Smash.\n" +
      "      United States of Smash"
    return (
      <div className="container">

        <form className="formBox">

          <div className="group">
            <input  disabled placeholder="Огромная физическая сила" />
            <span className="bar"></span>
            <label className="label_style">Впешите супер Силу</label>
          </div>

          <div className="group">
            <input disabled type="text"  placeholder="Всё хрошо!Потому что я сдесь!" />
            <span className="bar"></span>
            <label className="label_style">Девиз героя</label>
          </div>

          <div className="group">
            <input disabled type="text" placeholder="ПЛЮС УЛЬТРА!!!" />
            <span className="bar"></span>
            <label className="label_style">Боевой клич!</label>
          </div>

          <div className="group">
            <input disabled type="text" placeholder="Один за всех" />
            <span className="bar"></span>
            <label className="label_style">Спосбности</label>
          </div>

          <div>
            <label className="Label_Description">Краткое описание героя</label>
            <textarea
              defaultValue={desc}
              id="textarea__Description"
              placeholder="ведите тест сюда ;)"
              readOnly
            />
          </div>

        </form>

      </div>

    )
  }
}

export default InputForm

