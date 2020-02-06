import React, {Component} from 'react'

class NewMeeting extends Component {

    render() {
        return (
            <div className="newMeeting">
                <div class="newDate">
                    <h3 class="inputLabel">Date</h3>
                    <input type="text" name="newDate" class="input" />
                </div>
                <div class="newLocation">
                    <h3 class="inputLabel">Location</h3>
                    <input type="text" name="newDate" class="input" />
                </div>
                <br/>
                <div class="mainButton">
                    <button type="button" class="mainButton">Create New</button>
                </div>
            </div>
        )
    }
}

export default NewMeeting