import React, {useState} from 'react'
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

const WorkFrame = () => {
	const dispatch = useDispatch();

	const stateModal = useSelector(state => state.modalHeroAdd.open);
	const stateForAllMight = useSelector(state => state.heroMan.allMight);
	const stateForAllMightOpenCard = useSelector(state => state.heroMan.openCard);
	const moreHero = useSelector(state => state.moreHero.moreHero);

	const handleOpenModal = event => dispatch(changeModal(true))
	const handleCloseModal = event => dispatch(changeModal(false))

	console.log(stateModal)

	const handleHero = event => dispatch(allMightDescript(true))

	// const addHero = newHero => {
	// 	setMoreHero({newHero})
	// }
	return (
		<div className='work_Frame'>
			<div className='sideBarGroup'>
				<div className='sideBarBox'>
					<SideBar
						heroState={stateForAllMight}
						onHeroSelect={handleHero}
						// addHero={addHero}
					/>
				</div>

				{stateForAllMightOpenCard ? <CardAllMight hero={stateForAllMight}/> : false}

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
