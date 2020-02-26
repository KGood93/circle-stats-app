import React, {Component} from 'react'
import Graph from '../Graph/Graph'

class StatsPage extends Component {

    render() {
        return (
            <div className="StatsPage">
                <div class="graph">
                    <Graph />
                </div>
                <div class="textStats">
                    <p>List stats go here</p>
                </div>
            </div>
        )
    }
}

export default StatsPage