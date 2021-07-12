import {OPENADDHERO} from "./openModalAddHero";
import {NAMEHERO} from "./openModalAddHero";

export function changeModal(open){
	return {
		type: OPENADDHERO,
		payload: open,
	}
}

export function addheroNameModal(open, name){
	return {
		type: NAMEHERO,
		payload: open,
		nameHeroPayload: name,
	}
}