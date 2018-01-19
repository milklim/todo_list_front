import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {NotFound} from '../components/notFound';


Enzyme.configure({adapter: new Adapter});


it('>> NotFound page - renders without crashing', () => {
    const component = shallow(
        <NotFound/>
    );
    expect(component).toMatchSnapshot();
});