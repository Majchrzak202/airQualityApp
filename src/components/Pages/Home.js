import React from "react";
import SearchBar from "../Search /SearchBar";
import AirQuality from "../AirQuality/AirQuality";
import RecomendationList from "../AirQuality/RecomendationList";


const Home = ({ searchHandler, aqiLevel, airQuality }) => {
  return (
    <div>
      <SearchBar searchHandler={searchHandler} />
      <AirQuality aqiLevel={aqiLevel} airQuality={airQuality} />
      <RecomendationList airQuality={airQuality} aqiLevel={aqiLevel} />
    </div>
  );
};

export default Home;
