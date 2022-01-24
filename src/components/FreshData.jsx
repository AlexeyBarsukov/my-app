import axios from "axios";
import { useEffect, useState } from "react"
import "../styles/FreshData.css"

function FreshData() {
    const[ratesList, setRatesList] = useState([]);
    const [base, setBase] = useState("USD");

    useEffect(()=>{
        getRates("USD");
    }, [])

    const getRates = async(base) => {
        const freshData = await axios.get(`https://v6.exchangerate-api.com/v6/c0f7ca26d0542b57260c2a75/latest/${base}`);
        const {conversion_rates} = freshData.data
        const ratesTemp = [];
        for(const[symbol, rate] of Object.entries(conversion_rates)){
            ratesTemp.push({symbol, rate});
        }
        setRatesList(ratesTemp)
    };

    return(
        <>
        <h1>Текущие курсы валют</h1>
        <div className="fresh">
            <div className="selectCurrency">
                <span>Выберите валюту</span>
                <select 
                    className="select_exchange_rates" 
                    value={base}
                    onChange={(e)=>{
                    const value = e.target.value;
                    setBase(value)
                    getRates(value)
                }}>
                {ratesList.map((d)=>(
                <option value = {d.symbol} key={d.symbol}>{d.symbol}</option>
                ))}
            </select>
            <ul className="list-group">
            {ratesList.map((d)=> (
                <li className="list-group-item" key={d.symbol}>
                    {d.symbol} = {d.rate}
                </li>
            ))}
            </ul>
            </div>
        </div>
        </>
    )
}
export default FreshData;