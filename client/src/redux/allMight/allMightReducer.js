import {OPENAD_ALL_MIGHT} from "./openCardAllMight";

const stateAllMight = {
	allMight:
		{
			name: 'All Might'
		},
	openCard: false

};

export const allMightReducer = (state = stateAllMight, action) => {
	switch (action.type){
		case OPENAD_ALL_MIGHT:
			return {...state, openCard: action.payload }
	}

	return state;
};
