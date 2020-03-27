import React, { Component } from 'react'
import MeetupList from '../MeetupList/MeetupList'
import './MeetupSection.css'
//import {Link} from 'react-router-dom'
//import LaunchPage from '../LaunchPage/LaunchPage'

class MeetupSelection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refresh: false
        };
      }


    render() {
        return (
            <div className="MeetupSection">
                <MeetupList />
                <div className="appDescription">
                    <p className="description">Circle Time Stats is an easy way to keep track of 
                    the attendance for meetup events. Start by selecting the meetup you would like 
                    information on or are hosting an event for. From there you can either create a 
                    new event or view previous event statistics. If you are logging a new event it 
                    is recommended to take a count at the door using the counter. Use the oops button 
                    if you accidentally click the counter one to many times. Don’t forget to add the 
                    location of the event and any notes you may want to include on things that can affect 
                    attendance (e.g. a snowstorm). On the stats page you can view a graph of attendance 
                    as well as a table of the stats including the data, location, number of attendees, 
                    and notes (on larger screens). </p>
                </div>
            </div>
        )
    }
}

export default MeetupSelection

