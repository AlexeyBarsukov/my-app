import PropTypes from "prop-types";
import '../styles/CurrencyEntry.css'


function CurrencyEntry(props){
    return(
        <div className="group">
        <select className = "select_converter" value={props.currency} onChange={ev => props.onCurrencyChange(ev.target.value)}>
            {props.currencies.map((currency => (
            <option value = {currency}>{currency}</option>
            )))}
        </select>
        <input className="input_converter" type ='text' value={props.amount} onChange={ev => props.onAmountChange(ev.target.value)} />
        </div>
    );
}

CurrencyEntry.propTypes = {
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    currencies: PropTypes.array,
    onAmountChange: PropTypes.func,
    onCurrencyChange: PropTypes.func,

};




export default CurrencyEntry;