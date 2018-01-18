import {setAuthCookies, removeAuthCookies} from '../cookies/index'
import axios from 'axios'

// const baseUrl = 'http://localhost:3000/'
const baseUrl = 'https://api-ornull-list.herokuapp.com/'



export const fetchLists = async (headers) => {
    const response = await axios.get(baseUrl + 'v1/lists', { headers })
    setAuthCookies(response.headers)
    return response.data
}

export const fetchListTasks = async (listId, headers) => {
    const response = await axios.get(baseUrl + 'v1/list_tasks/' + listId, { headers })
    setAuthCookies(response.headers)
    return response.data
}

export const createList = async (name, headers) => {
    const response = await axios.post(baseUrl + 'v1/lists/', {list:{label: name}}, { headers })
    setAuthCookies(response.headers)
    return response.data
}

export const updateList = async (list, headers) => {
    const response = await axios.patch(baseUrl + 'v1/lists/' + list.id, list, { headers })
    setAuthCookies(response.headers)
    return response.data
}

export const deleteList = async (listId, headers) => {
    const response = await axios.delete(baseUrl + 'v1/lists/' + listId, { headers })
    setAuthCookies(response.headers)
    return response.data
}

export const createTask = async (content, listId, headers) => {
    const response = await axios.post(baseUrl + 'v1/tasks/', {task:{content: content, list_id: listId}}, { headers })
    setAuthCookies(response.headers)
    return response.data
}

export  const updateTask = async (task, headers) => {
    const response = await axios.patch(baseUrl + 'v1/tasks/' + task.id, task, { headers })
    setAuthCookies(response.headers)
    return response.data
}

export const deleteTask = async (taskId, headers) => {
    const response = await axios.delete(baseUrl + 'v1/tasks/' + taskId, { headers })
    setAuthCookies(response.headers)
    return response.data
}

export const toggleDoneStatus = async (taskId, headers) => {
    const response = await axios.patch(baseUrl + 'v1/tasks/' + taskId + '/check', null,{ headers })
    setAuthCookies(response.headers)
    return response.data
}

export const taskPositionUp = async (taskId, headers) => {
    const response = await axios.patch(baseUrl + 'v1/tasks/' + taskId + '/up', null, { headers })
    setAuthCookies(response.headers)
    return response.data
}

export const taskPositionDown = async (taskId, headers) => {
    const response = await axios.patch(baseUrl + 'v1/tasks/' + taskId + '/down', null, { headers })
    setAuthCookies(response.headers)
    return response.data
}


export const signUp = async(email, pass, passConf) => {
    const response = await axios.post(baseUrl + 'auth', {
            'email': email,
            'password': pass,
            'password_confirmation': passConf,
            'confirm_success_url': '/'
        })
    setAuthCookies(response.headers)
    return response.headers
}

export const signIn = async(email, pass) => {
    const response = await axios.post(baseUrl + 'auth/sign_in', {
            'email': email,
            'password': pass
        })
    setAuthCookies(response.headers)
    return response.headers
}

export const signOut = async(headers) => {
    const response = await axios.delete(baseUrl + 'auth/sign_out', { headers })
    removeAuthCookies()
    return response.data
}

export const validateToken = async(headers)  => {
    const response = await axios.get(baseUrl + 'auth/validate_token', { headers })
    return response
}