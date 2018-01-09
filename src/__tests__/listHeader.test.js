import React from 'react';
import Enzyme, {render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {ListHeader} from "../components/listHeader";
import {list} from '../__mock-data__/lists'

Enzyme.configure({adapter: new Adapter});


describe('### ListHeader Component Tests', () => {

    const component = render(<ListHeader list = {list}/>);

    it('>> renders without crashing', () => {
        expect(component).toMatchSnapshot();
    });

    it('>> has proper name', () => {
        const headerTitle = component.find('div.lst-title');
        expect(headerTitle.text()).toEqual(list.label);
    });
});
