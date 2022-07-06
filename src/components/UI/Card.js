import React from "react";
import "./Card.css";
import { useAqiTheme } from "../../context/AqiLevelThemeContextProvider";

const Card = ({ children, aqiLevel }) => {
  const { aqiTheme } = useAqiTheme();

  console.log(aqiTheme);

  return (
    <div className="card">
      <div id={aqiTheme} className="cardHeader"></div>
      <div>{children}</div>
    </div>
  );
};

export default Card;
