import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Countries = () => {
    const [data, setData] = useState([]);
    const [rangeValue, setRangeValue] = useState(36);
    const [selectedRadio, setSelectedRadio] = useState("");
    const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];

    useEffect(() => {
        axios
            .get("https://restcountries.com/v3.1/all")
            .then((res) => setData(res.data));
    }, []);

    return (
        <div className='countries'>
            <ul className="radio-container">
                <li>
                    <input type="range" min="1" max="250"
                        defaultValue={rangeValue} onChange={(e) => setRangeValue(e.target.value)}
                    />
                    <label htmlFor={rangeValue}>{rangeValue}</label>
                </li>
                {radios.map((continent, index) => (
                    <li key={index}>
                        <input type="radio" id={continent} name="continentRadio"
                            value={continent}
                            checked={continent === selectedRadio}
                            onChange={(e) => setSelectedRadio(e.target.value)}
                        />
                        <label htmlFor={continent}>{continent}</label>
                    </li>
                ))}
            </ul>
            {selectedRadio && (
                <button onClick={() => setSelectedRadio("")}>Annuler la recherce</button>
            )}
            <ul>
                {data
                    .filter((country) => country.continents[0].includes(selectedRadio))
                    .slice(0, rangeValue)
                    .map((country, index) => (
                        <Card key={index} country={country} />
                    ))
                }
            </ul>
        </div>
    );
};

export default Countries;