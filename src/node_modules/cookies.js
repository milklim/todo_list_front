import Cookies from 'js-cookie'

export const setAuthCookies = (headers) => {
    setCookie('access-token', headers['access-token'])
    setCookie('client', headers['client'])
    setCookie('uid', headers['uid'])
}

export const getCookie = (key) => {
    return Cookies.get(key)
}

export const setCookie = (key, value) => {
    if(key && value !== undefined) {
        Cookies.set(key, value)
    }
}

export const removeAuthCookies = () => {
    Cookies.remove('access-token')
    Cookies.remove('client')
    Cookies.remove('uid')
}