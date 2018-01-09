import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {ListHeader} from "../components/listHeader";
import {list} from '../__mock-data__/lists'

Enzyme.configure({adapter: new Adapter});


describe('### ListHeader - On Edit Name', () => {

    let component;
    const editListStart = jest.fn(()=>component.setState({'isEditing': true}));
    const updateList = jest.fn();
    const editComplete = jest.fn(() => component.setState({'isEditing': false}));
    const delList = jest.fn((id)=>component.setState({listForDelId: id}));

    beforeEach(() => {
        component = mount(<ListHeader
            list = {list}
            editingList = {list}
            onEditListStart = {editListStart}
            onDoubleClick = {editListStart}
            updateList = {updateList}
            onEditListFinish = {editComplete}
            deleteList = {delList}
        />);
    });


    it('>> show edit field when pencil icon clicked', () => {
        component.find('i.btn-edit').simulate('click');
        const editField = component.find('input.editField');
        expect(editField).toHaveLength(1);
    });

    it('>> show edit field when list-header double-clicked', () => {
        component.find('div.lst-title').simulate('doubleclick');
        const editField = component.find('input.editField');
        expect(editField).toHaveLength(1);
    });

    it('>> rename list; changed text in input is equal to state.editingName', () => {
        const newName = 'newListName';
        changeName(newName);
        expect(component.state().editingName).toEqual(newName);
    });

    it('>> rename list complete; call updateFunc on Blur event', () => {
        const txtInput = changeName('newName');
        txtInput.simulate('blur');
        expect(updateList).toHaveBeenCalled();
        expect(editComplete).toHaveBeenCalled();
    });

    it('>> rename list complete; call updateFunc on EnterKeyDown', () => {
        const txtInput = changeName('newName2');
        txtInput.simulate('keyDown', {keyCode: 13});
        expect(updateList).toHaveBeenCalledTimes(2);
        expect(editComplete).toHaveBeenCalledTimes(2);
    });

    it('>> delete list; call deleteFunc with proper listId param', () => {
        component.find('i.btn-delete').simulate('click');
        expect(component.state().listForDelId).toEqual(list.id);
    });




    function changeName(newName) {
        component.find('i.btn-edit').simulate('click');
        const editField = component.find('input.editField');
        editField.simulate('change', {target: {value: newName}});
        return editField;
    }
});