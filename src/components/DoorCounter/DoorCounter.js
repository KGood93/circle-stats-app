import React, {Component} from 'react'

class DoorCounter extends Component {
    

    render() {
        return (
            <div className="doorCounter">
                <h2>Door Count</h2>
                <h2>XXX</h2>
                <div class="doorButtons">
                    <button type="button" class="addButton">+</button>
                    <br/>
                    <button type="button" class="mainButton">Next</button>
                </div>
            </div>
        )
    }
}

export default DoorCounter