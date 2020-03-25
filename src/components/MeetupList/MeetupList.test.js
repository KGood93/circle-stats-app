import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import MeetupList from './MeetupList';

describe('MeetupList Component', () => {
    it(`renders without crashing`, () => {
        const wrapper = shallow(<MeetupList />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});