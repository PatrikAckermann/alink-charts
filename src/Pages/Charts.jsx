import { NavLink, Outlet } from "react-router-dom"
import "../CSS/Layout.css"
import BChart from "../Components/BChart"

/* Daten:
Da die Daten immer nur 2020 und 2021 vergleichen macht es keinen Sinn ein Liniendiagramm oder so zu verwenden. Das Balkendiagramm (SimpleBarChart) eignet sich m.M.n. am besten.
*/

export default function Charts() {
    return (
        <div className="charts">
            <div className="charts--links">
                <NavLink to="1" className="charts--link">Klient*innen</NavLink>
                <NavLink to="2" className="charts--link">Versendete Mails</NavLink>
            </div>
            <Outlet/>
        </div>
    )
}