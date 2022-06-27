import React, { useState } from "react";
import airQualityContext from "./airQualityContext";


const AirQualityProvider = ({ children }) => {
  const [aqiColor, setAqiColor] = useState("GREEN");
  const contextObj = {
    aqiColor: aqiColor
  }

  return (
    <airQualityContext.Provider value={{ contextObj}}>
      {children}
    </airQualityContext.Provider>
  );
};

export default AirQualityProvider;
