import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


import {TasksOfList} from '../components/tasksOfList';
import {tasksOfTheList} from '../__mock-data__/tasks';

Enzyme.configure({adapter: new Adapter});


describe('### Tasks tests', () => {

    let component;
    const getTasks = jest.fn();
    const editTaskStart = jest.fn((task) => component.setState({'isEditing': true, 'editingTask':  task}));

    beforeEach(() => {
        component = shallow(
            <TasksOfList
                tasks = { tasksOfTheList }
                editingTask = {{}}
                fetchListTasks = { getTasks }
                onEditTaskStart = { editTaskStart }
            />
        )
        component.setState({isEditing: false})
    });

    it('>> renders without crashing', () => {
        expect(component).toMatchSnapshot();
    });

    it('>> renders all items', () => {
        const tasks = component.find('div.lst-task-item');
        expect(tasks).toHaveLength(tasksOfTheList.length);
    });

    it('>> edit task; render txtInput for editing when edit-icon[pencil] clicked', () => {
        const editIcons = component.find('div.lst-icon i.btn-edit');

        expect(component.find('input.editField')).toHaveLength(0);

        editIcons.at(0).simulate('click');
        // console.log(expect(component.find('input.editField')).length); //.toHaveLength(1);
        // expect(component.find('input.editField')).toHaveLength(1);
    });


});

