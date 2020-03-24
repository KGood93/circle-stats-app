import React, {Component} from 'react'
import './StatsTable.css'

class StatsTable extends Component {

    renderTableHeader() {
        return (
            <tr className="columnHeader">
                <th className="allHead">Date</th>
                <th className="allHead">Location</th>
                <th className="allHead2">Attendees</th>
                <th className="largeFormHead">Notes</th>
            </tr>
        )
    }

    renderTableData() {
        return this.props.workingData.data.map((meetup, index) => {
            const {date, location, attendance, notes} = meetup
            return (
                <tr key={date} className="dataBody">
                    <td className="all">{date}</td>
                    <td className="all">{location}</td>
                    <td className="all">{attendance}</td>
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