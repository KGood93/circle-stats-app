import React, {Component} from 'react'
import StatsForm from '../StatsForm/StatsForm'
import { Redirect } from 'react-router-dom'

class NewMeeting extends Component {

    constructor(props) {
        super(props)
        this.state = {
            date: {
                value: '',
                touched: false
            },
            location: {
                value: '',
                touched: false
            },
            redirect: false
        }
    }

    updateDate(meetingDate) {
        this.setState({date: {value: meetingDate, touched: true}})
    }

    updateLocation(meetingLocation) {
        this.setState({location: {value: meetingLocation, touched: true}})
    }

    handleSubmit = event => {
        event.preventDefault()
        const {date, location} = this.state

        console.log(date.value)
        console.log(location.value)

        const meetingDetails = {
            date: date.value,
            location: location.value
        }

        console.log(meetingDetails)
    }

    //Change Date to Meeting List drop down menu

    render() {
        return (
            <div className="newMeeting" onSubmit={this.handleSubmit}>
                <StatsForm className="meeting" onSubmit={this.handleSubmit}>
                <div className="newLocation">
                    <h3 className="inputLabel">Location</h3>
                    <input 
                        type="text" 
                        name="newDate" 
                        className="input" 
                        onChange={e => this.updateLocation(e.target.value)}
                    />
                </div>
                <div className="newDate">
                    <h3 className="inputLabel">Date</h3>
                    <input 
                        type="text" 
                        name="newDate" 
                        className="input" 
                        onChange={e => this.updateDate(e.target.value)}
                    />
                </div>
                <br/>
                <div className="mainButton">
                    <button 
                        type="submit" 
                        className="mainButton"
                    >
                    Create New
                    </button>
                </div>
                </StatsForm>
            </div>
        )
    }
}

export default NewMeeting