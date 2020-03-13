import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Context from '../../context'

//Update at_count to attendance after change in API

class LaunchPage extends Component {
    static contextType = Context

    getMeetId() {
        const {meet_id} = this.props.match.params
        const id = parseInt(meet_id)
        return id
    }

    renderLastMessage() {
        const {stats = []} = this.context
        const stat = stats
        //const {meet_id} = this.props.match.params
        //const id = parseInt(meet_id)

        const meetupId = this.getMeetId()

        const meetStat = []

        for(var i = 0; i < stat.length; i++) {
            if(stat[i].meet_id === meetupId) {
                meetStat.push(stat[i])
            }
        }

        if(meetStat.length === 0) {
            return(
                <div className="welcomeMessage">
                    <h2 className="launchHead">This is your first meetup!</h2> 
                </div>
            )
        }
        else {
            let dataIndex = meetStat.length - 1
            //console.log(dataIndex)
            let meetup = meetStat[dataIndex]

            return(
                <div className="welcomeMessage">
                    <h2 className="launchHead">Your last meetup at {meetup.location} had</h2>
                    <h2 className="launchHead">{meetup.attendance}</h2>  
                    <h2 className="launchHead">attendees!</h2> 
                </div>
            )
        }

    }

    render() {
        return(
            <div className="LaunchPage">
                {this.renderLastMessage()}
                <div className="launchButtons">
                    <button type="button" className="mainButton"><Link to={`/doorCount/${this.getMeetId()}`}>Create New</Link></button>
                    <br/>
                    <button type="button" className="mainButton"><Link to={`/stats/${this.getMeetId()}`}>View Stats</Link></button>
                </div>
            </div>
        )
    }
}

export default LaunchPage