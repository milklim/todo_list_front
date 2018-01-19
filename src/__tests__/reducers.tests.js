import * as act from '../actionTypes';
import { LOCATION_CHANGE } from 'react-router-redux';

import * as lstMock from '../__mock-data__/lists';
import * as tskMock from "../__mock-data__/tasks";
import {signUpResponse, signInResponse, mockAuthCookies} from "../__mock-data__/auth";

import editedList from "../reducers/editedList";
import editedTask from "../reducers/editedTask";
import auth from "../reducers/auth";
import lists from '../reducers/lists';
import tasks from '../reducers/tasks';
import {VALIDATE_TOKEN_START} from "../actionTypes";
import {RESET_TOKEN_VALIDATION} from "../actionTypes";
jest.mock('../cookies');

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
            payload: lstMock.list
        };
        expect(editedList(state, action)).toEqual(lstMock.list);
    });

    it('>>> handle LIST_EDIT_FINISH', () => {
        state = {currState: 'every state will be empty obj'};
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
            payload: tskMock.task
        };
        expect(editedTask(state, action)).toEqual(tskMock.task);
    });

    it('>>> handle TASK_EDIT_FINISH', () => {
        state = tskMock.task;
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
            tokenValidating: true,
            userName:  'Not logged in',
            'isAuthErr': false
        };
        expect(auth(undefined, {})).toEqual(state);
    });

    it('>>> VALIDATE_TOKEN_START: should return current state', () => {
        state = {
            isAuthenticate:  false,
            tokenValidating: true,
            userName:  'Not logged in'
        };
        expect(auth(state, {type: act.VALIDATE_TOKEN_START})).toEqual(state);
    });

    it('>>> handle VALIDATE_TOKEN_SUCCESS', () => {
        state = {
            headers: mockAuthCookies,
            isAuthenticate:  true,
            isAuthErr: false,
            tokenValidating: false,
            userName: mockAuthCookies.uid
        };
        action = {
            type: act.VALIDATE_TOKEN_SUCCESS,
            payload: signUpResponse
        };
        expect(auth(state, action)).toEqual(state);
    });

    it('>>> handle USER_SIGN_UP_SUCCESS', () => {
        state = {
            isAuthenticate: true ,
            userName: signUpResponse['uid'],
            isAuthErr: false,
            headers: {
                'access-token': signInResponse['access-token'],
                'client': signInResponse['client'],
                'uid': signInResponse['uid']
            }
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
            userName: signInResponse['uid'],
            isAuthErr: false,
            headers: {
                'access-token': signInResponse['access-token'],
                'client': signInResponse['client'],
                'uid': signInResponse['uid']
            }
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
            tokenValidating: false,
            userName:  'Not logged in',
            isAuthErr: true
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

    });

    it('>>> handle USER_SIGN_OUT_SUCCESS', () => {
        state = {
            isAuthenticate:  false,
            tokenValidating: false,
            userName:  'Not logged in',
            isAuthErr: false
        };

        action = {
            type: act.USER_SIGN_OUT_SUCCESS,
            payload: "whatever"
        }
        expect(auth("whatever_state", action)).toEqual(state);

    });

    it('>>> handle LOCATION_CHANGE (isAuthErr: true) - reset isAuthErr attr if location was changed', () => {
        state = {
            isAuthenticate:  false,
            tokenValidating: false,
            userName:  'Not logged in',
            isAuthErr: true
        };
        const newState = {
            isAuthenticate:  false,
            tokenValidating: false,
            userName:  'Not logged in',
            isAuthErr: false
        }

        action = {
            type: LOCATION_CHANGE,
            payload: "whatever"
        }
        expect(auth(state, action)).toEqual(newState);
    });

    it('>>> handle LOCATION_CHANGE (isAuthErr: false) - reset isAuthErr attr if location was changed', () => {
        state = {
            isAuthenticate:  false,
            tokenValidating: false,
            userName:  'Not logged in',
            isAuthErr: false
        };
        const newState = {
            isAuthenticate:  false,
            tokenValidating: false,
            userName:  'Not logged in',
            isAuthErr: false
        }

        action = {
            type: LOCATION_CHANGE,
            payload: "whatever"
        }
        expect(auth(state, action)).toEqual(newState);
    });

    it('>>> handle RESET_TOKEN_VALIDATION ', () => {
        state = {
            'isAuthenticate': false,
            'tokenValidating': false,
            'userName': 'Not logged in',
            'isAuthErr': false
        };

        action = {
            type: RESET_TOKEN_VALIDATION,
            payload: "whatever"
        }
        expect(auth('any_state', action)).toEqual(state);
    });

});


