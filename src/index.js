import React from "react";
import ReactDom from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";

import App from './components/app';
import Reducers from './reducers/index';

ReactDom.render(
    <Provider store={createStore(Reducers)}>
    <App/>
    </Provider>,
    document.querySelector('#root')
)