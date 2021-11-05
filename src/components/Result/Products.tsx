import { Link } from "react-router-dom"
import { IProduct } from "src/interfaces/IProduct"
import { PropsProducts } from "src/types/PropsProducts"
import { parsePriceProduct } from "src/utils/numbers"

const Products = ( { products } : PropsProducts ) => {
    return  <>
        { products.map((product: IProduct) => {
            return <Link key={product.id} className="link-card" to={`/items/${product.id}`} >
                <div className="card">
                    <div>
                        <img alt={product.title} className="cover" src={product.picture} />
                    </div>
                    <div className="detail">
                        <div className="price"><h2>{parsePriceProduct(product.price.amount, product.price.currency)}</h2></div>
                        <div className="title"><h5>{product.title}</h5></div>
                        <div className="info"><p>{product.state_name}</p></div>
                    </div>
                </div>
                <div className="line"></div>
            </Link>
        }) }
    </>
}

export default Products