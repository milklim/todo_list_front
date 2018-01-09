import React from 'react';
//import {Provider} from 'react-redux';
// import  ReactDOM from 'react-dom';
import Enzyme, {shallow, render, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';


import Tasklists from '../components/tasklists';
import {lists} from '../__mock-data__/lists'

Enzyme.configure({adapter: new Adapter});


describe('### Tasklists tests', () => {
    const mockStore = configureMockStore([thunk]);
    const mockStoreInitialized = mockStore({
        lists: lists
    });
    const store = mockStore(mockStoreInitialized)

    const component = shallow(<Tasklists store = {store}/>)

    it('>> renders without crashing', () => {
        expect(component).toMatchSnapshot();
    });

});

