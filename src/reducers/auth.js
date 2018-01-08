import Cookie from 'js-cookie'

import {
    USER_SIGN_UP_SUCCESS,
    USER_SIGN_UP_FAILURE,
    USER_SIGN_IN_SUCCESS,
    USER_SIGN_IN_FAILURE,
    USER_SIGN_OUT_SUCCESS,
} from '../actionTypes'


const initialState = {
    'isAuthenticate': Cookie('uid') && Cookie('access-token') ? true : false,
    'userName': Cookie('uid') ? Cookie('uid') : 'Not logged in'
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case USER_SIGN_UP_SUCCESS:
        case USER_SIGN_IN_SUCCESS:
            return {
                'isAuthenticate': true ,
                'userName': payload['uid']
            }
        case USER_SIGN_UP_FAILURE:
        case USER_SIGN_IN_FAILURE:
        case USER_SIGN_OUT_SUCCESS:
            return {
                'isAuthenticate': false,
                'userName': 'Not logged in'
            }

        default:
            return state
    }
}