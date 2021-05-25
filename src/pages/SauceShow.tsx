import React, { useState, useEffect } from "react";
import NaviBar from "../components/NaviBar";
import { Drink } from "../models/drink";
import { withRouter } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import { RouteComponentProps } from "react-router";

type PathLocationType = {
  pathname: string;
};

type PropsType = RouteComponentProps<PathLocationType> & {
  pathname: string;
};

const SauceShow: React.FC<PropsType> = (props) => {
  const [drink, setDrink] = useState<Drink[]>([]);

  useEffect(() => {
    fetchDrink();
  }, []);

  const fetchDrink = async () => {
    const id: string = props.location.pathname.slice(1);
    const url: string = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    try {
      const response: AxiosResponse = await axios.get(url);
      setDrink((oldDrink) => {
        return [...oldDrink, ...response.data.drinks];
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sauce-show-container">
      <NaviBar />
      {/* <SauceItem drinks={drinks} /> */}
    </div>
  );
};

export default withRouter(SauceShow);
