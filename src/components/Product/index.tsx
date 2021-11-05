
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { findProductAction } from "src/redux/actions/ProductActions";
import { AppStateType } from "src/redux/types/AppStateType";
import { AppDispatch } from "src/redux/utils/AppDispatch";
import { PropsProduct } from "src/types/PropsProduct";
import { parsePriceProduct } from "src/utils/numbers";
import Loading from "../Loading";
import Categories from "../Result/Categories";
import "./Product.css";

const ProductComponent = ({ id }: PropsProduct) => {

    const { isLoading, results, errorMessage, isLoaded } = useSelector((state: AppStateType) => state.product);
    const loading = isLoading ? <Loading title="Cargando producto..." /> : "";
    useEffect(() => {
        AppDispatch(findProductAction(id));
    }, [])

    return <div className="product">
        { loading }
        { results && results.item.categories && <Categories categories={results.item.categories}  /> }
        { results && 
            <div className="container">
                <div className="head">
                    <div className="image">
                        <img alt={results.item.title} src={results.item.picture} />
                    </div>
                    <div className="info">
                        <p>{results.item.condition} - {results.item.sold_quantity} Vendidos </p>
                        <h3>{results.item.title}</h3>
                        <h1>$ {parsePriceProduct(results.item.price.amount, results.item.price.currency)}</h1>
                        <button className="btn-buy" type="button">Comprar</button>
                        <button className="btn-add" type="button">Añadir al carrito</button>
                    </div>
                </div>
                <div className="desc">
                    <h4>Descripción del producto</h4>
                    <p>{results.item.description}</p>
                </div>
            </div>
        }
        { isLoaded && errorMessage && <h4>{errorMessage}</h4> }
    </div>
}

export default ProductComponent