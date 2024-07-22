import React, { useEffect, useState } from "react";

const API_COUNTRIES_URL =
    "https://restcountries.com/v3.1/all?fields=name,capital,flags,population";

export const App = () => {
    const [data, setData] = useState("");
    const [randomCountry, setRandomCountry] = useState("");

    useEffect(() => {
        fetch(API_COUNTRIES_URL)
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);

    const handlePrint = () => {
        const randomNumber = Math.floor(Math.random() * 250);
        const thisRandomCountry = data[randomNumber];
        setRandomCountry(thisRandomCountry);
    };

    return (
        <main
        style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}
        >
        <h1>COUNTRY AND CAPITAL</h1>
        <button onClick={handlePrint}>RANDOM COUNTRY</button>
        <h2>{randomCountry && "COUNTRY: " + randomCountry.name.common}</h2>
        <h3>
            {randomCountry?.capital?.length > 0 &&
            "CAPITAL: " + randomCountry?.capital[0]}
        </h3>
        {randomCountry?.flags && (
            <img
            style={{ width: "auto", height: "150px", border: "1px solid black" }}
            src={randomCountry?.flags?.png}
            alt={randomCountry?.flags?.alt}
            />
        )}
        <p>
            {randomCountry &&
            randomCountry.name.common +
                " has " +
                new Intl.NumberFormat("es-ES").format(randomCountry.population) +
                " habitants."}
        </p>
        </main>
    );
};
