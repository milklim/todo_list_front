import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import configureMockStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
Enzyme.configure({adapter: new Adapter});


import {Tasklists} from '../components/tasklists';
import {lists} from '../__mock-data__/lists'



describe('### Tasklists tests', () => {
    // const mockStore = configureMockStore([thunk]);
    // const mockStoreInitialized = mockStore({
    //     lists: lists
    // });
    // const store = mockStore(mockStoreInitialized)
    const fetchLists = jest.fn();
    const createList = jest.fn();


    let component;
    beforeEach(() => {
        component = shallow(
            <Tasklists
                lists = { lists }
                fetchLists = { fetchLists }
                createList = { createList }
            />
        )
    });


    it('>> renders without crashing', () => {
        expect(component).toMatchSnapshot();
    });

    it('>> Add new list; click AddList button calls createList() func', () => {
        const btnAddList = component.find('button.btn-new-list');
        btnAddList.simulate('click');
        expect(createList).toHaveBeenCalledTimes(1);
    });
});

