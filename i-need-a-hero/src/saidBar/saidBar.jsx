import React from 'react';
import ButtonAllMight from './../battons/buttonHero/buttonAllMight.jsx';
import HeroButton from './../battons/buttonHero/buttonSaitama.jsx';
import ButtonUpload from './../battons/buttonUpload/button_upload.jsx';
import AddButton from './../battons/addBatton/addBatton.jsx';
import SearchBar from './../searchBar/searchBar.jsx'
import "./saidBar.css"

const SideBar = ({
  heroes,
  onHeroSelect: handleHeroSelect
}) => {
  return (
    <div className="said_Bar">
      <div className="SearchBar">
        <SearchBar />
      </div>

      {heroes.map(hero => (
        <HeroButton
          hero={hero}
          onClick={handleHeroSelect}
        >
          {hero.name}
        </HeroButton>
      ))}
      
      <ButtonAllMight />
      <AddButton />
    </div>
  )
}

export default SideBar;
