import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const mockStore = configureMockStore([thunk]);

import * as Action from '../actions';
import {
    FETCH_LISTS_START, FETCH_LISTS_SUCCESS,
    FETCH_LIST_TASKS_START, FETCH_LIST_TASKS_SUCCESS, FETCH_LIST_TASKS_FAILURE,
    LIST_CREATE_START, LIST_CREATE_SUCCESS, LIST_CREATE_FAILURE,
    LIST_UPDATE_START, LIST_UPDATE_SUCCESS, LIST_UPDATE_FAILURE,
    LIST_DELETE_START, LIST_DELETE_SUCCESS, LIST_DELETE_FAILURE,
    LIST_EDIT_START, LIST_EDIT_FINISH,

    TASK_CREATE_START, TASK_CREATE_SUCCESS, TASK_CREATE_FAILURE,
    TASK_UPDATE_START, TASK_UPDATE_SUCCESS, TASK_UPDATE_FAILURE,
    TASK_DELETE_START, TASK_DELETE_SUCCESS, TASK_DELETE_FAILURE,
    TASK_TOGGLE_DONE_STATUS_START, TASK_TOGGLE_DONE_STATUS_SUCCESS, TASK_TOGGLE_DONE_STATUS_FAILURE,
    TASK_POSITION_UP_START, TASK_POSITION_UP_SUCCESS, TASK_POSITION_UP_FAILURE,
    TASK_POSITION_DOWN_START, TASK_POSITION_DOWN_SUCCESS, TASK_POSITION_DOWN_FAILURE,
    TASK_EDIT_START, TASK_EDIT_FINISH,
    USER_SIGN_UP_START, USER_SIGN_UP_SUCCESS, USER_SIGN_UP_FAILURE,
    USER_SIGN_IN_START, USER_SIGN_IN_SUCCESS, USER_SIGN_IN_FAILURE,
    USER_SIGN_OUT_START, USER_SIGN_OUT_SUCCESS,

} from "../actionTypes";

import {lists, list, updatedList, newListName} from '../__mock-data__/lists';
import {movingUpTaskId, movedUpResult, movedDownResult, movingDownTaskId} from '../__mock-data__/taskMove';
import {email, pass, signInResponse, signUpResponse} from '../__mock-data__/auth';
import {
    tasksOfTheList,
    fetchingListId,
    task,
    updatedTask,
    newTaskContent,
    delTaskId,
    toggledDoneTask
} from '../__mock-data__/tasks';

jest.mock('../api');


describe('### Actions | Lists - Tests', () => {
    let store;
    beforeEach(() => {
        store = mockStore();
    });

    it('>>> fetchLists', async  () => {
        const expectedActions = [
            {
                type: FETCH_LISTS_START
            },
            {
                type: FETCH_LISTS_SUCCESS,
                payload: lists
            }
        ];

        expect.assertions(1);

        await store.dispatch(Action.fetchLists());
        expect(store.getActions()).toEqual(expectedActions);
    });

    it('>>> fetchListTasks - SUCCESS', async  () => {
        const expectedActions = [
            {
                type: FETCH_LIST_TASKS_START
            },
            {
                type: FETCH_LIST_TASKS_SUCCESS,
                payload: tasksOfTheList
            }
        ];

        expect.assertions(1);

        await store.dispatch(Action.fetchListTasks(fetchingListId));
        expect(store.getActions()).toEqual(expectedActions);
    });
    it('>>> fetchListTasks - FAIL', async  () => {
        const expectedActions = [
            {
                type: FETCH_LIST_TASKS_START
            },
            {
                type: FETCH_LIST_TASKS_FAILURE,
                payload: 'err fetchListTasks',
                error: true
            }
        ];

        expect.assertions(1);

        await store.dispatch(Action.fetchListTasks('wrong' + fetchingListId));
        expect(store.getActions()).toEqual(expectedActions);
    });

    it('>>> createList - SUCCESS', async  () => {
        const expectedActions = [
            {
                type: LIST_CREATE_START
            },
            {
                type: LIST_CREATE_SUCCESS,
                payload: list
            }
        ];

        expect.assertions(1);

        await store.dispatch(Action.createList(newListName));
        expect(store.getActions()).toEqual(expectedActions);
    });
    it('>>> createList - FAIL', async  () => {
        const expectedActions = [
            {
                type: LIST_CREATE_START
            },
            {
                type: LIST_CREATE_FAILURE,
                payload: 'err createList',
                error: true
            }
        ];

        expect.assertions(1);

        await store.dispatch(Action.createList('WRONG' + newListName));
        expect(store.getActions()).toEqual(expectedActions);
    });

    it('>>> updateList - SUCCESS', async  () => {
        const expectedActions = [
            {
                type: LIST_UPDATE_START
            },
            {
                type: LIST_UPDATE_SUCCESS,
                payload: updatedList()
            }
        ];

        expect.assertions(1);

        await store.dispatch(Action.updateList(list, newListName));
        expect(store.getActions()).toEqual(expectedActions);
    });
    it('>>> updateList - FAIL', async  () => {
        const expectedActions = [
            {
                type: LIST_UPDATE_START
            },
            {
                type: LIST_UPDATE_FAILURE,
                payload: 'err updateList',
                error: true
            }
        ];

        expect.assertions(1);

        await store.dispatch(Action.updateList(list, 'wrong' + newListName));
        expect(store.getActions()).toEqual(expectedActions);
    });

    it('>>> deleteList - SUCCESS', async  () => {
        const expectedActions = [
            {
                type: LIST_DELETE_START
            },
            {
                type: LIST_DELETE_SUCCESS,
                payload: list
            }
        ];

        expect.assertions(1);

        await store.dispatch(Action.deleteList(list.id));
        expect(store.getActions()).toEqual(expectedActions);
    });
    it('>>> deleteList - FAIL', async  () => {
        const expectedActions = [
            {
                type: LIST_DELETE_START
            },
            {
                type: LIST_DELETE_FAILURE,
                payload: 'err deleteList',
                error: true
            }
        ];

        expect.assertions(1);

        await store.dispatch(Action.deleteList('wrong' + list.id));
        expect(store.getActions()).toEqual(expectedActions);
    });

    it('>>> onEditListStart', () => {
        const expectedActions = [
            {
                type: LIST_EDIT_START,
                payload: list
            }
        ];

        store.dispatch(Action.onEditListStart(list));
        expect(store.getActions()).toEqual(expectedActions);
    });

    it('>>> onEditListFinish', () => {
        const expectedActions = [
            {
                type: LIST_EDIT_FINISH,
                payload: newListName
            }
        ];

        store.dispatch(Action.onEditListFinish(newListName));
        expect(store.getActions()).toEqual(expectedActions);
    });
});


