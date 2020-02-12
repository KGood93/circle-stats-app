import {INCREMENT, DECREMENT} from '../actions/counters'

const counterReducer = (state = [0, 2, 0], action) => {
    switch(action.type) {
        case INCREMENT: 
            return state.map((value, i) => {
                if (action.payload.index === i) {
                    return value += 1
                }
                else {
                    return value
                }
            })
            break
        
        case DECREMENT: 
        return state.map((value, i) => {
            if (action.payload.index === i) {
                return value -= 1
            }
            else {
                return value
            }
        })
            break

        default: return state
    }
}

export default counterReducer