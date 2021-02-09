import { FETCH } from '../actions/types'

const initialState = {
    movies: [],
}

export const moviesReducer = (state = initialState, action) => {
    console.log("movies reducer")
    console.log(action)
    switch (action.type) {
        case FETCH:
            return {
                ...state,
                movies: action.payload
            }
        default:
            return state;
    }
}