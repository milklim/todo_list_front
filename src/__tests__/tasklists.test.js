import React from 'react';
// import  ReactDOM from 'react-dom';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Tasklists from '../components/tasklists';

Enzyme.configure({adapter: new Adapter});

describe('### Tasklists tests', () => {

    const component = shallow(<Tasklists/>);

    it('has h1 header-tag', () => {
        const h1_tag = component.find('h1');
        expect(h1_tag).toHaveLength(1);
    })
})

