import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer, Tooltip } from "recharts"

export default function BChart(props) {
    return (
        <ResponsiveContainer>
            <BarChart data={props.data}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3"/>
                <Legend />
                <Tooltip content={customToolTip}/>
                <Bar dataKey="2021" fill="#5500cc"/>
                <Bar dataKey="2020" fill="#111111"/>
            </BarChart>
        </ResponsiveContainer> 
    )
}

export function customToolTip({payload}) {
    if (payload[0] !== undefined) {
        return (
            <div className="custom-tooltip">
                <p className="label" >{`${payload[0].payload.name}`}</p>
                <p className="label" >{`2020: ${payload[0].payload["2020"]}`}</p>
                <p className="label" >{`2021: ${payload[0].payload["2021"]}`}</p>
            </div>
        )
    }
}