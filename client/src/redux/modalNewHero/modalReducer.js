import {OPENADDHERO, NAMEHERO} from "./openModalAddHero";

const initState = {
	open: false,
	nameHero: ''
};
console.log(initState.nameHero)
export const modalOpenReducer = (state = initState, action) => {

	switch (action.type){
		case OPENADDHERO:
			return {...state, open: action.payload }
	}

	switch (action.type){
		case NAMEHERO:
			return {...state, nameHero: action.nameHeroPayload }
	}

	return state;
};