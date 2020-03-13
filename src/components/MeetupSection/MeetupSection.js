import React, { Component } from 'react'
import MeetupList from '../MeetupList/MeetupList'
//import {Link} from 'react-router-dom'
//import LaunchPage from '../LaunchPage/LaunchPage'

class MeetupSelection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refresh: false
        };
      }

    pageReload() {
        if(this.state.refresh === false) {
            this.setState({refresh: true})
        }
    }

    render() {
        this.pageReload()
        return (
            <div className="MeetupSection">
                <MeetupList />
            </div>
        )
    }
}

export default MeetupSelection

