import React from "react";
import SearchBar from "../Search /SearchBar";
import AirQuality from "../AirQuality/AirQuality";
import RecomendationList from "../AirQuality/RecomendationList";
import NewAirQuality from "../AirQuality/air-quality/NewAirQuality";

const Home = ({ searchHandler, aqiLevel, airQuality }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <SearchBar searchHandler={searchHandler} />
      <NewAirQuality />
      <AirQuality aqiLevel={aqiLevel} airQuality={airQuality} />
      <RecomendationList airQuality={airQuality} aqiLevel={aqiLevel} />
    </div>
  );
};

export default Home;
