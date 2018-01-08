import {
    FETCH_LISTS_START,
    FETCH_LISTS_SUCCESS,
    FETCH_LISTS_FAILURE,
    FETCH_LIST_TASKS_START,
    FETCH_LIST_TASKS_SUCCESS,
    FETCH_LIST_TASKS_FAILURE,
    LIST_CREATE_START,
    LIST_CREATE_SUCCESS,
    LIST_CREATE_FAILURE,
    LIST_UPDATE_START,
    LIST_UPDATE_SUCCESS,
    LIST_UPDATE_FAILURE,
    LIST_DELETE_START,
    LIST_DELETE_SUCCESS,
    LIST_DELETE_FAILURE,
    LIST_EDIT_START,
    LIST_EDIT_FINISH,
    
    TASK_CREATE_START,
    TASK_CREATE_SUCCESS,
    TASK_CREATE_FAILURE,
    TASK_UPDATE_START,
    TASK_UPDATE_SUCCESS,
    TASK_UPDATE_FAILURE,    
    TASK_DELETE_START,
    TASK_DELETE_SUCCESS,
    TASK_DELETE_FAILURE,
    TASK_TOGGLE_DONE_STATUS_START,
    TASK_TOGGLE_DONE_STATUS_SUCCESS,
    TASK_TOGGLE_DONE_STATUS_FAILURE,
    TASK_POSITION_UP_START,
    TASK_POSITION_UP_SUCCESS,
    TASK_POSITION_UP_FAILURE,
    TASK_POSITION_DOWN_START,
    TASK_POSITION_DOWN_SUCCESS,
    TASK_POSITION_DOWN_FAILURE,
    TASK_EDIT_START,
    TASK_EDIT_FINISH,

    USER_SIGN_UP_START,
    USER_SIGN_UP_SUCCESS,
    USER_SIGN_UP_FAILURE,
    USER_SIGN_IN_START,
    USER_SIGN_IN_SUCCESS,
    USER_SIGN_IN_FAILURE,
    USER_SIGN_OUT_START,
    USER_SIGN_OUT_SUCCESS,
    USER_SIGN_OUT_FAILURE

} from '../actionTypes'

import {
    fetchLists as fetchListsApi,
    fetchListTasks as fetchListTasksApi,
    createList as createListApi,
    deleteList as deleteListApi,
    createTask as createTaskApi,
    deleteTask as deleteTaskApi,
    toggleDoneStatus as toggleDoneStatusApi,
    taskPositionUp as taskPositionUpApi,
    taskPositionDown as taskPositionDownApi,
    updateTask as updateTaskApi,
    updateList as updateListApi,
    signUp as signUpApi,
    signIn as signInApi,
    signOut as signOutApi,

} from '../api'


export const fetchLists = () => async dispatch => {
    dispatch({type: FETCH_LISTS_START})

    try {
        const lists = await fetchListsApi()
        dispatch({
            type: FETCH_LISTS_SUCCESS,
            payload: lists
        })
    } catch (err) {
        console.log('catch', err)
        dispatch({
            type: FETCH_LISTS_FAILURE,
            payload: err,
            error: true
        })
    }
}

export const fetchListTasks = (listId) => async dispatch => {
    dispatch({type: FETCH_LIST_TASKS_START})

    try {
        const tasks = await fetchListTasksApi(listId)
        dispatch({
            type: FETCH_LIST_TASKS_SUCCESS,
            payload: tasks
        })
    } catch (err) {
        console.log('catch', err)
        dispatch({
            type: FETCH_LIST_TASKS_FAILURE,
            payload: err,
            error: true
        })
    }
}

export const createList = (name) => async dispatch => {
    dispatch({type: LIST_CREATE_START})

    try {
        const response = await createListApi(name)
        dispatch({
            type: LIST_CREATE_SUCCESS,
            payload: response
        })
    } catch (err) {
        console.log('catch', err)
        dispatch({
            type: LIST_CREATE_FAILURE,
            payload: err,
            error: true
        })
    }    
}

export const updateList = (list, newLabel) => async dispatch => {
    dispatch({type: LIST_UPDATE_START})
    list.label = newLabel

    try {
        const response = await updateListApi(list)
        dispatch({
            type: LIST_UPDATE_SUCCESS,
            payload: response
        })
    } catch (err) {
        console.log('catch', err)
        dispatch({
            type: LIST_UPDATE_FAILURE,
            payload: err,
            error: true
        })
    }
}

export const deleteList = (listId) => async dispatch => {
    dispatch({type: LIST_DELETE_START})

    try {
        const response = await deleteListApi(listId)
        dispatch({
            type: LIST_DELETE_SUCCESS,
            payload: response
        })
    } catch (err) {
        console.log('catch', err)
        dispatch({
            type: LIST_DELETE_FAILURE,
            payload: err,
            error: true
        })
    }
}

