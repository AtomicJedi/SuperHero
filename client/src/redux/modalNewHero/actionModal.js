import {OPENADDHERO} from "./openModalAddHero";

export function changeModal(open){
	return {
		type: OPENADDHERO,
		payload: open
	}
}

export function heroName(open, name){
	return {
		type: OPENADDHERO,
		payload: open,
		nameHeroPayload: name,
	}
}