import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import LaunchPage from './LaunchPage';

describe('LaunchPage Component', () => {
    it(`renders without crashing`, () => {
        const wrapper = shallow(<LaunchPage />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});