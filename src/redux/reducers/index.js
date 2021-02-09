import { combineReducers } from 'redux';
import { incrementReducer } from "./incrementReducers";
import { moviesReducer } from "./moviesReducers";

const combinedReducer = combineReducers({
    increment: incrementReducer,
    movies: moviesReducer
})

export default combinedReducer;