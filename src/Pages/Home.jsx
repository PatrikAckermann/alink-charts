import "../CSS/Home.css"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="home">
            <h1 className="home--title">Herzlich willkommen</h1>
            <p className="home--text">Auf dieser Seite werden verschiedene Statistiken des Jahresbericht 2021 der <span className="home--text--link">Stiftung Autismuslink</span> in Form von Diagrammen angezeigt.</p>
            <Link to="charts" className="home--button">Charts anzeigen</Link>
        </div>
    )
}