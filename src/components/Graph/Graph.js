import React, { PureComponent } from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';

const data = [
    { month: 'Jan', location: 'Rainbows End Alpacas', attendees: 32,},
    { month: 'Feb', location: 'The Loop', attendees: 40,},
    { month: 'Mar', location: 'Cream City Yarns', attendees: 63,},
    { month: 'Apr', location: 'Knitting Knook', attendees: 54,},
    { month: 'May', location: 'Fiberwood Studio', attendees: 28,},
    { month: 'Jun', location: 'Grafton Yarn Store', attendees: 45,},
    { month: 'Jul', location: 'Starstruck Cat Yarn Studio', attendees: 36,},
];

export default class Graph extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    return (
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis dataKey="attendees"/>
        <Tooltip />
        <Line type="monotone" dataKey="attendees" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    );
  }
}