import {OPENADDHERO, NAMEHERO} from "./openModalAddHero";

export const initState = {
	open: false,
	nameHero: ''
};

export const modalOpenReducer = (state = initState, action) => {

	switch (action.type){
		case OPENADDHERO:
			return {...state, open: action.payload }
	}

	switch (action.type){
		case NAMEHERO:
			return {...state, open: action.payload}
	}
	console.log("initState", initState)
	return state;
};