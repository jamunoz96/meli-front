import { IResponseProductList } from 'src/interfaces/IResponseProductService';
import API from '../Api';

export const apiFindProductsBySearch = (search : string) => API.get<IResponseProductList>(`/items`, {
    params: {
        q: search
    }
});

export const apiFindProductById = (id : string) => API.get(`/items/${id}`);