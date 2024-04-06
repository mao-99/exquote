import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useParams } from 'react-router-dom';
import { generateDates } from "./api/api";
import Details from './details';

export default function Chart({groupedQuotes}){
    let params = useParams();
    let key = params.key;
    let prices = groupedQuotes[key];
    let timeFrame = prices.length;
    let dates = generateDates(timeFrame);
    console.log(prices, prices.length);
    //console.log(groupedQuotes);
    console.log(dates);
    let data = [];
    for (let i = 0; i < timeFrame; i++) {
        data.push({price: parseFloat(prices[i].toFixed(2)), date: dates[i]});
    }
    //console.log(data);
    return (
        <>
            <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" strokeWidth={8}/>
            <XAxis dataKey="date" />
            <YAxis type="number" scale="log" domain={['auto', 'auto']} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={4} />
            </LineChart>
        </>
    )
}