describe('### Actions | Tasks - Tests', () => {
    let store;
    beforeEach(() => {
        store = mockStore();
    });

    it('>>> createTask - SUCCESS', async  () => {
        const expectedActions = [
            {
                type: TASK_CREATE_START
            },
            {
                type: TASK_CREATE_SUCCESS,
                payload: task
            }
        ];

        expect.assertions(1);

        await store.dispatch(Action.createTask(task.content, task.list_id));
        expect(store.getActions()).toEqual(expectedActions);
    });
    it('>>> createTask - FAIL', async  () => {
        const expectedActions = [
            {
                type: TASK_CREATE_START
            },
            {
                type: TASK_CREATE_FAILURE,
                payload: 'err createTask',
                error: true
            }
        ];

        expect.assertions(1);

        await store.dispatch(Action.createTask("task.content", "task.list_id"));
        expect(store.getActions()).toEqual(expectedActions);
    });

    it('>>> updateTask - SUCCESS', async  () => {
        const expectedActions = [
            {
                type: TASK_UPDATE_START
            },
            {
                type: TASK_UPDATE_SUCCESS,
                payload: updatedTask
            }
        ];

        expect.assertions(1);

        await store.dispatch(Action.updateTask(task, newTaskContent));
        expect(store.getActions()).toEqual(expectedActions);
    });
    it('>>> updateTask - FAIL', async  () => {
        const expectedActions = [
            {
                type: TASK_UPDATE_START
            },
            {
                type: TASK_UPDATE_FAILURE,
                payload: 'err updateTask',
                error: true
            }
        ];

        expect.assertions(1);

        await store.dispatch(Action.updateTask(task, 'wrong' + newTaskContent));
        expect(store.getActions()).toEqual(expectedActions);
    });

    it('>>> deleteTask - SUCCESS', async  () => {
        const expectedActions = [
            {
                type: TASK_DELETE_START
            },
            {
                type: TASK_DELETE_SUCCESS,
                payload: task
            }
        ];

        expect.assertions(1);

        await store.dispatch(Action.deleteTask(delTaskId));
        expect(store.getActions()).toEqual(expectedActions);
    });
    it('>>> deleteTask - FAIL', async  () => {
        const expectedActions = [
            {
                type: TASK_DELETE_START
            },
            {
                type: TASK_DELETE_FAILURE,
                payload: 'err deleteTask',
                error: true
            }
        ];

        expect.assertions(1);

        await store.dispatch(Action.deleteTask('wrong' + delTaskId));
        expect(store.getActions()).toEqual(expectedActions);
    });

    it('>>> toggleDoneStatus - SUCCESS', async  () => {
        const expectedActions = [
            {
                type: TASK_TOGGLE_DONE_STATUS_START
            },
            {
                type: TASK_TOGGLE_DONE_STATUS_SUCCESS,
                payload: toggledDoneTask
            }
        ];

        expect.assertions(1);

        await store.dispatch(Action.toggleDoneStatus(task.id));
        expect(store.getActions()).toEqual(expectedActions);
    });
    it('>>> toggleDoneStatus - FAIL', async  () => {
        const expectedActions = [
            {
                type: TASK_TOGGLE_DONE_STATUS_START
            },
            {
                type: TASK_TOGGLE_DONE_STATUS_FAILURE,
                payload: "err toggleDoneStatus",
                error: true
            }
        ];

        expect.assertions(1);

        await store.dispatch(Action.toggleDoneStatus('wrong_id'));
        expect(store.getActions()).toEqual(expectedActions);
    });

    it('>>> taskPositionUp - SUCCESS', async  () => {
        const expectedActions = [
            {
                type: TASK_POSITION_UP_START
            },
            {
                type: TASK_POSITION_UP_SUCCESS,
                payload: movedUpResult
            }
        ];

        expect.assertions(1);

        await store.dispatch(Action.taskPositionUp(movingUpTaskId));
        expect(store.getActions()).toEqual(expectedActions);
    });
    it('>>> taskPositionUp - FAIL', async  () => {
        const expectedActions = [
            {
                type: TASK_POSITION_UP_START
            },
            {
                type: TASK_POSITION_UP_FAILURE,
                payload: 'err taskPositionUp',
                error: true
            }
        ];

        expect.assertions(1);

        await store.dispatch(Action.taskPositionUp('wrong' + movingUpTaskId));
        expect(store.getActions()).toEqual(expectedActions);
    });

    it('>>> taskPositionDown - SUCCESS', async  () => {
        const expectedActions = [
            {
                type: TASK_POSITION_DOWN_START
            },
            {
                type: TASK_POSITION_DOWN_SUCCESS,
                payload: movedDownResult
            }
        ];

        expect.assertions(1);

        await store.dispatch(Action.taskPositionDown(movingDownTaskId));
        expect(store.getActions()).toEqual(expectedActions);
    });
    it('>>> taskPositionDown - FAIL', async  () => {
        const expectedActions = [
            {
                type: TASK_POSITION_DOWN_START
            },
            {
                type: TASK_POSITION_DOWN_FAILURE,
                payload: 'err taskPositionDown',
                error: true
            }
        ];

        expect.assertions(1);

        await store.dispatch(Action.taskPositionDown('wrong' + movingDownTaskId));
        expect(store.getActions()).toEqual(expectedActions);
    });

    it('>>> onEditTaskStart', () => {
        const expectedActions = [
            {
                type: TASK_EDIT_START,
                payload: task
            }
        ];

        store.dispatch(Action.onEditTaskStart(task));
        expect(store.getActions()).toEqual(expectedActions);
    });

    it('>>> onEditTaskFinish', () => {
        const expectedActions = [
            {
                type: TASK_EDIT_FINISH,
                payload: newTaskContent
            }
        ];

        store.dispatch(Action.onEditTaskFinish(newTaskContent));
        expect(store.getActions()).toEqual(expectedActions);
    });
});


