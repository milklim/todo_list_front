import React from 'react';
import Enzyme, {render, mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NewTaskSection from "../components/newTaskSection";

Enzyme.configure({adapter: new Adapter});


describe('### NewTaskSection Component tests', () => {

    const component = shallow(<NewTaskSection />);

    it('>> renders without crashing', () => {
        expect(component).toMatchSnapshot();
    });

});