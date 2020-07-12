import React from "react";
import Saidbar from './../saidBar/saidBar.jsx';
import CardHero from './../cardHero/cardHero.jsx';
import './workFrame.css';

class WorkFrame extends React.Component {
  render() {
    return (
      <div className="work_Frame">
       <Saidbar/>
       <CardHero/>
     </div>
    );
  }
}

export default WorkFrame;
