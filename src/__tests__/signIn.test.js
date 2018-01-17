import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {SignIn} from "../components/signIn";


Enzyme.configure({adapter: new Adapter});


describe('### SignIn Component tests', () => {
    const email = 'user@mail.com';
    const pass = '11223344';
    const userSignIn = jest.fn();
    const authInfo_mock = {
        authInfo: {
            isAuthenticate: false
        }
    };

    let component;
    beforeEach(() => {
        component = shallow(<SignIn userSignIn={userSignIn} authInfo={authInfo_mock}/>);
        component.setState({email: '', password: ''});
    });


    it('>> renders without crashing', () => {
        expect(component).toMatchSnapshot();
    });

    it('>> state has same values as in text Inputs', () => {
        fillTxtInput('form input[type="email"]', email);
        fillTxtInput('form input[type="password"]', pass);

        expect(component.state().email).toEqual(email);
        expect(component.state().password).toEqual(pass);
    });

    it('>> form submitting calls userSignIn func with proper params', () => {
        fillTxtInput('form input[type="email"]', email);
        fillTxtInput('form input[type="password"]', pass);

        component.find('div.sign-forms > form').simulate('submit', {preventDefault() {}});
        expect(userSignIn).toHaveBeenCalledWith(email, pass);
    });




    function fillTxtInput(selector, value) {
        const foundInput = component.find(selector);
        foundInput.simulate('change', {target: {value: value}});
        return foundInput;
    }
});