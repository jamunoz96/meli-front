
import { useResult } from "src/redux/hooks/useResult";
import { PropsSearch } from "src/types/PropsSearch";
import Categories from "./Categories";
import Empty from "./Empty";
import Products from "./Products";
import "./Result.css";

const ResultComponent = ({ search }: PropsSearch) => {
    const { results, loading, isLoaded } = useResult(search)
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