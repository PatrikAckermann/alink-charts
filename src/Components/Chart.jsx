import { useLoaderData } from "react-router-dom"
import BChart from "./BChart"
import PChart from "./PChart"
import { data } from "../data"
import "../CSS/Chart.css"

export default function Chart() {
    var loaderData = useLoaderData()
    return (
        <div className="chart">
            <div className="chart--textdiv">
                <h1 className="chart--title">{loaderData.title}</h1>
                <p className="chart--text">{loaderData.description}</p>
            </div>
            <div className="chart--div">
                {loaderData.chart}
            </div>
        </div>
    )
}

export function Loader({params}) {
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