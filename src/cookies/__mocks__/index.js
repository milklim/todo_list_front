import {mockAuthCookies} from "../../__mock-data__/auth"




export const getAuthCookies = () => {
    return mockAuthCookies;
}

export const getCookie = (key) => {
    return mockAuthCookies[key];
}