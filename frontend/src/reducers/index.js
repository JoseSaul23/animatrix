import {combineReducers} from 'redux'
import {searchReducer} from './searchReducer'
import {moviesReducer} from './moviesReducers'

export default combineReducers({
    search: searchReducer,
    movies: moviesReducer,
});