import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import LaunchPage from './LaunchPage';

describe('LaunchPage Component', () => {
    it(`renders without crashing`, () => {
        const test = {
            path: "/launch/:meet_id",
            url: "/launch/1",
            isExact: true,
            params: {meet_id: "1"}
        };
        const wrapper = shallow(<LaunchPage match={test}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});