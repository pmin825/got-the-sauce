import React, { useState, useEffect } from "react";
import NaviBar from "../components/NaviBar";
import axios from "axios";

import SauceItem from "./SauceItem";

import { Drink } from "../models/drink";

const SauceIndex: React.FC = () => {
    const [drinks, setDrinks] = useState<Drink[]>([]);

    useEffect(() => {
        fetchDrinks();
    }, []);

    const fetchDrinks = async () => {
        const url =
            "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail";
        try {
            const response = await axios.get(url);
            console.log(response.data.drinks);
            setDrinks((oldDrinks) => {
                return [...oldDrinks, ...response.data.drinks];
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="sauce-index-container">
            <NaviBar />
            <SauceItem drinks={drinks} />
        </div>
    );
};

export default SauceIndex;
