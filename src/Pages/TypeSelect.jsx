import { NavLink, Outlet, useParams } from "react-router-dom"
import "../CSS/Layout.css"

export default function TypeSelect() {
    var params = useParams()
    function getPath(type) {
        var path = type
        if (params.id) {
            path += "/" + params.id
        }
        console.log(path)
        return path
    }

    return (
        <div>
            <div className="charts--links" style={{paddingTop: "2ch"}}>
                <NavLink to={getPath("bchart")} className={({isActive}) => isActive ? "charts--link link--active" : "charts--link"}>Balkendiagramm</NavLink>
                <NavLink to={getPath("pchart")} className={({isActive}) => isActive ? "charts--link link--active" : "charts--link"}>Kreisdiagramm</NavLink>
            </div>
            <Outlet/>
        </div>
    )
}