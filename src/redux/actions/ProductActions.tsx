import { apiFindProductById } from "src/services/Product";
import { LOADING, LOAD_SUCCESS, LOAD_FAILED } from "../reducers/ProductReducer";
import { AppDispatchType } from "../types/AppDispatchType";

const _LOAD_SUCCESS = (data : any) => ({
    type: LOAD_SUCCESS,
    payload: {data, error: null}
});

const _LOAD_FAILED = (err : any) => ({
    type: LOAD_FAILED,
    payload: {data: null, error: err.response.data.message}
});

const _LOADING = () => ({
    type: LOADING,
    payload: {data: null, error: null}
});

export const findProductAction = (id : string) => (dispatch: AppDispatchType) => {
    dispatch(_LOADING());
    apiFindProductById(id)
        .then((res : any) => dispatch(_LOAD_SUCCESS(res.data)))
        .catch(error => dispatch(_LOAD_FAILED(error)));
};