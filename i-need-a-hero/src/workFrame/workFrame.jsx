import React from "react";
import SideBar from './../sideBar/sideBar.jsx';
import CardHero from './../cardHero/cardHero.jsx';
import CardAllMight from './../cardHero/cardHeroAllMight/cardHeroAllMight.jsx';
import './workFrame.css';

class WorkFrame extends React.Component {
  state = {
    heroes: [
      {
        name: 'All Might'
      },
    ],
    hero: null,

    moreHero: [
      {

      }
    ]
  }

  handleHero = (hero) => {
    this.setState({ hero })
  }

  addHero = (newHero) => {
    this.setState({ newHero })
  }

  render() {
    return (
      <div className="work_Frame">

        <SideBar
          heroes={this.state.heroes}
          onHeroSelect={this.handleHero}
          moreHero={this.state.moreHero}
          addHero={this.addHero}
        />
        {this.state.hero ? (
          <CardAllMight hero={this.state.hero} />
        ) : null}

      </div>
    );
  }
}
export default WorkFrame;
