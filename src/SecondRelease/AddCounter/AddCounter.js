import React from 'react'
import {add_counter} from '../../actions/counters'
import {connect} from 'react-redux'

const AddCounter = ({dispatch}) => (
    <button
        onClick={() => {
            dispatch(add_counter())
        }}>
        Add a Counter
    </button>
)

export default connect() (AddCounter)