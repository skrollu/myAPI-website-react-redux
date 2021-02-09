import { INCREMENT, DECREMENT } from '../actions/types'

const initialState = {
    count: 0,
}

export const incrementReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: action.payload.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: action.payload.count - 1
            }
        default:
            return state;
    }
}