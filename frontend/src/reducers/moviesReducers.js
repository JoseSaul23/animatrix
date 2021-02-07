import {
    LOADING_MOVIE,
    GET_MOVIE,
    CLEAR_MOVIE,
    GET_RANDOM_MOVIE,
    LOADING_MOVIES,
    GET_MOVIES,
    CLEAR_MOVIES,
} from '../actions/types'

const initialState = {
    movie: {},
    isLoading: false,
    random_movie: 0,
    movies: [],
    areLoading: false,
    loadingMore: false,
    page: 0,
    nextPage: "",
    count: 0,
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
        case LOADING_MOVIES:
            return {
                ...state,
                areLoading: state.page === 0 ? true : false,
                loadingMore: state.page > 0 ? true : false
            }
        case GET_MOVIES:
            return {
                ...state,
                movies: [...state.movies, ...action.payload.results],
                page: state.page + 1,
                nextPage: action.payload.next,
                count: action.payload.count,
                areLoading: false,
                loadingMore: false,
            }
        case CLEAR_MOVIES:
            return {
                ...initialState
            }
        default:
            return state
    }
}