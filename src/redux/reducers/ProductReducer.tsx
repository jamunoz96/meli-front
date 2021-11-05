

import { AppActionType } from "../types/AppActionType";
import { ProductType } from "../types/ProductType";

export const LOADING = 'product/LOADING';
export const LOAD_SUCCESS = 'product/LOAD_SUCCESS';
export const LOAD_FAILED = 'product/LOAD_FAILED';

const initialState : ProductType = {
  results: null,
  errorMessage: null,
  isLoaded: false,
  isLoading: false
};

const ProductReducer = (state = initialState, action: AppActionType ) : ProductType   => {

    switch(action.type) {
        case LOADING: 
            return {
                ...state,
                isLoading: true,
                isLoaded: false,
                results: null
            }
        case LOAD_SUCCESS: 
            return {
                ...state,
                results: action.payload.data,
                isLoading: false,
                isLoaded: true,
                errorMessage: null
            }
        case LOAD_FAILED: 
            return {
                ...state,
                errorMessage: action.payload.error,
                results: null,
                isLoading: false,
                isLoaded: true,
            }
        default:
            return state
    }

};

export default ProductReducer;