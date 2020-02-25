//Actions {types}
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

//Action creators
export const incrementCount = (index) => {
    return {
        type: INCREMENT,
        payload: {index}
    }
}

export const decrementCount = (index) => {
    return {
        type: DECREMENT,
        payload: {index}
    }
}

export const add_counter = () => {
    return {
        type: "ADD_COUNTER"
    }
}