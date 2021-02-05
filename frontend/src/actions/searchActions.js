import {
    LOADING_RESULTS,
    GET_RESULTS,
    CLEAR_RESULTS,
} from './types'
import axios from 'axios'

export const getSearchResults = (query) => (dispatch) => {
    dispatch({
        type: LOADING_RESULTS
    })

    axios.get(`${process.env.REACT_APP_API_URL}/api/movies/?search=${query}`)
    .then(res => {
        dispatch({
            type: GET_RESULTS,
            payload: res.data
        })
    })
    .catch(e => {
        const errors = {message: e.response.data, status: e.response.status}

        alert(errors.message)

        dispatch( {
            type: CLEAR_RESULTS,
        })
    }) 
}

export const clearResults = () => (dispatch) => {
    dispatch({
        type: CLEAR_RESULTS
    })
}
