import {combineReducers} from 'redux'
import {searchReducer} from './searchReducer'
import {moviesReducer} from './moviesReducers'
import {genresReducer} from './genresReducer'

export default combineReducers({
    search: searchReducer,
    movies: moviesReducer,
    genres: genresReducer
});