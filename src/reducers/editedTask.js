import {
    TASK_EDIT_START,
    TASK_EDIT_FINISH,
} from '../actionTypes'


const initialState = {}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case TASK_EDIT_START:
            return payload;
        case TASK_EDIT_FINISH:
            return initialState;
        default:
            return state
    }
}