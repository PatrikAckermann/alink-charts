import { NavLink, Outlet } from "react-router-dom"
import "../CSS/Layout.css"
import {data} from "../data"

export default function Charts() {
    var links = data
    var mappedLinks = links.map((x, index) => <NavLink key={index} to={(index + 1).toString()} className={({isActive}) => isActive ? "charts--link link--active" : "charts--link"}>{x[0]}</NavLink>)
    return (
        <div className="charts">
            <div className="charts--links">
                {mappedLinks}
            </div>
            <Outlet/>
        </div>
    )
}