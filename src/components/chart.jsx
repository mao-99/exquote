import { LineChart, Line } from "recharts";

export default function Chart(){
    let data1 = {USDAED: Array(7) [ 3.672501, 3.672525, 3.672501, 3.622501, 3.692525, 4.672501 ]}
    const data = [
        { name: 'Page A', uv: 4000 },
        { name: 'Page B', uv: 3000 },
        { name: 'Page C', uv: 2000 },
        { name: 'Page D' },
        { name: 'Page E', uv: 1890 },
        { name: 'Page F', uv: 2390 },
        { name: 'Page G', uv: 3490 },
      ];
    return (
        <>
            <LineChart width={400} height={400} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8"/>
            </LineChart>
        </>
    )
}