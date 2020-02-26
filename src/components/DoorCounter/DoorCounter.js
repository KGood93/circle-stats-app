import React, {Component} from 'react'
import StatsForm from '../StatsForm/StatsForm'

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
        console.log(this.state)
        const {location, clicks} = this.state
        console.log(location)
        console.log(clicks)

        const meetingDetails = {
            //date: date.value,
            location: location.value,
            count: clicks
        }

        console.log(meetingDetails)

        //API Post
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
            </div>
        )
    }
}

export default DoorCounter