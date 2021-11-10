import { useParams } from "react-router";
import ProductComponent from "src/components/Product";
import SearchComponent from "src/components/Search"

const Product = () => {
    let { id } = useParams<any>();
    return <>
        <SearchComponent search={""} />
        <ProductComponent id={id} />
    </>
}

export default Product