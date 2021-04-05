import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {compose, createStore} from "redux";
import {Provider} from "react-redux";
import {rooReducer} from "./redux/rootReducer";

const store = createStore(rooReducer, compose(
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

const app = (
	<Provider store={store}>
		<App />
	</Provider>
)
ReactDOM.render(app,
  document.getElementById('root')
);
