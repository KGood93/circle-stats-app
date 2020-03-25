import React, {Component} from 'react'
import Graph from '../Graph/Graph'
import StatsTable from '../StatsTable/StatsTable'
import config from '../../config'
import moment from 'moment'
import './StatsPage.css'

class StatsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stats: [],
            data: []
        }
    }

    componentDidMount() {
        this.fetchStats()
    }

    getMeetId() {
      const {meet_id} = this.props.match.params
      const id = parseInt(meet_id)
      return id
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
            this.renderData()
          })
          .catch(err => {
            this.setState({
              error: err.message
            })
          })
      }

      renderData() {
        const newData = this.state.stats
        const meetupId = this.getMeetId()

        //console.log("newData", newData)
        const meetStat = []

        for(var i = 0; i < newData.length; i++){
            if(newData[i].meet_id === meetupId) {
                //console.log("InData", newData[i])
                const formData = {
                  date: moment(newData[i].date).format('YYYY-MM-DD'),
                  location: newData[i].location,
                  attendance: newData[i].attendance,
                  notes: newData[i].notes,
                }
                //console.log("formData", formData)
                meetStat.push(formData)
            }
        }

        //console.log("meetStat", meetStat)
        this.setState({data: meetStat})
      }

    render() {
        const value = {
            data: this.state.data
        }
        //console.log(value)

        return (
          <div className="StatsPage">
              <div className="graph">
                  <Graph workingData={value}/>
              </div>
              <div className="textStats">
                  <StatsTable workingData={value}/>
              </div>
          </div>
        )
    }
}

export default StatsPage