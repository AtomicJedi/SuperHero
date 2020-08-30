import React from 'react';
import ButtonAllMight from './../buttons/buttonHero/buttonAllMight.jsx';

import ButtonUpload from './../buttons/buttonUpload/button_upload.jsx';
import AddButton from './../buttons/addButton/addButton.jsx';
import SearchBar from './../searchBar/searchBar.jsx'
import CardHero from './../cardHero/cardHero.jsx';
import Modal from '@material-ui/core/Modal';
import "./sideBar.css"

const SideBar = ({
  heroes,
  onHeroSelect: handleHeroSelect
}) => {
  return (
    <div className="side_Bar">
        <div className="SearchBar">
          <SearchBar />
        </div>

         {heroes.map(hero => (
           <ButtonAllMight
              hero={hero}
              onClick={handleHeroSelect}
           >
            {hero.name}
          </ButtonAllMight>
        ))}
          <AddButton

          />

        </div>
      )
    }
export default SideBar;
