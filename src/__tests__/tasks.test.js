import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


import {TasksOfList} from '../components/tasksOfList';
import {tasksOfTheList, task} from '../__mock-data__/tasks';

Enzyme.configure({adapter: new Adapter});


describe('### Tasks tests', () => {

    let component;
    const getTasks = jest.fn();
    const editTaskStart = jest.fn();//((task) => component.setState({'isEditing': true, 'editingTask':  task}));
    const toggleDone = jest.fn();
    const delTask = jest.fn();
    const updateTask = jest.fn();
    const onEditTaskFinish = jest.fn();
    const moveUp = jest.fn();
    const moveDown = jest.fn();

    beforeEach(() => {
        component = shallow(
            <TasksOfList
                tasks = { tasksOfTheList }
                editingTask = { tasksOfTheList[0] }
                fetchListTasks = { getTasks }
                onEditTaskStart = { editTaskStart }
                toggleDoneStatus = { toggleDone }
                deleteTask = { delTask }
                updateTask = { updateTask }
                onEditTaskFinish = { onEditTaskFinish }
                taskPositionUp = { moveUp }
                taskPositionDown = { moveDown }
            />
        )
    });

    it('>> renders without crashing', () => {
        expect(component).toMatchSnapshot();
    });

    it('>> renders all items', () => {
        const tasks = component.find('div.lst-task-item');
        expect(tasks).toHaveLength(tasksOfTheList.length);
    });

    it('>> edit task; render txtInput for editing when edit-icon[pencil] clicked', () => {
        const editIcons = component.find('i.btn-edit');
        expect(component.find('input.editField')).toHaveLength(0);
        editIcons.at(0).simulate('click');
        expect(component.find('input.editField')).toHaveLength(1);
    });

    it('>> edit task; render txtInput for editing when task-content double clicked', () => {
        const tskContent = component.find('div.lst-taskcontent').at(0);
        expect(component.find('input.editField')).toHaveLength(0);
        tskContent.simulate('doubleclick');
        expect(component.find('input.editField')).toHaveLength(1);
    });

    it('>> rename task; changed text in input is equal to state.editedContent', () => {
        const newName = 'newTaskName';
        changeName(newName);
        expect(component.state().editedContent).toEqual(newName);
    });

    it('>> rename task complete; calls updateFunc on Blur event', () => {
        const txtInput = changeName('newName');
        txtInput.simulate('blur');
        expect(updateTask).toHaveBeenCalled();
        expect(onEditTaskFinish).toHaveBeenCalled();
    });

    it('>> rename task complete; calls updateFunc on EnterKeyDown', () => {
        const txtInput = changeName('newName');
        txtInput.simulate('keyDown', {keyCode: 13, key: 'Enter'});
        expect(updateTask).toHaveBeenCalledTimes(2);
        expect(onEditTaskFinish).toHaveBeenCalledTimes(2);
    });

    it('>> changing of checkbox value calls toggleDoneStatus() func with proper param', () => {
        const checkBox = component.find('.lst-task-item div.checkbox-wraper input[type="checkbox"]').first();
        checkBox.simulate('change');
        expect(toggleDone).toHaveBeenCalledWith(tasksOfTheList[0].id);
    });

    it('>> task has strikethrough text if its status is done', () => {
        const tskContents = component.find('.lst-taskcontent p');
        const taskDonePosition = tasksOfTheList.find(t => t.is_done === true).position - 1;

        expect(tskContents
                .at(taskDonePosition)
                .hasClass('line-through-text')
            ).toEqual(true);
    });

    it('>> click on delete button calls delFunc with proper param', () => {
        const delBtns = component.find('div.lst-icon > i.btn-delete');
        // console.log(delBtns);
        let taskPosition = 0;
        delBtns.at(taskPosition).simulate('click');
        expect(delTask).toHaveBeenCalledWith(tasksOfTheList[taskPosition].id);

        taskPosition = tasksOfTheList.length - 1;
        delBtns.at(taskPosition).simulate('click');
        expect(delTask).toHaveBeenCalledWith(tasksOfTheList[taskPosition].id);
    });

    it('>> moveUp() func is not called for item in the first position', () => {
        const moveUpBtn = component.find('div.lst-icon > div.arrow-up').first();

        moveUpBtn.simulate('click');
        expect(moveUp).toHaveBeenCalledTimes(0);
    });

    it('>> click on moveUp button calls moveUp() func with proper param', () => {
        const moveUpBtns = component.find('div.lst-icon > div.arrow-up');

        let taskPosition = tasksOfTheList.length - 1;
        moveUpBtns.at(taskPosition).simulate('click');
        expect(moveUp).toHaveBeenCalledWith(tasksOfTheList[taskPosition].id);
    });

    it('>> moveDown() func is not called for item in the last position', () => {
        const moveUpBtns = component.find('div.lst-icon > div.arrow-down');

        let taskPosition = tasksOfTheList.length - 1;
        moveUpBtns.at(taskPosition).simulate('click');
        expect(moveDown).toHaveBeenCalledTimes(0);
    });

    it('>> click on moveDown button calls moveDown() func with proper param', () => {
        const moveUpBtns = component.find('div.lst-icon > div.arrow-down');

        let taskPosition = 0;
        moveUpBtns.at(taskPosition).simulate('click');
        expect(moveDown).toHaveBeenCalledWith(tasksOfTheList[taskPosition].id);
    });



    function changeName(newName) {
        component.find('i.btn-edit').at(0).simulate('click');
        const editField = component.find('input.editField');
        editField.simulate('change', {target: {value: newName}});
        return editField;
    }
});

describe('### Tasks (one item in List) tests', () => {

    let component;
    const getTasks = jest.fn();
    const moveUp = jest.fn();
    const moveDown = jest.fn();

    beforeEach(() => {
        component = shallow(
            <TasksOfList
                tasks={[task]}
                fetchListTasks = { getTasks }
                taskPositionUp={moveUp}
                taskPositionDown={moveDown}
            />
        )
        component.setState({isEditing: false})
    });

    it('>> renders without crashing', () => {
        expect(component).toMatchSnapshot();
    });

    it('>> renders one item', () => {
        const tasks = component.find('div.lst-task-item');
        expect(tasks).toHaveLength(1);
    });

    it('>> moveUp() func is not called if list has only one item', () => {
        const moveUpBtn = component.find('div.lst-icon > div.arrow-up');

        moveUpBtn.simulate('click');
        expect(moveUp).toHaveBeenCalledTimes(0);
    });

    it('>> moveDown() func is not called if list has only one item', () => {
        const moveDownBtn = component.find('div.lst-icon > div.arrow-up');

        moveDownBtn.simulate('click');
        expect(moveDown).toHaveBeenCalledTimes(0);
    });
});
