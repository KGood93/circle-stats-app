import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import StatsTable from './StatsTable';

describe('StatsTable Component', () => {
    it(`renders without crashing`, () => {
        const data = [
            {
                date: '2019-12-25',
                location: 'Parents House',
                attendance: 24,
                notes: 'Christmas',
            },
            {
                date: '2019-11-28',
                location: 'London',
                attendance: 12,
                notes: 'Thanksgiving',
            },
        ]
        const wrapper = shallow(<StatsTable workingData={data}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});