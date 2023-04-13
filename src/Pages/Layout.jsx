import { Outlet } from "react-router-dom"
import Header from "../Components/Header"
import { NavLink } from "react-router-dom"
import "../CSS/Layout.css"

export default function Layout() {
    return (
        <div className="layout">
            <Header/>
            <Outlet/>
        </div>
    )
}