import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Layout} from '../components/layout';


Enzyme.configure({adapter: new Adapter});


describe('### Layout tests', () => {

    let component;

    it('>> renders without crashing when not logged in', () => {
        const validateToken = jest.fn();
        const resetTokenValidation = jest.fn();

        component = shallow(
                <Layout
                    authInfo = {{tokenValidating: false}}
                    validateToken = { validateToken }
                    resetTokenValidation = { resetTokenValidation }
                />
            );
        expect(component).toMatchSnapshot();
    });

    it('>> if user is not logged in, renders SignIn/SignUp links', () => {
        const validateToken = jest.fn();
        const resetTokenValidation = jest.fn();

        component = shallow(
            <Layout
                authInfo = {{tokenValidating: false, isAuthenticate: false}}
                validateToken = { validateToken }
                resetTokenValidation = { resetTokenValidation }

            />
        );

        const links = component.find('Link');
        expect(links).toHaveLength(2);
        expect(links.at(0).children().text()).toEqual('Sign In');
        expect(links.at(1).children().text()).toEqual('Registration');
    });

    it('>> if user is logged in, renders user Email and SignOut btn ', () => {
        const usrName = 'mail@i.ua';
        const validateToken = jest.fn();
        const resetTokenValidation = jest.fn();

        component = shallow(
            <Layout
                authInfo = {{tokenValidating: false, isAuthenticate: true, userName: usrName}}
                validateToken = { validateToken }
                resetTokenValidation = { resetTokenValidation }
            />
        )

        const btnSignOut = component.find('button.sign-out');
        expect(btnSignOut).toHaveLength(1);

        const usr = component.find('span.usr-name');
        expect(usr.text()).toEqual('User: ' + usrName);
    });

    it('>> clicking on SignOut btn calls proper func', () => {
        const usrName = 'mail@i.ua';
        const signOut = jest.fn();
        const validateToken = jest.fn();
        const resetTokenValidation = jest.fn();

        component = shallow(
            <Layout
                authInfo = {{tokenValidating: false, isAuthenticate: true, userName: usrName}}
                userSignOut = { signOut }
                validateToken = { validateToken }
                resetTokenValidation = { resetTokenValidation }
            />
        );

        const btnSignOut = component.find('button.sign-out');
        btnSignOut.simulate('click');

        expect(signOut).toHaveBeenCalled();
        expect(resetTokenValidation).toHaveBeenCalled();
    });

    it('>> show spinner when token is validated', () => {
        const validateToken = jest.fn();
        const resetTokenValidation = jest.fn();

        component = shallow(
            <Layout
                authInfo = {{tokenValidating: true, isAuthenticate: false, userName: ''}}
                validateToken = { validateToken }
                resetTokenValidation = { resetTokenValidation }
            />
        );

        const spinerTag = component.find('#spiner');

        expect(spinerTag).toHaveLength(1);
    });



});