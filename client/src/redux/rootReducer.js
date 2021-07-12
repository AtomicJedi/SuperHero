import {combineReducers} from "redux";
import {allMightReducer} from "./allMight/allMightReducer";
import {newHeroReducer} from "./moreHero/moreHeroReduser";
import {modalOpenReducer} from "./modalNewHero/modalReducer";

export const rooReducer = combineReducers({
	heroMan: allMightReducer,
	moreHeroReducer: newHeroReducer,
	modalHeroAdd: modalOpenReducer
})