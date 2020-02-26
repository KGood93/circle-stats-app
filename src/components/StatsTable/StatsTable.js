import React, {Component} from 'react'

class StatsTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                { month: 'Jan', location: 'Rainbows End Alpacas', attendees: 32 },
                { month: 'Feb', location: 'The Loop', attendees: 40 },
                { month: 'Mar', location: 'Cream City Yarns', attendees: 63 },
                { month: 'Apr', location: 'Knitting Knook', attendees: 54 },
                { month: 'May', location: 'Fiberwood Studio', attendees: 28 },
                { month: 'Jun', location: 'Grafton Yarn Store', attendees: 45 },
                { month: 'Jul', location: 'Starstruck Cat Yarn Studio', attendees: 36 }
            ]
        }
    }

    //gets data points from context

    renderTableHeader() {
        let header = Object.keys(this.state.data[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    renderTableData() {
        return this.state.data.map((meetup, index) => {
            const {month, location, attendees} = meetup
            return (
                <tr key={month}>
                    <td>{month}</td>
                    <td>{location}</td>
                    <td>{attendees}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className="StatsTable">
                <h3>Meetup Stats</h3>
                <table id='meetupStats'>
                    <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableData()}
                    </tbody>
                </table>
            
            </div>
        )
    }
}

export default StatsTable