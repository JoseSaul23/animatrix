import {
    LOADING_MOVIE,
    GET_MOVIE,
    CLEAR_MOVIE,
    GET_RANDOM_MOVIE,
} from '../actions/types'

const initialState = {
    movie: {},
    isLoading: false,
    random_movie: 0
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
        case GET_RANDOM_MOVIE:
            return {
                ...state,
                random_movie: action.payload.id
            }
        default:
            return state
    }
}