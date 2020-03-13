import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Context from '../../context'

//Add note category on meetup section

class MeetupList extends Component {
    static contextType = Context

    render() {
        const {meetups = []} = this.context
        const meetup = meetups
        //console.log(meetups)
        return (
            meetup.map((meetupDetails, index) => {
                return (
                    <div className="meetupDiv" key={index}>
                        <h2 className="meetupTitle">
                            <Link to={`/launch/${meetupDetails.meetup_id}`}>{meetupDetails.meetup_name}</Link>
                        </h2>
                        <h4 className="meetupDate">{meetupDetails.meetup_note}</h4>
                </div>
                )
            })
        )
    }
}

export default MeetupList