import {
    equals,
    filter,
    sortBy,
    prop,
} from 'ramda'

export const getLists = (state) => state.lists

export const getTasksOfList = (state, listId) => {
    // const isInList = (task) => equals(task.list_id, listId)
    // const tasks = filter(isInList, state.tasks)
    // return sortBy(prop('position'))(tasks)
    return state.tasks.filter(t => t.list_id == listId)
}

export const getAllTasks = (state) => state.tasks

export const getEditingTask = (state) => {
    return state.editingTask
}

export const getEditingList = (state) => {
    return state.editingList
}

export const getAuthInfo = (state) => {
    return state.auth
}
