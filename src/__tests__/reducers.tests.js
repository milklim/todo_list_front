import * as act from '../actionTypes';
import {list} from '../__mock-data__/lists';
import {task} from "../__mock-data__/tasks";
import {signUpResponse, signInResponse} from "../__mock-data__/auth";

import editedList from "../reducers/editedList";
import editedTask from "../reducers/editedTask";
import auth from "../reducers/auth";


describe('### Reducer | editedList - Tests', () => {

    let state;
    let action;

    it('>>> should return the initial state', () => {
        expect(editedList(undefined, {})).toEqual({});
    });

    it('>>> handle LIST_EDIT_START', () => {
        state = {};
        action = {
            type: act.LIST_EDIT_START,
            payload: list
        };
        expect(editedList(state, action)).toEqual(list);
    });

    it('>>> handle LIST_EDIT_FINISH', () => {
        state = {list};
        action = {
            type: act.LIST_EDIT_FINISH,
            payload: "whatever"
        };
        expect(editedList(state, action)).toEqual({});
    });
});


describe('### Reducer | editedTask - Tests', () => {

    let state;
    let action;

    it('>>> should return the initial state', () => {
        expect(editedTask(undefined, {})).toEqual({});
    });

    it('>>> handle TASK_EDIT_START', () => {
        state = {};
        action = {
            type: act.TASK_EDIT_START,
            payload: task
        };
        expect(editedTask(state, action)).toEqual(task);
    });

    it('>>> handle TASK_EDIT_FINISH', () => {
        state = {task};
        action = {
            type: act.TASK_EDIT_FINISH,
            payload: "whatever"
        };
        expect(editedTask(state, action)).toEqual({});
    });
});


describe('### Reducer | auth - Tests', () => {

    let state;
    let action;

    it('>>> should return the initial state', () => {
        state = {
            isAuthenticate:  false,
            userName:  'Not logged in'
        };
        expect(auth(undefined, {})).toEqual(state);

    });

    it('>>> handle USER_SIGN_UP_SUCCESS', () => {
        state = {
            isAuthenticate: true ,
            userName: signUpResponse['uid']
        };
        action = {
            type: act.USER_SIGN_UP_SUCCESS,
            payload: signUpResponse
        };
        expect(auth("whatever", action)).toEqual(state);
    });

    it('>>> handle USER_SIGN_IN_SUCCESS', () => {
        state = {
            isAuthenticate: true ,
            userName: signInResponse['uid']
        };
        action = {
            type: act.USER_SIGN_IN_SUCCESS,
            payload: signInResponse
        };
        expect(auth("whatever", action)).toEqual(state);
    });


    it('>>> handle USER_SIGN_UP_FAILURE, USER_SIGN_IN_FAILURE, USER_SIGN_OUT_SUCCESS', () => {
        state = {
            isAuthenticate:  false,
            userName:  'Not logged in'
        };
        action = {
            type: act.USER_SIGN_UP_FAILURE,
            payload: "whatever"
        }
        expect(auth("whatever_state", action)).toEqual(state);

        action = {
            type: act.USER_SIGN_IN_FAILURE,
            payload: "whatever"
        }
        expect(auth("whatever_state", action)).toEqual(state);

        action = {
            type: act.USER_SIGN_OUT_SUCCESS,
            payload: "whatever"
        }
        expect(auth("whatever_state", action)).toEqual(state);

    });

});