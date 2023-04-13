import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts"

export default function BChart(props) {
    return (
        <ResponsiveContainer>
            <BarChart data={props.data}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3"/>
                <Legend />
                <Bar dataKey="2021" fill="#123456"/>
                <Bar dataKey="2020" fill="#654321"/>
            </BarChart>
        </ResponsiveContainer> 
    )
}