import {OPENAD_CARD} from "./showHeroList";

export function CardDescript(open){
	return {
		type: OPENAD_CARD,
		payload: open
	}
}