import React from "react";
import Saidbar from './../saidBar/saidBar.jsx';
import CardHero from './../cardHero/cardHero.jsx';
import './workFrame.css';

class WorkFrame extends React.Component {
  state = {
    heroes: [
      {
        name: 'Thor'
      },
      {
        name: 'Iron man'
      },
      {
        name: 'Hulk'
      }
    ],
    hero: null
  }

  handleHero = (hero) => {
    this.setState({ hero })
  }

  render() {
    return (
      <div className="work_Frame">
        <Saidbar
          heroes={this.state.heroes}
          onHeroSelect={this.handleHero}
        />
        {this.state.hero ? (
          <CardHero hero={this.state.hero} />
        ) : null}
      </div>
    );
  }
}

export default WorkFrame;
