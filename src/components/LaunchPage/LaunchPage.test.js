import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import LaunchPage from './LaunchPage';

describe('LaunchPage Component', () => {
    it(`renders without crashing`, () => {
        const params = 'https://circle-stats-app.goodreaukath.now.sh/launch/1';
        const wrapper = shallow(<LaunchPage params={params}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});