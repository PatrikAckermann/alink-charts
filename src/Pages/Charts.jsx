import { NavLink, Outlet } from "react-router-dom"
import "../CSS/Layout.css"
import {data} from "../data"

/* Daten:
Da die Daten immer nur 2020 und 2021 vergleichen macht es keinen Sinn ein Liniendiagramm oder so zu verwenden. Das Balkendiagramm (SimpleBarChart) eignet sich m.M.n. am besten.
*/

export default function Charts() {
    var links = data
    var mappedLinks = links.map((x, index) => <NavLink to={(index + 1).toString()} className={({isActive}) => isActive ? "charts--link link--active" : "charts--link"}>{x[0]}</NavLink>)
    return (
        <div className="charts">
            <div className="charts--links">
                {mappedLinks}
            </div>
            <Outlet/>
        </div>
    )
}