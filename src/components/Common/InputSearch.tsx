import { useState } from "react";
import { PropsInputSearch } from "src/types/PropsInputSearch";

const InputSearch = ({ itype, iclass, ipholder, ivalue, handleValue } : PropsInputSearch) => {
    const [state, setVal] = useState(ivalue)
    const update = (v: string) => {
        handleValue(v);
        setVal(v);
    }
    return <input type={itype} value={state} onChange={(e) => update(e.target.value)} placeholder={ipholder} className={iclass} />
}

export default InputSearch