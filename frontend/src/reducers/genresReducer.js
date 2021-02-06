import {
    LOADING_GENRES,
    GET_GENRES,
    CLEAR_GENRES,
    LOADING_GENRE,
    GET_GENRE,
    CLEAR_GENRE,
} from '../actions/types'

const initialState = {
    genres: [],
    areLoading: false,
    loadingMore: false,
    page: 0,
    nextPage: "",
    count: 0,
    genre: {},
    isLoading: false,
}

export const genresReducer = (state=initialState, action) => {
    switch (action.type) {
        case LOADING_GENRES:
            return {
                ...state,
                areLoading: state.page === 0 ? true : false,
                loadingMore: state.page > 0 ? true : false
            }
        case GET_GENRES:
            return {
                ...state,
                genres: [...state.genres, ...action.payload.results],
                page: state.page + 1,
                nextPage: action.payload.next,
                count: action.payload.count,
                areLoading: false,
                loadingMore: false
            }
        case CLEAR_GENRES:
        case CLEAR_GENRE:
            return {
                ...initialState,
            }
        case LOADING_GENRE:
            return {
                ...state,
                isLoading: true
            }
        case GET_GENRE:
            return {
                ...state,
                genre: action.payload,
                isLoading: false
            }
        default:
            return state
    }
}