import {
    FETCH_LIST_TASKS_SUCCESS,
    TASK_CREATE_SUCCESS,
    TASK_DELETE_SUCCESS,
    TASK_POSITION_UP_SUCCESS,
    TASK_POSITION_DOWN_SUCCESS,
    TASK_TOGGLE_DONE_STATUS_SUCCESS,
    USER_SIGN_OUT_SUCCESS,
} from '../actionTypes'

const initialState = []

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_LIST_TASKS_SUCCESS:
            return state.concat(payload)
        case TASK_CREATE_SUCCESS:
            return [...state, payload]
        case TASK_DELETE_SUCCESS:
            return state.filter(t => t.id !== payload.id)
        case TASK_TOGGLE_DONE_STATUS_SUCCESS:
            const withoutPayload = state.filter(t => t.id !== payload.id)
            return [...withoutPayload, payload]
        case TASK_POSITION_UP_SUCCESS:
        case TASK_POSITION_DOWN_SUCCESS:
            const listId = payload[0].list_id
            const withoutListId = state.filter(t => t.list_id !== listId)
            return [...withoutListId, ...payload]
        case USER_SIGN_OUT_SUCCESS:
            return []
        default:
            return state 
    }
}