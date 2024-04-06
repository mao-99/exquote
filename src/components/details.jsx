import { useParams } from 'react-router-dom';
import { generateDates } from "./api/api";
import Chart from './chart';
import { Link } from 'react-router-dom';


export default function Details({ groupedQuotes }) {
    let params = useParams();
    let key = params.key;
    let prices = groupedQuotes[key];
    let timeFrame = prices.length;
    let dates = generateDates(timeFrame);
    console.log(prices, prices.length);
    console.log(dates);
    let data = [];
    for (let i = 0; i < timeFrame; i++) {
        data.push({price: parseFloat(prices[i].toFixed(2)), date: dates[i]});
    }
    const getMinMaxAv = () => {
        let minVal = data[0].price, maxVal = data[0].price, avVal, sum = 0;
        for (let i = 0; i < data.length; i++){
            sum += data[i].price;
            if (data[i].price < minVal){
                minVal = data[i].price;
            }
            if (data[i].price > maxVal){
                maxVal = data[i].price;
            }
        }
        avVal = parseFloat((sum/data.length).toFixed(2));
        return [minVal, maxVal, avVal];
    }
    let [minRate, maxRate, avRate] = getMinMaxAv();
    return (
        <>
         {/* Placeholder for chart */}
         <div className="details">
            <div className="chartContainer">
                <Chart groupedQuotes={groupedQuotes} />
            </div>

            <h3>Historical Rates: </h3>
            <div className="historicalContainer">
                {data.map((quote, index) => (
                    <div className="historicalRate" key={index} style={{width:'32%', border:"1px solid black", margin:'1px'}}>
                        <p><strong><em>{quote.date}: </em></strong> {quote.price}</p>
                    </div>
                ))}
            </div>
            
            <h3>Extras: </h3>
            <div className="extrasContainer">
                <div className="extrasRate" style={{width:'32%', border:"1px solid black", margin:'1px'}}>
                        <p><strong><em>Min Rate: </em></strong> {minRate}</p>
                </div>
                <div className="extrasRate" style={{width:'32%', border:"1px solid black", margin:'1px'}}>
                        <p><strong><em>Max Rate: </em></strong> {maxRate}</p>
                </div>
                <div className="extrasRate" style={{width:'32%', border:"1px solid black", margin:'1px'}}>
                        <p><strong><em>Av. Rate: </em></strong> {avRate}</p>
                </div>
            </div>

            <Link to={`/`}><button>Back</button></Link>
         </div>
        </>
    )
}