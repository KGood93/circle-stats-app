import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import MeetupSection from './MeetupSection';

describe('MeetupSection Component', () => {
    it(`renders without crashing`, () => {
        const wrapper = shallow(<MeetupSection />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});