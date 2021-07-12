import {HERO_LIST} from './showHeroList'

export function addHeroToList(name){
	return {
		type: HERO_LIST,
		payload: name
	}
}