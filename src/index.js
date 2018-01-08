import './styles_v2.css'

import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router, Route, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import store from './store'

import Layout from './components/layout'
import AuthenticatedWrapper from './components/authenticatedWrapper'
import Tasklists from './components/tasklists'
import SignUp from './components/signUp'
import SignIn from './components/signIn'


const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route component={Layout}>
                <Route path='/sign_up' component={SignUp}/>
                <Route path='/sign_in' component={SignIn}/>
                <Route component={AuthenticatedWrapper}>
                    <Route path='/' component={Tasklists} />
                </Route>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
)
