import {
    equals,
    filter,
    sortBy,
    prop,
} from 'ramda'

export const getLists = (state) => state.lists

export const getTasksOfList = (state, listId) => {
    let tasks = state.tasks.filter(t => t.list_id == listId)
    return tasks.sort((a, b) => a.position - b.position)
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
