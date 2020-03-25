import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import StatsPage from './StatsPage';

describe('StatsPage Component', () => {
    it(`renders without crashing`, () => {
        const wrapper = shallow(<StatsPage />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});