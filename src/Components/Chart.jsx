import { useLoaderData } from "react-router-dom"
import { LineChart, Line, CartesianGrid } from "recharts"

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
            <h1>{loaderData.title}</h1>
            <p>{loaderData.description}</p>
            {loaderData.chart}
        </div>
    )
}

export function Loader({params}) {
    var data = {title: ("title " + params.id), description: ("description " + params.id), chart: <LineChart width={400} height={400} data={testData[params.id - 1]}><Line type="monotone" dataKey="value" stroke="#8884d8"/><CartesianGrid stroke="#ccc" /></LineChart>}
    console.log(params.id)
    return data
}

var testData = [
    [
        {
            name: "test1",
            value: 1
        },
        {
            name: "test2",
            value: 2
        },
        {
            name: "test3",
            value: 4
        }
    ],
    [
        {
            name: "test1",
            value: 4
        },
        {
            name: "test2",
            value: 5
        },
        {
            name: "test3",
            value: 6
        }
    ]
]