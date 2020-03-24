import React, {Component} from 'react'
import './StatsTable.css'

class StatsTable extends Component {

    renderTableHeader() {
        return (
            <tr className="columnHeader">
                <th>Date</th>
                <th>Location</th>
                <th>Attendees</th>
                <th className="largeForm">Notes</th>
            </tr>
        )
    }

    renderTableData() {
        return this.props.workingData.data.map((meetup, index) => {
            const {date, location, attendance, notes} = meetup
            return (
                <tr key={date}>
                    <td>{date}</td>
                    <td>{location}</td>
                    <td>{attendance}</td>
                    <td className="largeForm">{notes}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className="StatsTable">
                <h3 className="tableHeader">Meetup Stats</h3>
                <table className='meetupStats'>
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