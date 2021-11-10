import { useEffect } from "react";
import { useSelector } from "react-redux";
import Loading from "src/components/Loading";
import { findProductAction } from "../actions/ProductActions";
import { AppStateType } from "../types/AppStateType";
import { AppDispatch } from "../utils/AppDispatch";

export const useProduct = (id: string) => {
    const { isLoading, results, errorMessage, isLoaded } = useSelector((state: AppStateType) => state.product);
    const loading = isLoading ? <Loading title="Cargando producto..." /> : "";
    useEffect(() => {
        AppDispatch(findProductAction(id));
    }, [id])

    console.log("hook ", isLoading)

    return { results, loading, isLoaded, errorMessage }
}