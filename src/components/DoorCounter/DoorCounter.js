import React, {Component} from 'react'
import StatsForm from '../StatsForm/StatsForm'
import {Redirect} from 'react-router-dom'
import config from '../../config'

//Add meet_id capabilities

class DoorCounter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clicks: 0,
            show: true,
            location: {
                value: '',
                touched: false
            },
            redirect: false
        }
    }

    updateLocation(meetingLocation) {
        this.setState({location: {value: meetingLocation, touched: true}})
    }

    incrementCount = () => {
        this.setState({clicks: this.state.clicks + 1})
    }

    handleSubmit = event => {
        event.preventDefault()
        //console.log(this.state)
        const {location, clicks} = this.state
        //console.log(location)
        //console.log(clicks)

        const meetingDetails = {
            meet_id: 1, //add different ids from meetup selection
            location: location.value,
            at_count: clicks
        }

        //console.log(meetingDetails)

        fetch(`${config.API_ENDPOINT}/stats`, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(meetingDetails)
        })
        .then(
            this.setState({redirect: true})
        )
        .catch(error => {
            console.log({error})
        })
    }

    render() {
        return (
            <div className="doorCounter">
                <StatsForm className="meeting" onSubmit={this.handleSubmit}>
                        <div className="newLocation">
                            <h2 className="inputLabel">Location</h2>
                            <input 
                                type="text" 
                                name="newDate" 
                                className="input" 
                                onChange={e => this.updateLocation(e.target.value)}
                            />
                        </div>

                
                <div className="count">
                    <h2>Number of Attendees</h2>
                    <h2>{this.state.clicks}</h2>
                    <div className="doorButtons">
                        <button 
                            type="button" 
                            className="addButton"
                            onClick={this.incrementCount}
                        >
                            +
                        </button>
                        <br/>
                        <button type="submit" className="mainButton">Next</button>
                    </div>
                </div>
                </StatsForm>
                {this.state.redirect && <Redirect to={'/stats'}/>}
            </div>
        )
    }
}

export default DoorCounter