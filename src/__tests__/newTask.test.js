import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {NewTaskSection} from "../components/newTaskSection";

Enzyme.configure({adapter: new Adapter});


describe('### NewTaskSection Component tests', () => {
    const createTask = jest.fn();
    const listId = 13;

    let component;
    beforeEach(() => {
        component = shallow(<NewTaskSection createTask = {createTask} listId = {listId} />);
    });


    it('>> renders without crashing', () => {
        expect(component).toMatchSnapshot();
    });


    it('>> task name; changed text in input is equal to state.value', () => {
        const name = 'Task name'
        fillTxtInput(name);

        expect(component.state().value).toEqual(name);
    });

    it('>> add new task; submitting form calls func createTask() with proper params and clears text Input', () => {
        const name = 'NewTask'
        fillTxtInput(name);

        component.find('div.lst-add-task-section > form').simulate('submit', {preventDefault() {}});

        expect(component.state().value).toEqual("");
        expect(createTask).toHaveBeenCalledWith(name, listId);
    });


    function fillTxtInput(name) {
        const newTaskInput = component.find('form > div.lst-input-wrapper > input');
        newTaskInput.simulate('change', {target: {value: name}});
    }
});