import {lists, list, newListName} from '../../__mock-data__/lists';
import {
    tasksOfTheList,
    task,
    newTaskContent,
    fetchingListId,
    delTaskId,
    toggledDoneTask,
} from '../../__mock-data__/tasks';
import {movingUpTaskId, movedUpResult, movingDownTaskId, movedDownResult} from '../../__mock-data__/taskMove';
import {signUpResponse, signInResponse} from '../../__mock-data__/auth';


let tsk;

export function fetchLists() {
    return new Promise((resolve, reject) => {
        process.nextTick(() => resolve(lists));
    });
};

export function fetchListTasks(listId) {
    return new Promise((resolve, reject) => {
        if (listId === fetchingListId)
            process.nextTick(() => resolve(tasksOfTheList));
        else
            process.nextTick(() => reject('err fetchListTasks'))
    });
};

export function createList(name) {
    return new Promise((resolve, reject) => {
        if (name === newListName)
            process.nextTick(() => resolve(list));
        else
            process.nextTick(() => reject('err createList'));
    });
};

export function updateList(updList) {
    return new Promise((resolve, reject) => {
        if (updList.label === newListName)
            process.nextTick(() => resolve(updList));
        else
            process.nextTick(() => reject('err updateList'));
    });
};

export function deleteList(id) {
    return new Promise((resolve, reject) => {
        if (id === list.id)
            process.nextTick(() => resolve(list));
        else
            process.nextTick(() => reject('err deleteList'));
    });
};


export function createTask(content, listId) {
    return new Promise((resolve, reject) => {
        tsk = {...task};
        if (tsk.content === content && tsk.list_id === listId)
            process.nextTick(() => resolve(tsk));
        else
            process.nextTick(() => reject('err createTask'));
    });
};

export function updateTask(updTask) {
    return new Promise((resolve, reject) => {
        if (updTask.content === newTaskContent)
            process.nextTick(() => resolve(updTask));
        else
            process.nextTick(() => reject('err updateTask'));
    });
};

export function deleteTask(id) {
    return new Promise((resolve, reject) => {
        if ( id === delTaskId)
            process.nextTick(() => resolve(task));
        else
            process.nextTick(() => reject('err deleteTask'));
    });
};

export function toggleDoneStatus(id) {
    return new Promise((resolve, reject) => {
        if (id === task.id)
            process.nextTick(() => resolve(toggledDoneTask));
        else {
            process.nextTick(() => reject("err toggleDoneStatus"));
        }
    });
};

export function taskPositionUp(id) {
    return new Promise((resolve, reject) => {
        if (id === movingUpTaskId)
            process.nextTick(() => resolve(movedUpResult));
        else
            process.nextTick(() => reject("err taskPositionUp"));
    });
};

export function taskPositionDown(id) {
    return new Promise((resolve, reject) => {
        if (id === movingDownTaskId)
            process.nextTick(() => resolve(movedDownResult));
        else
            process.nextTick(() => reject("err taskPositionDown"));
    });
};


export function signUp(email, pass, passConf) {
    return new Promise((resolve, reject) => {
        if (email === signUpResponse.uid)
            process.nextTick(() => resolve(signUpResponse));
        else
            process.nextTick(() => reject("err userSignUp"));
    });
}

export function signIn(email, pass) {
    return new Promise((resolve, reject) => {
        if (email === signInResponse.uid)
            process.nextTick(() => resolve(signInResponse));
        else
            process.nextTick(() => reject("err userSignIn"));
    });
}

export function signOut(email, pass) {
    return new Promise((resolve, reject) => {
        process.nextTick(() => resolve({success: true}));

    });
}
