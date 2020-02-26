import React, {Component} from 'react'
import Graph from '../Graph/Graph'
import StatsTable from '../StatsTable/StatsTable';

class StatsPage extends Component {

    //API Fetch

    render() {
        return (
            <div className="StatsPage">
                <div class="graph">
                    <Graph />
                </div>
                <div className="textStats">
                    <StatsTable />
                </div>
            </div>
        )
    }
}

export default StatsPage