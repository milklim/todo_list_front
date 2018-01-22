import './styles_v2.css'
import './loader.css'

import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router, Route, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import configureStore from './store'

import Layout from './components/layout'
import Tasklists from './components/tasklists'
import SignUp from './components/signUp'
import SignIn from './components/signIn'
import NotFound from './components/notFound'

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route component={Layout}>
                <Route path='/sign_up' component={SignUp} onEnter = { alreadyLogged }/>
                <Route path='/sign_in' component={SignIn} onEnter = { alreadyLogged }/>
                <Route path='/' component={Tasklists} onEnter = { requireAuth }/>
            </Route>
            <Route path="*" component={NotFound} />
        </Router>
    </Provider>,
    document.getElementById('root')
)


function requireAuth (nextState, replace, cb) {
    if (!store.getState().auth.isAuthenticate && !store.getState().auth.tokenValidating) {
        browserHistory.replace('/sign_in');
    }
    return cb();
}

function alreadyLogged (nextState, replace, cb) {
    if (store.getState().auth.isAuthenticate) {
        browserHistory.replace('/');
    }
    return cb();
}