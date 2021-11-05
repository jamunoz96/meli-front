import { PropsCategories } from "src/types/PropsCategories";
import "./Categories.css"

const Categories = ({ categories } : PropsCategories) => {
    const separator = (index : number) => index < categories.length-1 ? ">" : "";
    return <div className="categories">
        { categories.map((categorie: string, index : number) => {
            return <li key={index} className="tag"> {categorie} <b className="separator">{separator(index)}</b> </li>
        }) }
    </div>
}

export default Categories