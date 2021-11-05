import { apiFindProductsBySearch } from "src/services/Product";
import { LOADING, SEARCH_SUCCESS, SEARCH_FAILED, CLEAR } from "../reducers/SearchReducer";
import { AppDispatchType } from "../types/AppDispatchType";

const _SEARCH_SUCCESS = (data : any) => ({
    type: SEARCH_SUCCESS,
    payload: {data, error: null}
});

const _SEARCH_FAILED = (err : any) => ({
    type: SEARCH_FAILED,
    payload: {data: null, error: err.message}
});

const _LOADING = () => ({
    type: LOADING,
    payload: {data: null, error: null}
});

const _CLEAR = () => ({
    type: CLEAR,
    payload: {data: null, error: null}
});

export const searchProductsAction = (search : string) => (dispatch: AppDispatchType) => {
    dispatch(_LOADING());
    apiFindProductsBySearch(search)
        .then((res : any) => dispatch(_SEARCH_SUCCESS(res.data)))
        .catch(error => dispatch(_SEARCH_FAILED(error)));
};

export const searchClearAction = () => (dispatch: AppDispatchType) => {
    dispatch(_CLEAR());
};