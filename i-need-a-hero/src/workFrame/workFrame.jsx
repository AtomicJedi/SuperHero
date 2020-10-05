import React from "react";
import SideBar from './../sideBar/sideBar.jsx';
import CardHero from './../cardHero/cardHero.jsx';
import CardAllMight from './../cardHero/cardHeroAllMight/cardHeroAllMight.jsx';
import AddButton from './../buttons/addButton/addButton.jsx';
import './workFrame.css';
import Dialog from './../modalCreateHero/modalCreateHero.jsx'


class WorkFrame extends React.Component {
// Attention! The name from "InputHeroName" must be added to this "state"(state.allMight) to generate the button.
  state = {
    allMight: [
      {
        name: 'All Might'
      },
    ],

    moreHero: [],

    hero: null,
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

<div className="sideBarGroup">
  <div className="sideBarBox">
    <SideBar
      allMight={this.state.allMight}
      onHeroSelect={this.handleHero}
      addHero={this.addHero}
      moreHero={this.state.moreHero}
    />
  </div>

  {this.state.hero ? (
    <CardAllMight hero={this.state.hero} />
  ) : null}

</div>

    <div className="addButtonBox">

<AddButton></AddButton>

    </div>



      </div>
    );
  }
}
export default WorkFrame;
