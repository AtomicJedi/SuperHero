import React from 'react';
import ButtonAllMight from './../buttons/buttonHero/buttonAllMight.jsx';

import ButtonUpload from './../buttons/buttonUpload/button_upload.jsx';
import SearchBar from './../searchBar/searchBar.jsx'
import CardHero from './../cardHero/cardHero.jsx';
import Modal from '@material-ui/core/Modal';
import "./sideBar.css"
import {useDispatch, useSelector} from "react-redux";
import {allMightDescript} from "../redux/allMight/actionCardAllMight";
import {CardDescript} from "../redux/moreHero/actionCard";

const SideBar = ({
                     heroState,
                 }) => {
    const dispatch = useDispatch();
    const handleHero = (bull) => dispatch(allMightDescript(bull))
    const handleHeroCard = (BulCrd) => dispatch(CardDescript(BulCrd))

    const moreHeroBtnList = useSelector(state => state.moreHeroReducer.moreHero);
    console.log("moreHeroBtnList", moreHeroBtnList)
    let handleTogle = () => {
        handleHero(false);
        handleHeroCard(true);
    }
    let handleOpenExampleCard = () => {
        handleHero(true)
        handleHeroCard(false);
    }
    return (
        <div className="side_Bar">
            <div className="SearchBar">
                <SearchBar/>
                <ButtonAllMight
                    hero={heroState.allMight}
                    onClick={handleOpenExampleCard}
                >
                    {heroState.name}
                </ButtonAllMight>
                {
                    (moreHeroBtnList && moreHeroBtnList.length) ? (

                        moreHeroBtnList.map((btn, index) => {
                            console.log("btn", btn)
                            return (btn) ? (
                                <ButtonAllMight
                                    key={index}
                                    // hero={heroState.allMight}
                                    onClick={handleTogle}
                                >
                                    {btn.heroNameBtn}
                                </ButtonAllMight>
                            ) : null
                        })
                    ) : null
                }
            </div>
        </div>
    )
}
export default SideBar;
