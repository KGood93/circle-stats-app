import React, { PureComponent } from 'react';
import {LineChart, Line, XAxis, YAxis, Text, Tooltip, ResponsiveContainer} from 'recharts';
import './Graph.css'

export default class Graph extends PureComponent {
  render() {
    const data = this.props.workingData.data
    //console.log(data)

    return (
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}
        >
          <XAxis dataKey="date" stroke="black"/>
          <YAxis dataKey="attendance" 
            label={<Text x={0} y={0} dx={50} dy={175} offset={0} angle={-90}>Attendance</Text>}
            stroke="black"
            />
          <Tooltip />
          <Line type="monotone" dataKey="attendance" stroke="#0c465e" strokeWidth="2" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}