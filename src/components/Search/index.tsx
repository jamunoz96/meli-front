import React, { SyntheticEvent, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { searchClearAction } from "src/redux/actions/SearchActions";
import { AppDispatch } from "src/redux/utils/AppDispatch";
import { PropsSearch } from "src/types/PropsSearch";
import"./Search.css";

const SearchComponent = ({ search } : PropsSearch) => {
    
    const history = useHistory();
    const [state, setState] = useState( search || "" );
    const handleSubmit = (e : SyntheticEvent) => {
        e.preventDefault();
        if(state && state != search) {
            AppDispatch(searchClearAction());
            history.replace(`/items?search=${state}`);
        }
    }

    return <div className="search">
        <div className="menu">
            <Link to="/">
                <div className="logo"></div>
            </Link>
            <form onSubmit={handleSubmit}>
                <div className="input-icons">
                    <input onChange={e => setState(e.target.value)} value={state} className="input-field" type="search" name="search" placeholder="Nunca pares de buscar" />
                    <button type="submit" className="icon"></button>
                </div>
            </form>
        </div>
    </div>
}

export default SearchComponent