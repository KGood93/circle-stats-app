import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'Jan', attendees: 32,
  },
  {
    name: 'Feb', attendees: 40,
  },
  {
    name: 'Mar', attendees: 63,
  },
  {
    name: 'Apr', attendees: 54,
  },
  {
    name: 'May', attendees: 28,
  },
  {
    name: 'Jun', attendees: 45,
  },
  {
    name: 'Jul', attendees: 36,
    
  },
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
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="attendees" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    );
  }
}