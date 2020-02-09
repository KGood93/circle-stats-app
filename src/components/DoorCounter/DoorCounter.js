import React, {Component} from 'react'

class DoorCounter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clicks: 0,
            show: true
        }
    }

    incrementCount = () => {
        this.setState({clicks: this.state.clicks + 1})
    }

    render() {
        return (
            <div className="doorCounter">
                <h2>Door Count</h2>
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
                    <button type="button" className="mainButton">Next</button>
                </div>
            </div>
        )
    }
}

export default DoorCounter