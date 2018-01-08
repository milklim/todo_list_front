import {
    LIST_EDIT_START,
    LIST_EDIT_FINISH,
} from '../actionTypes'


const initialState = {}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case LIST_EDIT_START:
            return payload
        case LIST_EDIT_FINISH:
            return {}
        default:
            return state
    }
}