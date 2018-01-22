import {applyMiddleware, createStore} from "redux";
import { browserHistory } from 'react-router';
import reducers from "../reducers";
import { routerMiddleware } from 'react-router-redux';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

export default function () {
    return createStore(reducers, {}, composeWithDevTools(applyMiddleware(thunk, routerMiddleware(browserHistory))));
}