describe('### Reducer | lists - Tests', () => {

    let state;
    let action;

    it('>>> should return the initial state', () => {
        expect(lists(undefined, {})).toEqual([]);
    });

    it('>>> handle FETCH_LISTS_SUCCESS when state is empty', () => {
        state = [];
        action = {
            type: act.FETCH_LISTS_SUCCESS,
            payload: lstMock.lists
        };
        expect(lists(state, action)).toEqual(lstMock.lists);
    });

    it('>>> handle FETCH_LISTS_SUCCESS when state is not empty', () => {
        state = [lstMock.list];
        action = {
            type: act.FETCH_LISTS_SUCCESS,
            payload: lstMock.lists
        };
        expect(lists(state, action)).toEqual(lstMock.lists);
    });

    it('>>> handle LIST_CREATE_SUCCESS when state is empty', () => {
        state = [];
        action = {
            type: act.LIST_CREATE_SUCCESS,
            payload: lstMock.list
        };
        expect(lists(state, action)).toEqual([lstMock.list]);
    });

    it('>>> handle LIST_CREATE_SUCCESS when state is not empty', () => {
        state = lstMock.lists;
        action = {
            type: act.LIST_CREATE_SUCCESS,
            payload: lstMock.list
        };
        expect(lists(state, action)).toEqual([...state, lstMock.list]);
    });

    it('>>> handle LIST_DELETE_SUCCESS', () => {
        state = lstMock.lists;
        action = {
            type: act.LIST_DELETE_SUCCESS,
            payload: lstMock.listForDel
        };
        expect(lists(state, action)).toEqual(lstMock.listsAfterDel);
    });

});


describe('### Reducer | tasks - Tests', () => {

    let state;
    let action;

    it('>>> should return the initial state', () => {
        expect(tasks(undefined, {})).toEqual([]);
    });

    it('>>> handle FETCH_LIST_TASKS_SUCCESS when state is empty', () => {
        state = [];
        action = {
            type: act.FETCH_LIST_TASKS_SUCCESS,
            payload: tskMock.tasks
        };
        expect(tasks(state, action)).toEqual(tskMock.tasks);
    });

    it('>>> handle FETCH_LIST_TASKS_SUCCESS when state is not empty', () => {
        state = tskMock.tasks;
        action = {
            type: act.FETCH_LIST_TASKS_SUCCESS,
            payload: tskMock.tasksOfTheList
        };
        expect(tasks(state, action)).toEqual([...state, ...tskMock.tasksOfTheList]);
    });

    it('>>> handle TASK_CREATE_SUCCESS when state is empty', () => {
        state = [];
        action = {
            type: act.TASK_CREATE_SUCCESS,
            payload: tskMock.task
        };
        expect(tasks(state, action)).toEqual([tskMock.task]);
    });

    it('>>> handle TASK_CREATE_SUCCESS when state is empty', () => {
        state = tskMock.tasks;
        action = {
            type: act.TASK_CREATE_SUCCESS,
            payload: tskMock.task
        };
        expect(tasks(state, action)).toEqual([...state, tskMock.task]);
    });

    it('>>> handle TASK_DELETE_SUCCESS', () => {
        state = tskMock.tasks;
        action = {
            type: act.TASK_DELETE_SUCCESS,
            payload: tskMock.taskForDel
        };
        expect(tasks(state, action)).toEqual(tskMock.tasksAfterDel);
    });

    it('>>> handle TASK_TOGGLE_DONE_STATUS_SUCCESS', () => {
        state = tskMock.tasks;
        action = {
            type: act.TASK_TOGGLE_DONE_STATUS_SUCCESS,
            payload: tskMock.taskWithToggledDone
        };
        expect(tasks(state, action)).toEqual(tskMock.tasksAfterToggleDone);
    });

    it('>>> handle TASK_POSITION_UP_SUCCESS', () => {
        state = tskMock.tasksOfTheList;
        action = {
            type: act.TASK_POSITION_UP_SUCCESS,
            payload: tskMock.tasksAfterMovingUp
        };
        expect(tasks(state, action)).toEqual(tskMock.tasksAfterMovingUp);
    });

    it('>>> handle TASK_POSITION_DOWN_SUCCESS', () => {
        state = tskMock.tasksOfTheList;
        action = {
            type: act.TASK_POSITION_DOWN_SUCCESS,
            payload: tskMock.tasksAfterMovingDown
        };
        expect(tasks(state, action)).toEqual(tskMock.tasksAfterMovingDown);
    });

    it('>>> handle USER_SIGN_OUT_SUCCESS', () => {
        state = {currState: 'any state'};
        action = {
            type: act.USER_SIGN_OUT_SUCCESS,
            payload: "any"
        };
        expect(tasks(state, action)).toEqual([]);
    });
});
