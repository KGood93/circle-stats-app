import React, { Component } from 'react'

class PlusButton extends Component {
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

    decreaseCount = () => {
        this.setState({clicks:this.state.clicks - 1})
    }

    toggleClick = () => {
        this.setState({show: !this.state.show})
    }

    render() {
        return (
            <div className="PlusButton">
                <button onClick={this.incrementCount}>+</button>
            </div>
        )
    }

}

export default PlusButton