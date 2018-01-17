import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Layout} from '../components/layout';


Enzyme.configure({adapter: new Adapter});


describe('### Layout tests', () => {

    let component;

    it('>> renders without crashing when not logged in', () => {
        const validateToken = jest.fn();
        component = shallow(
                <Layout
                    validateToken = { validateToken }
                />
            );
        expect(component).toMatchSnapshot();
    });

    it('>> if user is not logged in, renders SignIn/SignUp links', () => {
        const validateToken = jest.fn();
        component = shallow(
            <Layout
                isLoggedIn = { false }
                validateToken = { validateToken }
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
        component = shallow(
            <Layout
                isLoggedIn = { true }
                userName = { usrName }
                validateToken = { validateToken }
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

        component = shallow(
            <Layout
                isLoggedIn = { true }
                userName = { usrName }
                userSignOut = { signOut }
                validateToken = { validateToken }
            />
        );

        const btnSignOut = component.find('button.sign-out');
        btnSignOut.simulate('click');

        expect(signOut).toHaveBeenCalled();
        expect(validateToken).toHaveBeenCalled();
    });



});