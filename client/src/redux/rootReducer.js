import {combineReducers} from "redux";
import {allMightReducer} from "./allMight/allMightReducer";
import {newHeroReducer} from "./moreHero/moreHero";
import {modalOpenReducer} from "./modalNewHero/modalReducer";

export const rooReducer = combineReducers({
	heroMan: allMightReducer,
	moreHero: newHeroReducer,
	modalHeroAdd: modalOpenReducer
})