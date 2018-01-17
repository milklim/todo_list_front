import {getCookie, getAuthCookies, isLoggedFromCookies} from "../cookies";

import {
USER_SIGN_UP_SUCCESS,
USER_SIGN_UP_FAILURE,
USER_SIGN_IN_SUCCESS,
USER_SIGN_IN_FAILURE,
USER_SIGN_OUT_SUCCESS,
VALIDATE_TOKEN_SUCCESS,
VALIDATE_TOKEN_FAILURE,
} from '../actionTypes'


// const initialState = {
//     'isAuthenticate': Cookie('uid') && Cookie('access-token') ? true : false,
//     'userName': Cookie('uid') ? Cookie('uid') : 'Not logged in'
// }
const notLoggedName = 'Not logged in'

const initialState = {
    'isAuthenticate': false,
    'userName': notLoggedName
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case USER_SIGN_UP_SUCCESS:
        case USER_SIGN_IN_SUCCESS:
            return {
                'isAuthenticate': true ,
                'userName': payload['uid'],
                'headers': {
                    'access-token': payload['access-token'],
                    'client': payload['client'],
                    'uid': payload['uid']
                }

            }
        case USER_SIGN_UP_FAILURE:
        case USER_SIGN_IN_FAILURE:
        case USER_SIGN_OUT_SUCCESS:
        case VALIDATE_TOKEN_FAILURE:
            return {
                'isAuthenticate': false,
                'userName': notLoggedName
            }

        case VALIDATE_TOKEN_SUCCESS:
            return {
                'isAuthenticate': true,
                'userName': getCookie('uid'),
                'headers': getAuthCookies()
            }

        // case VALIDATE_TOKEN_FAILURE:
        //     return {
        //         'isAuthenticate': false ,
        //         'userName': notLoggedName
        //     }

        default:
            return state
    }
}