import {
    LOADING_MOVIE,
    GET_MOVIE,
    CLEAR_MOVIE,
} from '../actions/types'

const initialState = {
    movie: {},
    isLoading: false,
}

export const moviesReducer = (state=initialState, action) => {
    switch (action.type) {
        case LOADING_MOVIE:
            return {
                ...state,
                isLoading: true
            }
        case GET_MOVIE:
            return {
                ...state,
                movie: action.payload,
                isLoading: false
            }
        case CLEAR_MOVIE:
            return {
                ...initialState,
            }
        default:
            return state
    }
}