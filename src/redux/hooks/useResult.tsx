import { useEffect } from "react";
import { useSelector } from "react-redux";
import Loading from "src/components/Loading";
import { searchProductsAction } from "../actions/SearchActions";
import { AppStateType } from "../types/AppStateType";
import { AppDispatch } from "../utils/AppDispatch";

export const useResult = (search: string | null) => {
    const { isLoading, results, isLoaded } = useSelector((state: AppStateType) => state.search);
    const loading = isLoading ? <Loading title="Cargando resultados..." /> : "";
    
    useEffect(() => {
        if (search && !isLoaded) {
            AppDispatch(searchProductsAction(search));
        }
    }, [search, isLoaded])

    return { results, loading, isLoaded }
}