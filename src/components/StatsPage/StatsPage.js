import React, {Component} from 'react'
import Graph from '../Graph/Graph'
import StatsTable from '../StatsTable/StatsTable'
import Context from '../../context'
import config from '../../config'
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
        //const {stats=[]} = this.state.stats
        //console.log(this.state.stats)
        const newData = this.state.stats
        const meetupId = this.getMeetId()

        //console.log(newData)
        const meetStat = []

        for(var i = 0; i < newData.length; i++){
            if(newData[i].meet_id === meetupId) {
                meetStat.push(newData[i])
            }
        }

        //console.log(meetStat)
        this.setState({data: meetStat})
      }

    render() {
        const value = {
            data: this.state.data
        }

        //console.log(value)

        return (
          <Context.Provider value={value}>
            <div className="StatsPage">
                <div className="graph">
                    <Graph workingData={value}/>
                </div>
                <div className="textStats">
                    <StatsTable workingData={value}/>
                </div>
            </div>
          </Context.Provider>
        )
    }
}

export default StatsPage