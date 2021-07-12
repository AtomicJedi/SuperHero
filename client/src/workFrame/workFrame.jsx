import React, {useContext, useEffect, useMemo, useRef} from 'react'
import HeroContext from "../context";
import SideBar from './../sideBar/sideBar.jsx'
import CardHero from './../cardHero/cardHero.jsx'
import CardAllMight from './../cardHero/cardHeroAllMight/cardHeroAllMight.jsx'
import AddButton from './../buttons/addButton/addButton.jsx'
import './workFrame.css'
import Dialog from './../modalCreateHero/modalCreateHero.jsx'
import ModalCreateHero from '../modalCreateHero/modalCreateHero'
import {useDispatch, useSelector} from "react-redux";
import {changeModal} from "../redux/modalNewHero/actionModal";
import {allMightDescript} from "../redux/allMight/actionCardAllMight"
import {CardDescript} from "../redux/moreHero/actionCard";
import {newHeroReducer} from "../redux/moreHero/moreHeroReduser";

const WorkFrame = () => {

	const dispatch = useDispatch();
	const stateModal = useSelector(state => state.modalHeroAdd.open);
	const stateForAllMight = useSelector(state => state.heroMan.allMight);
	const stateForAllMightOpenCard = useSelector(state => state.heroMan.openCard);
	const stateForMoreHeroCard = useSelector(state => state.moreHeroReducer.openCard);

	const handleOpenModal = event => dispatch(changeModal(true))
	const handleCloseModal = event => dispatch(changeModal(false))

	const handleHero = event => dispatch(allMightDescript(true))

	const fetch = async (data) => {
		try{
			await fetch;
			await data;
			return data.response;
		} catch (err){
			console.log(err)
		}

	}

	// useEffect(() => {
	// 	return () => {
	// 		window.removeEventListener("click", )
	// 	}
	// }, [])

	return (
		<div className='work_Frame'>
			<div className='sideBarGroup'>
				<div className='sideBarBox'>
					<SideBar
						heroState={stateForAllMight}
					/>
				</div>

				{stateForAllMightOpenCard ? <CardAllMight hero={stateForAllMight}/> : null}
				{stateForMoreHeroCard ? <CardHero /> : null}

			</div>
			<div className='addButtonBox'>
				<AddButton onClick={handleOpenModal}/>
			</div>

			<ModalCreateHero
				open={stateModal}
				onClose={handleCloseModal}
			/>
		</div>
	)
}

export default WorkFrame
