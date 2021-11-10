
import { useProduct } from "src/redux/hooks/useProduct";
import { PropsProduct } from "src/types/PropsProduct";
import { parsePriceProduct } from "src/utils/numbers";
import Categories from "../Result/Categories";
import "./Product.css";

const ProductComponent = ({ id }: PropsProduct) => {
    const { results, loading, isLoaded, errorMessage } = useProduct(id);
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