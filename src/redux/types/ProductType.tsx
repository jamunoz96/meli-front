import { IResponseProduct } from "src/interfaces/IResponseProductService";

export type ProductType = {
    results: IResponseProduct | null;
    isLoading: boolean;
    isLoaded: boolean;
    errorMessage: string | null
}