import {getCookie, setAuthCookies, removeAuthCookies} from '../cookies'

const axios = require('axios')
// const baseUrl = 'http://localhost:3000/'
const baseUrl = 'https://api-ornull-list.herokuapp.com/'


const authHeader = () => {
  return {
      'access-token': getCookie('access-token'),
      'client': getCookie('client'),
      'uid': getCookie('uid')
  }
}

export const fetchLists = async () => {
    const response = await axios.get(baseUrl + 'v1/lists', { headers: authHeader() })
    setAuthCookies(response.headers)
    return response.data
}

export const fetchListTasks = async (listId) => {
    const response = await axios.get(baseUrl + 'v1/list_tasks/' + listId, { headers: authHeader() })
    setAuthCookies(response.headers)
    return response.data
}

export const createList = async (name) => {
    const response = await axios.post(baseUrl + 'v1/lists/', {list:{label: name}}, { headers: authHeader() })
    setAuthCookies(response.headers)
    return response.data
}

export const updateList = async (list) => {
    const response = await axios.patch(baseUrl + 'v1/lists/' + list.id, list, { headers: authHeader() })
    setAuthCookies(response.headers)
    return response.data
}

export const deleteList = async (listId) => {
    const response = await axios.delete(baseUrl + 'v1/lists/' + listId, { headers: authHeader() })
    setAuthCookies(response.headers)
    return response.data
}

export const createTask = async (content, listId) => {
    const response = await axios.post(baseUrl + 'v1/tasks/', {task:{content: content, list_id: listId}}, { headers: authHeader() })
    setAuthCookies(response.headers)
    return response.data
}

export  const updateTask = async (task) => {
    const response = await axios.patch(baseUrl + 'v1/tasks/' + task.id, task, { headers: authHeader() })
    setAuthCookies(response.headers)
    return response.data
}

export const deleteTask = async (taskId) => {
    const response = await axios.delete(baseUrl + 'v1/tasks/' + taskId, { headers: authHeader() })
    setAuthCookies(response.headers)
    return response.data
}

export const toggleDoneStatus = async (taskId) => {
    const response = await axios.patch(baseUrl + 'v1/tasks/' + taskId + '/check', null,{ headers: authHeader() })
    setAuthCookies(response.headers)
    return response.data
}

export const taskPositionUp = async (taskId) => {
    const response = await axios.patch(baseUrl + 'v1/tasks/' + taskId + '/up', null, { headers: authHeader() })
    setAuthCookies(response.headers)
    return response.data
}

export const taskPositionDown = async (taskId) => {
    const response = await axios.patch(baseUrl + 'v1/tasks/' + taskId + '/down', null, { headers: authHeader() })
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

export const signOut = async() => {
    const response = await axios.delete(baseUrl + 'auth/sign_out', {headers: authHeader()})
    console.log('SIGNed_OUT!')
    removeAuthCookies()
    return response.data
}