import React, {Component} from 'react'
import StatsForm from '../StatsForm/StatsForm'
import {Redirect} from 'react-router-dom'
import config from '../../config'
import './DoorCounter.css'

//Update At_count to attendance once updated in api

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
            notes: {
                value: '',
                touched: false
            },
            redirect: false
        }
    }

    updateLocation(meetingLocation) {
        this.setState({location: {value: meetingLocation, touched: true}})
    }

    updateNote(meetingNote) {
        this.setState({notes: {value: meetingNote, touched: true}})
    }

    getMeetId() {
        const {meet_id} = this.props.match.params
        //console.log(meet_id)
        const id = parseInt(meet_id)
        return id
    }

    incrementCount = () => {
        this.setState({clicks: this.state.clicks + 1})
    }



    handleSubmit = event => {
        event.preventDefault()
        //console.log(this.state)
        const {location, clicks, notes} = this.state
        //console.log(location)
        //console.log(clicks)
        const meetingId = this.getMeetId()

        const meetingDetails = {
            meet_id: meetingId,
            location: location.value,
            attendance: clicks,
            notes: notes.value
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
                    <div className="count">
                        <h2 className="countLabel">Number of Attendees</h2>
                        <h2 className="activeCount">{this.state.clicks}</h2>
                        <div className="doorButtons">
                            <button 
                                type="button" 
                                className="addButton"
                                onClick={this.incrementCount}
                            >
                                +
                            </button>
                        </div>
                    </div>    
                        
                    <div className="newLocation">
                        <h2 className="locationLabel">Location</h2>
                        <input 
                            type="text" 
                            className="location" 
                            onChange={e => this.updateLocation(e.target.value)}
                        />
                    </div>

                    <div className="notes">
                        <h2 className="noteLabel">Notes</h2>
                        <textarea 
                        className="noteContent"
                        onChange={e => this.updateNote(e.target.value)}
                        >
                        </textarea>
                    </div>

                    <div className="next">
                        <button type="submit" className="mainButton">Next</button>
                    </div>
                </StatsForm>
                {this.state.redirect && <Redirect to={`/stats/${this.getMeetId()}`}/>}
            </div>
        )
    }
}

export default DoorCounter