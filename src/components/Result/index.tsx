import { useEffect } from "react";
import { useSelector } from "react-redux";
import { searchProductsAction } from "src/redux/actions/SearchActions";
import { AppStateType } from "src/redux/types/AppStateType";
import { AppDispatch } from "src/redux/utils/AppDispatch";
import { PropsSearch } from "src/types/PropsSearch";
import Loading from "../Loading";
import Categories from "./Categories";
import Empty from "./Empty";
import Products from "./Products";
import "./Result.css";

const ResultComponent = ({ search }: PropsSearch) => {

    const { isLoading, results, isLoaded } = useSelector((state: AppStateType) => state.search);
    const loading = isLoading ? <Loading title="Cargando resultados..." /> : "";
    useEffect(() => {
        if (search && !isLoaded) AppDispatch(searchProductsAction(search));
    }, [search])

    return <div className="result">
        { loading }
        { isLoaded && results && results.categories && <Categories categories={results.categories}  /> }
        { isLoaded && results && !results.categories.length && !results.items.length && <Empty /> }
        <div className="container">
            { isLoaded && results && results.items && <Products products={results.items}  /> }
        </div>
    </div>
}

export default ResultComponent