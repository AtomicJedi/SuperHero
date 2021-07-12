import {HERO_LIST} from './showHeroList'
import {NAMEHERO} from "../modalNewHero/openModalAddHero";
import {OPENAD_CARD} from "../moreHero/showHeroList"
const newHero = {
	moreHero: [],
	openCard: false
};

export const newHeroReducer = (state = newHero, action) => {
	switch (action.type){

		case NAMEHERO:
			console.log("action", action)

			return {
				...newHero,
				moreHero: [...newHero.moreHero, action.nameHeroPayload],
			}
	}
	switch (action.type){
		case OPENAD_CARD:
			return {...state, openCard: action.payload }
	}
	// newHero.moreHero.push(action.nameHeroPayload)
	return state
};
console.log("8888", newHero)
