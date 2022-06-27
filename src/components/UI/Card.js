import React, {useContext} from "react";
import "./Card.css";
import airQualityContext from "../context/airQualityContext";
import AirQualityProvider from "../context/AirQualityProvider";

const Card = ({ children }) => {

  const cardCtx = useContext(airQualityContext)
  console.log(cardCtx.agiColor)
 
  return (
    <AirQualityProvider>
      <div className="card">{children}</div>
    </AirQualityProvider>
  );
};

export default Card;
