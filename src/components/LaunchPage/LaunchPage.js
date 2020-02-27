import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class LaunchPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                { month: 'Jan', location: 'Rainbows End Alpacas', attendees: 32 },
                { month: 'Feb', location: 'The Loop', attendees: 40 },
                { month: 'Mar', location: 'Cream City Yarns', attendees: 63 },
                { month: 'Apr', location: 'Knitting Knook', attendees: 54 },
                { month: 'May', location: 'Fiberwood Studio', attendees: 28 },
                { month: 'Jun', location: 'Grafton Yarn Store', attendees: 45 },
                { month: 'Jul', location: 'Starstruck Cat Yarn Studio', attendees: 36 }
            ]
        }
    }

    renderLastMessage() {
        let dataIndex = this.state.data.length - 1
        //console.log(dataIndex)
        let meetup = this.state.data[dataIndex]
        //console.log(meetup)
        const {location, attendees} = meetup

        return(
            <div className="welcomeMessage">
                <h2 className="launchHead">Your last meetup at {location} had</h2>
                <h2 className="launchHead">{attendees}</h2>  
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