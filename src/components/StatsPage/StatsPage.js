import React, {Component} from 'react'

class StatsPage extends Component {

    render() {
        return (
            <div className="StatsPage">
                <div class="pieChart">
                    <h1>Pie Chart Goes Here!</h1>
                </div>
                <div class="textStats">
                    <div class="stat">
                        <h4>Java, Python, C#</h4>
                        <h4>20/100</h4>
                    </div>
                    <div class="stat">
                        <h4>Web Development or JavaScript</h4>
                        <h4>40/100</h4>
                    </div>
                    <div class="stat">
                        <h4>Game Design</h4>
                        <h4>20/100</h4>
                    </div>
                    <div class="stat">
                        <h4>Networking</h4>
                        <h4>10/100</h4>
                    </div>
                    <div class="stat">
                        <h4>Other</h4>
                        <h4>10/100</h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default StatsPage