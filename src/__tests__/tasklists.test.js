import React from 'react';
import {Provider} from 'react-redux';
// import  ReactDOM from 'react-dom';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Tasklists from '../components/tasklists';
import store from '../store';

Enzyme.configure({adapter: new Adapter});

describe('### Tasklists tests', () => {

    test('test with Provider', () => {
        const component = mount(
            <Provider store={store}>
                <Tasklists/>
            </Provider>
        )

    })
})

