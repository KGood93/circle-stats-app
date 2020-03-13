import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import config from '../../config'

class LaunchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stats: [],
        }
    }

    componentDidMount() {
        this.fetchStats()
    }

    fetchStats() {
        const statsUrl = `${config.API_ENDPOINT}/stats`
        const statsOptions = {
          method: 'GET', 
          headers: {
            'Content-type': 'application/json'
          }
        }
    
        fetch(statsUrl, statsOptions)
          .then(res => {
            if(res.ok) {
              return res.json()
            }
            else {
              throw new Error('Something went wrong loading stats')
            }
          })
          .then(data => {
            //console.log(data)
            this.setState({stats: data})
          })
          .catch(err => {
            this.setState({
              error: err.message
            })
          })
      }

    getMeetId() {
        const {meet_id} = this.props.match.params
        const id = parseInt(meet_id)
        return id
    }

    renderLastMessage() {
        const stat = this.state.stats
        //console.log(stat)

        const meetupId = this.getMeetId()

        const meetStat = []

        for(var i = 0; i < stat.length; i++) {
            if(stat[i].meet_id === meetupId) {
                meetStat.push(stat[i])
            }
        }

        if(meetStat.length === 0) {
            return(
                <div className="welcomeMessage">
                    <h2 className="launchHead">This is your first meetup!</h2> 
                </div>
            )
        }
        else {
            let dataIndex = meetStat.length - 1
            //console.log(dataIndex)
            let meetup = meetStat[dataIndex]

            return(
                <div className="welcomeMessage">
                    <h2 className="launchHead">Your last meetup at {meetup.location} had</h2>
                    <h2 className="launchHead">{meetup.attendance}</h2>  
                    <h2 className="launchHead">attendees!</h2> 
                </div>
            )
        }

    }

    render() {
        return(
            <div className="LaunchPage">
                {this.renderLastMessage()}
                <div className="launchButtons">
                    <button type="button" className="mainButton"><Link to={`/doorCount/${this.getMeetId()}`}>Create New</Link></button>
                    <br/>
                    <button type="button" className="mainButton"><Link to={`/stats/${this.getMeetId()}`}>View Stats</Link></button>
                </div>
            </div>
        )
    }
}

export default LaunchPage