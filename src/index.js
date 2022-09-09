import React from "react";
import ReactDom from "react-dom";
import {Provider} from "react-redux";
import {createStore,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";

import App from './components/app';
import Reducers from './reducers/index';

//I only add this to spec my redux store //
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

ReactDom.render(
    <Provider 
    store={createStore(Reducers ,composeEnhancers(applyMiddleware(thunk)))}>
    <App/>
    </Provider>,
    document.querySelector('#root')
)