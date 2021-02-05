import {
    LOADING_RESULTS,
    GET_RESULTS,
    CLEAR_RESULTS,
} from '../actions/types'

const initialState = {
    results: [],
    page: 0,
    nextPage: "",
    count: 0,
    areLoading: false,
    loadingMore: false,
}

export const searchReducer = (state=initialState, action) => { 
    switch (action.type) {
        case LOADING_RESULTS:
            return {
                ...state,
                areLoading: state.page === 0 ? true : false,
                loadingMore: state.page > 0 ? true : false
            }
        case GET_RESULTS:
            return {
                ...state,
                results: [...state.results, ...action.payload.results],
                page: state.page + 1,
                nextPage: action.payload.next,
                count: action.payload.count,
                areLoading: false,
                loadingMore: false
            }
        case CLEAR_RESULTS:
            return {
                ...initialState,
            }
        default:
            return state;
    }
}