export const onEditListStart = (list) => dispatch => {
    dispatch({
        type: LIST_EDIT_START,
        payload: list
    })
}

export const onEditListFinish = (changedContent) => dispatch => {
    dispatch({
        type: LIST_EDIT_FINISH,
        payload: changedContent
    })
}


export const createTask = (content, listId) => async dispatch => {
    dispatch({type: TASK_CREATE_START})

    try {
        const response = await createTaskApi(content, listId)
        dispatch({
            type: TASK_CREATE_SUCCESS,
            payload: response
        })
    } catch (err) {
        console.log('catch', err)
        dispatch({
            type: TASK_CREATE_FAILURE,
            payload: err,
            error: true
        })
    }
}

export const updateTask = (task, newContent) => async dispatch => {
    dispatch({type: TASK_UPDATE_START})
    task.content = newContent

    try {
        const response = await updateTaskApi(task)
        dispatch({
            type: TASK_UPDATE_SUCCESS,
            payload: response
        })
    } catch (err) {
        console.log('catch', err)
        dispatch({
            type: TASK_UPDATE_FAILURE,
            payload: err,
            error: true
        })
    }
}

export const deleteTask = (taskId) => async dispatch => {
    dispatch({type: TASK_DELETE_START})

    try {
        const response = await deleteTaskApi(taskId)
        dispatch({
            type: TASK_DELETE_SUCCESS,
            payload: response
        })
    } catch (err) {
        console.log('catch', err)
        dispatch({
            type: TASK_DELETE_FAILURE,
            payload: err,
            error: true
        })
    }
}

export const toggleDoneStatus = (taskId) => async dispatch => {
    dispatch({type: TASK_TOGGLE_DONE_STATUS_START})

    try {
        const response = await toggleDoneStatusApi(taskId)
        dispatch({
            type: TASK_TOGGLE_DONE_STATUS_SUCCESS,
            payload: response
        })
    } catch (err) {
        console.log('catch', err)
        dispatch({
            type: TASK_TOGGLE_DONE_STATUS_FAILURE,
            payload: err,
            error: true
        })
    }
}

export const taskPositionUp = (taskId) => async dispatch => {
    dispatch({type: TASK_POSITION_UP_START})

    try {
        const response = await taskPositionUpApi(taskId)
        dispatch({
            type: TASK_POSITION_UP_SUCCESS,
            payload: response
        })
    } catch (err) {
        console.log('catch', err)
        dispatch({
            type: TASK_POSITION_UP_FAILURE,
            payload: err,
            error: true
        })
    }
}

export const taskPositionDown = (taskId) => async dispatch => {
    dispatch({type: TASK_POSITION_DOWN_START})

    try {
        const response = await taskPositionDownApi(taskId)
        dispatch({
            type: TASK_POSITION_DOWN_SUCCESS,
            payload: response
        })
    } catch (err) {
        console.log('catch', err)
        dispatch({
            type: TASK_POSITION_DOWN_FAILURE,
            payload: err,
            error: true
        })
    }
}

export const onEditTaskStart = (task) => dispatch => {
    dispatch({
        type: TASK_EDIT_START,
        payload: task
    })
}

export const onEditTaskFinish = (changedContent) => dispatch => {
    dispatch({
        type: TASK_EDIT_FINISH,
        payload: changedContent
    })
}


export const userSignUp = (email, pass, passConf) => async dispatch => {
    dispatch({type: USER_SIGN_UP_START})

    try {
        const response = await signUpApi(email, pass, passConf)
        dispatch({
            type: USER_SIGN_UP_SUCCESS,
            payload: response
        })
    } catch (err) {
        console.log('catch', err)
        dispatch({
            type: USER_SIGN_UP_FAILURE,
            payload: err,
            error: true
        })
    }
}

export const userSignIn = (email, pass) => async dispatch => {
    dispatch({type: USER_SIGN_IN_START})

    try {
        const response = await signInApi(email, pass)
        dispatch({
            type: USER_SIGN_IN_SUCCESS,
            payload: response //headers
        })
    } catch (err) {
        console.log('catch', err)
        dispatch({
            type: USER_SIGN_IN_FAILURE,
            payload: err,
            error: true
        })
    }
}

export const userSignOut = () => async dispatch => {
    dispatch({type: USER_SIGN_OUT_START})

    try {
        const response = await signOutApi()
        dispatch({
            type: USER_SIGN_OUT_SUCCESS,
            payload: response //headers
        })
    } catch (err) {
        console.log('catch', err)
        dispatch({
            type: USER_SIGN_OUT_FAILURE,
            payload: err,
            error: true
        })
    }
}