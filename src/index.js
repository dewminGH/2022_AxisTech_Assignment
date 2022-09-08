import React from "react";
import ReactDom from "react-dom";
import {Provider} from "react-redux";
import {createStore,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";

import App from './components/app';
import Reducers from './reducers/index';

//I only add this to spec my redux store //
const composeEnhansment = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;

ReactDom.render(
    <Provider 
    store={createStore(composeEnhansment(Reducers ,applyMiddleware(thunk)))}>
    <App/>
    </Provider>,
    document.querySelector('#root')
)