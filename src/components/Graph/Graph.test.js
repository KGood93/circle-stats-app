import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Graph from './Graph';

describe('Graph Component', () => {
    it(`renders without crashing`, () => {
        const wrapper = shallow(<Graph />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});