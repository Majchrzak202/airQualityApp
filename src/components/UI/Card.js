import React from "react";
import "./Card.css";
import { useAqiTheme } from "../../context/AqiLevelThemeContextProvider";

const Card = ({ children, aqiLevel }) => {
  const { aqiTheme } = useAqiTheme();

  console.log(aqiTheme)

  return (
    <div id={aqiTheme} className="card">
      {children}
    </div>
  );
};

export default Card;
