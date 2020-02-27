import React from 'react'
import {Link} from 'react-router-dom'
//import LaunchPage from '../LaunchPage/LaunchPage'

function MeetupSelection() {

    return (
        <div className="MeetupSection">
            <div className="meetupDiv">
                <h2 className="meetupTitle"><Link to={'/launch'}>Meetup East</Link></h2>
                <h4 className="meetupDate">1st Weekend of the Month</h4>
            </div>
            <div className="meetupDiv">
                <h2 className="meetupTitle"><Link to={'/launch'}>Meetup West</Link></h2>
                <h4 className="meetupDate">3rd Weekend of the Month</h4>
            </div>
        </div>
    )
}

export default MeetupSelection