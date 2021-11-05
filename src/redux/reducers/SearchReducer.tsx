

import { AppActionType } from "../types/AppActionType";
import { SearchType } from "../types/SearchType";

export const LOADING = 'search/LOADING';
export const SEARCH_SUCCESS = 'search/SEARCH_SUCCESS';
export const SEARCH_FAILED = 'search/SEARCH_FAILED';
export const CLEAR = 'search/CLEAR';

const initialState : SearchType = {
  results: null,
  errorMessage: null,
  isLoaded: false,
  isLoading: false
};

const SearchReducer = (state = initialState, action: AppActionType ) : SearchType   => {

    switch(action.type) {
        case LOADING: 
            return {
                ...state,
                isLoading: true,
                isLoaded: false,
                results: null
            };
        case SEARCH_SUCCESS: 
            return {
                ...state,
                results: action.payload.data,
                isLoading: false,
                isLoaded: true,
                errorMessage: null
            };
        case SEARCH_FAILED: 
            return {
                ...state,
                errorMessage: action.payload.error,
                results: null,
                isLoading: false,
                isLoaded: true,
            };
        case CLEAR:
            return initialState;
        default:
            return state
    }

};

export default SearchReducer;