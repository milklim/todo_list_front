import {getAuthCookies, getCookie} from "../cookies";

export const email = 'user@mail.com';
export const pass = '12345678';

export const signUpResponse = {
    'access-token': 'xZgSOpo3GcXrcAfqxTf9tg',
    'client': '4f456SxtMPWstNe9cZGhrA',
    expiry: '1516968521',
    'uid': email,
    'token-type': 'Bearer',
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'max-age=0, private, must-revalidate',
    'server-time': '1515758921'
};

export const signInResponse = signUpResponse;

export const mockAuthCookies = {
        'access-token': signUpResponse['access-token'],
        'client': signUpResponse['client'],
        'uid': signUpResponse['uid']
}