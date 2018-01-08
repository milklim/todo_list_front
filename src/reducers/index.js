import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import lists from './lists'
import tasks from './tasks'
import editingTask from './editedTask'
import editingList from './editedList'
import auth from './auth'

export default combineReducers({
    routing: routerReducer,
    lists,
    tasks,
    editingTask,
    editingList,
    auth
})