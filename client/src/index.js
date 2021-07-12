import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import AppNenst from './App';
import './index.css';
import {compose, createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import createSagaMiddleware from 'redux-saga'
import {rooReducer} from "./redux/rootReducer";
import HeroContext from "./context";
import {sagaWatcher} from "./redux/saga/sagas";

const saga = createSagaMiddleware()

const store = createStore(rooReducer, compose(
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

// saga.run(sagaWatcher)

function App(){
	const [hero, setNewHero] = useState({
		allHero: []
	})
	return (
		<Provider store={store}>
			<HeroContext.Provider value={{hero, setNewHero}}>
				<AppNenst />
			</HeroContext.Provider>
		</Provider>
		)
}


ReactDOM.render(<App/>,
  document.getElementById('root')
);
