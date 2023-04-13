import { NavLink, Outlet } from "react-router-dom"
import "../CSS/Layout.css"

/* Daten:
Da die Daten immer nur 2020 und 2021 vergleichen macht es keinen Sinn ein Liniendiagramm oder so zu verwenden. Das Balkendiagramm (MixBarChart) eignet sich m.M.n. am besten.
*/

export default function Charts() {
    return (
        <div className="charts">
            <div className="charts--links">
                <NavLink to="1" className="charts--link">chart 1</NavLink>
                <NavLink to="2" className="charts--link">chart 2</NavLink>
            </div>
            <Outlet/>
        </div>
    )
}