describe('### Actions | Auth - Tests', () => {
    let store;
    beforeEach(() => {
        store = mockStore();
    });

    it('>>> userSignUp - SUCCESS', async  () => {
        const expectedActions = [
            {
                type: USER_SIGN_UP_START
            },
            {
                type: USER_SIGN_UP_SUCCESS,
                payload: signUpResponse
            }
        ];

        expect.assertions(1);

        await store.dispatch(Action.userSignUp(email, pass, pass));
        expect(store.getActions()).toEqual(expectedActions);
    });
    it('>>> userSignUp - FAIL', async  () => {
        const expectedActions = [
            {
                type: USER_SIGN_UP_START
            },
            {
                type: USER_SIGN_UP_FAILURE,
                payload: 'err userSignUp',
                error: true
            }
        ];

        expect.assertions(1);

        await store.dispatch(Action.userSignUp('wrong' + email, pass, pass));
        expect(store.getActions()).toEqual(expectedActions);
    });
    
    it('>>> userSignIn - SUCCESS', async  () => {
        const expectedActions = [
            {
                type: USER_SIGN_IN_START
            },
            {
                type: USER_SIGN_IN_SUCCESS,
                payload: signInResponse
            }
        ];

        expect.assertions(1);

        await store.dispatch(Action.userSignIn(email, pass));
        expect(store.getActions()).toEqual(expectedActions);
    });
    it('>>> userSignIn - FAIL', async  () => {
        const expectedActions = [
            {
                type: USER_SIGN_IN_START
            },
            {
                type: USER_SIGN_IN_FAILURE,
                payload: 'err userSignIn',
                error: true
            }
        ];

        expect.assertions(1);

        await store.dispatch(Action.userSignIn('wrong' + email, pass));
        expect(store.getActions()).toEqual(expectedActions);
    });

    it('>>> userSignOut', async  () => {
        const expectedActions = [
            {
                type: USER_SIGN_OUT_START
            },
            {
                type: USER_SIGN_OUT_SUCCESS,
                payload: {success: true}
            }
        ];

        expect.assertions(1);

        await store.dispatch(Action.userSignOut());
        expect(store.getActions()).toEqual(expectedActions);
    });
});