import {
    FETCH_LISTS_SUCCESS,
    LIST_CREATE_SUCCESS,
    LIST_DELETE_SUCCESS,
} from '../actionTypes'

const initialState = []

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_LISTS_SUCCESS:
            return [...state, ...payload];
        case LIST_CREATE_SUCCESS:
            return [...state, payload];
        case LIST_DELETE_SUCCESS:
            return state.filter(l => l.id !== payload.id)
        default:
            return state
    }
}