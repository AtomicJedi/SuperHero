import React from 'react';
import "./inputForm.sass";

class InputForm extends React.Component {
  render() {
    return (
      <div className="container">

        <form className="formBox">

          <div className="group">
            <input type="text" required />
            <span className="bar"></span>
            <label className="label_style">Впешите супер Силу</label>
          </div>

          <div className="group">
            <input type="text" required />
            <span className="bar"></span>
            <label className="label_style">Девиз героя</label>
          </div>

          <div className="group">
            <input type="text" required />
            <span className="bar"></span>
            <label className="label_style">Боевой клич!</label>
          </div>

          <div className="group">
            <input type="text" required />
            <span className="bar"></span>
            <label className="label_style">Спосбности</label>
          </div>

          <div>
            <label className="Label_Description">Краткое описание героя</label>
            <textarea id="textarea__Description" placeholder="ведите тест сюда ;)" />
          </div>

        </form>

      </div>

    )
  }
}

export default InputForm;
