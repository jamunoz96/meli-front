import { IResponseProductList } from "src/interfaces/IResponseProductService";

export type SearchType = {
    results: IResponseProductList | null;
    isLoading: boolean;
    isLoaded: boolean;
    errorMessage: string | null
}