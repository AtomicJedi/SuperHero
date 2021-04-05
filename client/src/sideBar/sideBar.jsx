import React from 'react';
import ButtonAllMight from './../buttons/buttonHero/buttonAllMight.jsx';

import ButtonUpload from './../buttons/buttonUpload/button_upload.jsx';
import SearchBar from './../searchBar/searchBar.jsx'
import CardHero from './../cardHero/cardHero.jsx';
import Modal from '@material-ui/core/Modal';
import "./sideBar.css"

const SideBar = ({
  heroState,
  onHeroSelect: handleHeroSelect
}) => {
  console.log(heroState)
  return (
    <div className="side_Bar">
        <div className="SearchBar">
          <SearchBar />
        </div>
           <ButtonAllMight
              hero={heroState.allMight}
              onClick={handleHeroSelect}
           >
            {heroState.name}
          </ButtonAllMight>


        </div>
      )
    }
export default SideBar;
