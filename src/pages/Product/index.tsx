import React from "react";
import { useParams } from "react-router";
import ProductComponent from "src/components/Product";
import SearchComponent from "src/components/Search"
import useQuery from "src/hooks/useQuery";

const Product = () => {
    let { id } = useParams<any>();
    return <div>
        <SearchComponent search={""} />
        <ProductComponent id={id} />
    </div>
}

export default Product