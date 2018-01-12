import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {SignUp} from "../components/signUp";

Enzyme.configure({adapter: new Adapter});


describe('### SignIn Component tests', () => {
    const email = 'user@mail.com';
    const pass = '11223344';
    const pass_confirm = pass;
    const userSignUp = jest.fn();
    const authInfo_mock = {
        authInfo: {
            isAuthenticate: false
        }
    };

    let component;
    beforeEach(() => {
        component = shallow(<SignUp userSignUp={userSignUp} authInfo={authInfo_mock}/>);
        component.setState({email: '', password: '', password_confirmation: ''});
    });


    it('>> renders without crashing', () => {
        expect(component).toMatchSnapshot();
    });


    it('>> state has same values as in text Inputs', () => {
        fillTxtInput('form input[type="email"]', email);
        fillTxtInput('form input.pass', pass);
        fillTxtInput('form input.pass-confirm', pass_confirm);

        expect(component.state().email).toEqual(email);
        expect(component.state().password).toEqual(pass);
        expect(component.state().password_confirmation).toEqual(pass_confirm);
    });

    it('>> form submitting calls userSignUp func with proper params', () => {
        fillTxtInput('form input[type="email"]', email);
        fillTxtInput('form input.pass', pass);
        fillTxtInput('form input.pass-confirm', pass_confirm);

        component.find('div.sign-forms > form').simulate('submit', {preventDefault() {}});
        expect(userSignUp).toHaveBeenCalledWith(email, pass, pass_confirm);
    });




    function fillTxtInput(selector, value) {
        const foundInput = component.find(selector);
        foundInput.simulate('change', {target: {value: value}});
        return foundInput;
    }
});