import {
    LOADING_MOVIE,
    GET_MOVIE,
    CLEAR_MOVIE,
    GET_RANDOM_MOVIE,
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