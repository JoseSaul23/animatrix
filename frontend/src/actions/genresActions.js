import {
    LOADING_GENRES,
    GET_GENRES,
    CLEAR_GENRES,
    LOADING_GENRE,
    GET_GENRE,
    CLEAR_GENRE,
} from './types'
import axios from 'axios'

export const getGenres = (page=1) => (dispatch) => {
    dispatch({
        type: LOADING_GENRES
    })

    axios.get(`${process.env.REACT_APP_API_URL}/api/genres/?page=${page}`)
    .then(res => {
        dispatch({
            type: GET_GENRES,
            payload: res.data
        })
    })
    .catch(e => {
        const errors = {message: e.response.data, status: e.response.status}

        alert(errors.message)

        dispatch( {
            type: CLEAR_GENRES,
        })
    }) 
}

export const clearGenres = () => (dispatch) => {
    dispatch({
        type: CLEAR_GENRES
    })
}

export const getGenreDetails = (id) => (dispatch) => {
    dispatch({
        type: LOADING_GENRE
    })

    axios.get(`${process.env.REACT_APP_API_URL}/api/genres/${id}/`)
    .then(res => {
        dispatch({
            type: GET_GENRE,
            payload: res.data
        })
    })
    .catch(e => {
        const errors = {message: e.response.data, status: e.response.status}

        alert(errors.message)

        dispatch( {
            type: CLEAR_GENRE,
        })
    }) 
}

export const clearGenre = () => (dispatch) => {
    dispatch({
        type: CLEAR_GENRE
    })
}
