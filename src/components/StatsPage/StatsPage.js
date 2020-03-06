import React, {Component} from 'react'
import Graph from '../Graph/Graph'
import StatsTable from '../StatsTable/StatsTable'
import config from '../../config'
import Context from '../../context'
import './StatsPage.css'

class StatsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stats: []
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

    render() {
        const value = {
            stats: this.state.stats
        }

        return (
            <Context.Provider value={value}>
            <div className="StatsPage">
                <div className="graph">
                    <Graph />
                </div>
                <div className="textStats">
                    <StatsTable />
                </div>
            </div>
            </Context.Provider>
        )
    }
}

export default StatsPage