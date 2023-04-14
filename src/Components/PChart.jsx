import { PieChart, Pie, Text, Cell, Legend, ResponsiveContainer, Tooltip } from "recharts"

export default function PChart(props) {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart width="100%" height="100%">
                <Legend/>
                <Pie data={props.data} cx="50%" cy="50%" outerRadius={75} dataKey="2020">
                    <Cell fill="#111111"/>
                    <Cell fill="#5500cc"/>
                    <Cell fill="#AAAAAA"/>
                    <Cell fill="#DDDAF1"/>
                </Pie>
                <Pie data={props.data} cx="50%" cy="50%" innerRadius={80} outerRadius={100} label={customLabel} labelLine={false} dataKey="2021">
                    <Cell fill="#111111"/>
                    <Cell fill="#5500cc"/>
                    <Cell fill="#AAAAAA"/>
                    <Cell fill="#DDDAF1"/>
                </Pie>
                <Tooltip content={(a) => customToolTip(a, props.data)}/>
            </PieChart>
        </ResponsiveContainer> 
    )
}

function customLabel({percent, x, y, payload}) {
    console.log(payload)
    return <text fill="black" x={x - 18} y={y + 4}>{`${payload["2021"]}`}</text>
}

function customToolTip({payload}, data) {
    if (payload[0] != undefined) {
        var percent2020 = 0
        var percent2021 = 0
        data.forEach((x) => {
            percent2020 += x["2020"]
        })
        percent2020 = Math.round(100 / percent2020 * payload[0].payload["2021"])

        data.forEach((x) => {
            percent2021 += x["2021"]
        })
        percent2021 = Math.round(100 / percent2021 * payload[0].payload["2021"])
        
        return (
            <div className="custom-tooltip">
                <p className="label" >{`${payload[0].name}`}</p>
                <p className="label" >{`2020: ${payload[0].payload["2020"]}`} / {percent2020}%</p>
                <p className="label" >{`2021: ${payload[0].payload["2021"]}`} / {percent2021}%</p>
            </div>
        )
    }
}