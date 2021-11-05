import React from "react";
import NoneComponent from "src/components/None";
import ResultComponent from "src/components/Result"
import SearchComponent from "src/components/Search"
import useQuery from "src/hooks/useQuery";

const Search = () => {
    const param = useQuery("search");
    return <div>
        <SearchComponent search={param} />
        { param ? <ResultComponent search={param} /> : <NoneComponent /> }
    </div>
}

export default Search