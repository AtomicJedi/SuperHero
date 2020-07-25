import React from 'react';
import ButtonAllMight from './../battons/buttonHero/buttonAllMight.jsx';
import ButtonSaitama from './../battons/buttonHero/buttonSaitama.jsx';
import ButtonUpload from './../battons/buttonUpload/button_upload.jsx';
import AddButton from './../battons/addBatton/addBatton.jsx';
import SearchBar from './../searchBar/searchBar.jsx'
import "./saidBar.css"

class Saidbar extends React.Component {
  render() {
    return (
      <div className="said_Bar">
      <div className="SearchBar">
        <SearchBar />
      </div>

      <ButtonSaitama />
      <ButtonAllMight />
      <AddButton />
      </div>
    )
  }
}
export default Saidbar;
