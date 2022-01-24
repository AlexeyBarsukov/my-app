import CurrencyEntry from "../components/CurrencyEntry";
import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/App.css";
import {BASE_URL} from '../api/BASE_URL'

function Converter() {
  const[amount1, setAmount1] = useState(0);
  const[amount2, setAmount2] = useState(0);
  const[currency1, setCurrency1] = useState('USD');
  const[currency2, setCurrency2] = useState('RUB');
  const [rates, setRates] = useState([]);
  const [dates, setDates] = useState([])


  useEffect(()=>{
    axios.get(BASE_URL)
    .then(response =>{
      setRates(response.data.rates);
    })
  }, [])

  useEffect(()=>{
    if(!!rates){
      handleAmount1Change(1)
    }
  },[rates]);

  useEffect(()=>{
    axios.get(BASE_URL)
    .then(response => {
      setDates(response.data.date)
    })
  },[])


  function format(number){
    return number.toFixed(4)
  }

  function handleAmount1Change(amount1) {
    setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
    setAmount1(amount1);
  }

  function handleCurrency1Change(currency1){
    setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
    setCurrency1(currency1);
  }

  function handleAmount2Change(amount2) {
    setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
    setAmount2(amount2);

    

  }

  function handleCurrency2Change(currency2){
    setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
    setCurrency2(currency2);
  }




  return (
    <>
    <div className="main_converter">
    <h1>Конвертер валют</h1>
    <div className="converter">
    <CurrencyEntry 
    onAmountChange={handleAmount1Change}
    onCurrencyChange={handleCurrency1Change}
    currencies = {Object.keys(rates)} 
    amount={amount1} 
    currency={currency1} />
    
    <CurrencyEntry
    onAmountChange={handleAmount2Change}
    onCurrencyChange={handleCurrency2Change}
    currencies = {Object.keys(rates)} 
    amount={amount2} 
    currency={currency2}/>
    </div>
    <div className="DateOutput">
       Данные на {dates}
      </div>
    
    </div>
    </>
  );
}

export default Converter;