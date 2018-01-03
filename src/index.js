// import './index.css'
import './styles.css'

import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {Router, Route, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'

import reducers from 'reducers'
import Layout from 'containers/layout'
import Tasklists from 'components/tasklists'
import SignUp from 'components/signUp'
import SignIn from 'components/signIn'
import SignOut from 'components/signOut'

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
))

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route component={Layout}>
                <Route path='/sign_up' component={SignUp}/>
                <Route path='/sign_in' component={SignIn}/>
                <Route path='/sign_out' component={SignOut}/>
                <Route path='/' component={Tasklists} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
)
