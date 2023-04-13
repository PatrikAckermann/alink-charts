import { NavLink } from "react-router-dom"
import "../CSS/Layout.css"

export default function Charts() {
    return (
        <div className="charts">
            <div className="charts--links">
                <NavLink to="1" className="charts--link">chart 1</NavLink>
                <NavLink to="2" className="charts--link">chart 2</NavLink>
            </div>
        </div>
    )
}