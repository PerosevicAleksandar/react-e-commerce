import { Link } from "react-router-dom";

function Categories(props) {
    return(
        <div className="flex flex-col items-center gap-4">
            <img src={props.image} alt={props.category} className="w-56 sm:w-full"/>
            <Link to={`/products/category/${props.category.toLowerCase()}`}>
            <button className="w-40 sm:w-48 btn-dark">{props.category}</button>
            </Link>
        </div>
    )
}

export default Categories;