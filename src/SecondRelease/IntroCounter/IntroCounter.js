import React, {Component} from 'react'
import Counter from '../Counter/Counter'
import Total from '../Total'

class IntroCounter extends Component {


    render() {
        return(
            <div className="introCounter">
                <Counter />
                <Total />
            </div>
        )
    }
}

export default IntroCounter