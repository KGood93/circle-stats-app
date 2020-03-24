import React, { PureComponent } from 'react';
import {LineChart, Line, XAxis, YAxis, Text, Tooltip, ResponsiveContainer} from 'recharts';
import './Graph.css'

export default class Graph extends PureComponent {
  //static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';
  
  render() {
    const data = this.props.workingData.data
    //console.log(data)

    return (
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}
        >

          <XAxis dataKey="date" />
          <YAxis dataKey="attendance" 
            label={<Text x={0} y={0} dx={50} dy={150} offset={0} angle={-90}>Attendance</Text>}
            />
          <Tooltip />
          <Line type="monotone" dataKey="attendance" stroke="#0c465e" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}