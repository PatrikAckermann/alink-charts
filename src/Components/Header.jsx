import "../CSS/Header.css"
import Logo from "./Logo"
import { useNavigate, Link } from "react-router-dom"

export default function Header() {
    var navigate = useNavigate()
    return (
        <div className="header">
            <div className="header--logotitle">
                <Logo onClick={() => navigate("/")}/>
                <h1 className="header--text clickable" onClick={() => navigate("/")}>Charts</h1>  
            </div>
            <div className="header--buttons">
                <h2 className="header--button clickable" onClick={() => navigate("/charts")}>charts</h2>
                <h2 className="header--button clickable" onClick={() => navigate("/")}>home</h2>
            </div>
        </div>
    )
}