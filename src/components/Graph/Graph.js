import React, { PureComponent } from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';

export default class Graph extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';
  
  render() {
    const data = this.props.workingData.data
    //console.log(data)

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
        <XAxis dataKey="date" />
        <YAxis dataKey="at_count"/>
        <Tooltip />
        <Line type="monotone" dataKey="at_count" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    );
  }
}