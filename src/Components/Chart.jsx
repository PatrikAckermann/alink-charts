import { useLoaderData } from "react-router-dom"
import BChart from "./BChart"
import PChart from "./PChart"
import { data } from "../data"
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
    var index = parseInt(params.id) - 1

    switch(params.type) {
        case "bchart":
            chart = <BChart data={data[index][1]}/>
            break;
        case "pchart":
            chart = <PChart data={data[index][1]}/>
            break;
        default:
            break;
    }
    var a = {title: data[index][0], description: data[index][2], chart: chart}
    return a
}