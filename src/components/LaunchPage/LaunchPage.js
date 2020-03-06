import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Context from '../../context'

class LaunchPage extends Component {
    static contextType = Context

    renderLastMessage() {
        const {stats = []} = this.context
        const stat = stats
        console.log(stat)
        console.log(stat[0].meet_id)
        const meetupId = 1  //Get id from query
        
        const meetStat = []

        for(var i = 0; i < stat.length; i++) {
            if(stat[i].meet_id === meetupId) {
                meetStat.push(stat[i])
                //console.log(meetStat)
            }
        }

        let dataIndex = meetStat.length - 1
        //console.log(dataIndex)
        let meetup = meetStat[dataIndex]
        //console.log(meetup)
        //console.log(meetup.location)

        return(
            <div className="welcomeMessage">
                <h2 className="launchHead">Your last meetup at {meetup.location} had</h2>
                <h2 className="launchHead">{meetup.at_count}</h2>  
                <h2 className="launchHead">attendees!</h2> 
            </div>
        )
    }

    render() {
        return(
            <div className="LaunchPage">
                {this.renderLastMessage()}
                <div className="launchButtons">
                    <button type="button" className="mainButton"><Link to={'/doorCount'}>Create New</Link></button>
                    <br/>
                    <button type="button" className="mainButton"><Link to={'/stats'}>View Stats</Link></button>
                </div>
            </div>
        )
    }
}

export default LaunchPage