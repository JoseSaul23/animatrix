import {
    LOADING_MOVIE,
    GET_MOVIE,
    CLEAR_MOVIE,
    GET_RANDOM_MOVIE,
    LOADING_MOVIES,
    GET_MOVIES,
    CLEAR_MOVIES,
} from './types'
import axios from 'axios'

export const getMovie = (id) => (dispatch) => {
    dispatch({
        type: LOADING_MOVIE
    })

    axios.get(`${process.env.REACT_APP_API_URL}/api/movies/${id}`)
    .then(res => {
        dispatch({
            type: GET_MOVIE,
            payload: res.data
        })
    })
    .catch(e => {
        const errors = {message: e.response.data, status: e.response.status}

        alert(errors.message)

        dispatch( {
            type: CLEAR_MOVIE,
        })
    }) 
}

export const clearMovie = () => (dispatch) => {
    dispatch({
        type: CLEAR_MOVIE
    })
}

export const getRandomMovie = () => (dispatch) => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/movies/random/`)
    .then(res => {
        dispatch({
            type: GET_RANDOM_MOVIE,
            payload: res.data
        })
    })
    .catch(e => {
 
    }) 
}

export const getGenreMovies = (genre_id) => (dispatch) => {
    dispatch({
        type: LOADING_MOVIES
    })

    axios.get(`${process.env.REACT_APP_API_URL}/api/genres/${genre_id}/movies`)
    .then(res => {
        dispatch({
            type: GET_MOVIES,
            payload: res.data
        })
    })
    .catch(e => {
        dispatch({
            type: CLEAR_MOVIES
        })
    }) 
}

export const clearMovies = () => (dispatch) => {
    dispatch({
        type: CLEAR_MOVIES
    })
}
