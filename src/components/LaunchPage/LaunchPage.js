import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class LaunchPage extends Component {

    render() {
        return(
            <div className="LaunchPage">
                <div class="welcomeMessage">
                    <h2 class="launchHead">Your last meetup had</h2>
                    <h2 class="launchHead">XXX</h2>  
                    <h2 class="launchHead">attendees!</h2>   
                </div>
                <div class="launchButtons">
                    <button type="button" class="mainButton"><Link to={'/doorCount'}>Create New</Link></button>
                    <br/>
                    <button type="button" class="mainButton"><Link to={'/stats'}>View Stats</Link></button>
                </div>
            </div>
        )
    }
}

export default LaunchPage