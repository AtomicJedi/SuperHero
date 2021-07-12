import {HERO_LIST} from '../moreHero/showHeroList'
import {takeEvery, put, call} from 'redux-saga/effects'
import {addheroNameModal} from "../modalNewHero/actionModal";
import {addHeroToList} from '../moreHero/actionAddHero'
import {initState} from '../modalNewHero/modalReducer'

const axios = require('axios');

export function* sagaWatcher(){
	yield takeEvery(sagaWorker)
}

console.log(initState)

function* sagaWorker() {
	yield put(addheroNameModal())
	yield put(addHeroToList())
	const payload = yield call(axiosPostName)
	yield put({type: HERO_LIST, payload})
}

async function axiosPostName() {
	try{
		const response = await axios.post('http://localhost:4000', )
		console.log(response.data.join())
		return await response.data.json()
	}	catch (err){
		console.log(err)
	}
}