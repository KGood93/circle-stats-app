import React, {Component} from 'react'

class StatsTable extends Component {


    renderTableHeader() {
        return (
            <tr>
                <th>Date</th>
                <th>Location</th>
                <th>Attendees</th>
            </tr>
        )
    }

    renderTableData() {
        return this.props.workingData.data.map((meetup, index) => {
            const {date, location, at_count} = meetup
            return (
                <tr key={date}>
                    <td>{date}</td>
                    <td>{location}</td>
                    <td>{at_count}</td>
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
                        {this.renderTableHeader()}
                        {this.renderTableData()}
                    </tbody>
                </table>
            
            </div>
        )
    }
}

export default StatsTable