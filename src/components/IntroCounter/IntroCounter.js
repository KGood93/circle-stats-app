import React, {Component} from 'react'
import {connect} from 'react-redux'
import {increment, decrement, add_counter} from '../../actions/counters'
import Counter from '../Counter/Counter'
import CounterList from '../CounterList/CounterList'
import AddCounter from '../AddCounter/AddCounter'

class IntroCounter extends Component {


    render() {
        return(
            <div className="introCounter">
                <CounterList />
                <AddCounter />
            </div>
        )
    }
}

export default IntroCounter