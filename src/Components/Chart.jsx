import { useLoaderData } from "react-router-dom"
import BChart from "./BChart"
import { klientinnen, mails } from "../data"
import "../CSS/Chart.css"

/* 
 Need a back button to get back to charts
 Maybe a last/next chart button? This would create a nice transition between the charts

 DESKTOP VERSION:
 Title and Description are on the left, Chart is on the right

 MOBILE VERSION:
 All go into one column
*/

export default function Chart() {
    var loaderData = useLoaderData()
    return (
        <div className="chart">
            <h1 className="chart--title">{loaderData.title}</h1>
            <p className="chart--text">{loaderData.description}</p>
            <div className="chart--div">
                {loaderData.chart}
            </div>
        </div>
    )
}

export function Loader({params}) {
    var title = "Titel konnte nicht geladen werden"
    var description = "Beschreibung konnte nicht geladen werden"
    var chart = <></>
    switch(params.id) {
        case "1":
            title = "Klient*innen"
            description = "Hier werden in einem Balkendiagramm die Klient*innen jeder Abteilung dargestellt."
            chart = <BChart data={klientinnen}/>;
            break;
        case "2":
            title = "Versendete Mails"
            description = "Hier werden in einem Balkendiagramm die versendeten Mails jeder Abteilung dargestellt."
            chart = <BChart data={mails}/>;
            break;
        default:
            break;
    }
    var data = {title: title, description: description, chart: chart}
    return data
}