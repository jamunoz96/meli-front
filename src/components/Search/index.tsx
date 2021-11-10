import  { SyntheticEvent } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { searchClearAction } from "src/redux/actions/SearchActions";
import { AppDispatch } from "src/redux/utils/AppDispatch";
import { PropsSearch } from "src/types/PropsSearch";
import InputSearch from "../Common/InputSearch";
import"./Search.css";

const SearchComponent = ({ search } : PropsSearch) => {
    console.log("search")
    const history = useHistory();
    let valSearch : string | null = search;
    const handleSubmit = (e : SyntheticEvent) => {
        e.preventDefault();
        if(valSearch && valSearch !== search) {
            AppDispatch(searchClearAction());
            history.replace(`/items?search=${valSearch}`);
        }
    }

    const setSearch = (val : string) => valSearch = val;

    return <div className="search">
        <div className="menu">
            <Link to="/">
                <div className="logo"></div>
            </Link>
            <form onSubmit={handleSubmit}>
                <div className="input-icons">
                    <InputSearch itype="search" iclass="input-field"  ipholder="Nunca pares de buscar" ivalue={search || ""} handleValue={setSearch} />
                    <button type="submit" className="icon"></button>
                </div>
            </form>
        </div>
    </div>
}

export default SearchComponent