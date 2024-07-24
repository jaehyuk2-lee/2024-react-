import { useState, useEffect } from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [value, setValue] = useState(0);
    const [selected, setSelected] = useState(0);
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((json) => {
                setCoins(json);
                setLoading(false);
            })
    }, [])

    const onChange = (event) => {
        setValue(event.target.value)
    }

    const onSelect = (event) => {
        setSelected(event.target.value)
    }
    return (
        <div>
            <h1>The Coins! {loading ? null : `(${coins.length})`}</h1>
            {loading ? <strong>Loading...</strong> :
                <select onChange={onSelect}>
                    {coins.map((coin) => <option value={coin.quotes.USD.price}>
                        {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
                    </option>)}
                </select>}
            <br />
            <span>put your $</span>
            <br/>
            <input type="text" value={value} onChange={onChange} />
            <br/>
            <span>you can get</span>
            <br/>
            <input type="text" value={value / selected} onChange={onChange} disabled = {true}/>

        </div>
    )
}

export default App;