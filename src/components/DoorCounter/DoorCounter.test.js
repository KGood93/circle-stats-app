import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import DoorCounter from './DoorCounter';

describe('DoorCounter Component', () => {
    it(`renders without crashing`, () => {
        const wrapper = shallow(<DoorCounter />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});