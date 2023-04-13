import "../CSS/Header.css"
import Logo from "./Logo"
import { useNavigate, Link } from "react-router-dom"

import {route} from "../App"

export default function Header() {
    var navigate = useNavigate()
    return (
        <div className="header">
            <div className="header--logotitle">
                <Logo onClick={() => navigate(route)}/>
                <h1 className="header--text clickable" onClick={() => navigate(route)}>Charts</h1>  
            </div>
            <div className="header--buttons">
                <h2 className="header--button clickable" onClick={() => navigate("charts")}>charts</h2>
                <h2 className="header--button clickable" onClick={() => navigate(route)}>home</h2>
            </div>
        </div>
    )
}