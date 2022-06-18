import React, { useState, useEffect } from "react";
import SearchBar from "./components/Search /SearchBar";
import AirQuality from "./components/AirQuality/AirQuality";
import RecomendationList from "./components/AirQuality/RecomendationList";
import Footer from "./components/UI/Footer";
import Navbar from "./components/UI/Navbar";

const api = {
  base: "https://api.weatherbit.io/v2.0",
  key: "41cb93e265444a3ebfcd6344bda909f5",
};

const App = () => {
  const [search, setSearch] = useState("Warszawa");
  const [airQuality, setAirQuality] = useState();

  console.log(airQuality)

  const searchHandler = (city) => {
    setSearch(city);
  };

  useEffect(() => {
    const fetchAirQuality = async () => {
      const response = await fetch(
        `${api.base}//current/airquality?city=${search}&key=${api.key}`
      );
      const data = await response.json();
      setAirQuality(data);
    };

    fetchAirQuality();
  }, [search]);

  

  return (
    <div>
      <Navbar />
      <SearchBar searchHandler={searchHandler} />
      <AirQuality airQuality={airQuality} />
      <RecomendationList />
      <Footer />
    </div>
  );
};

export default App;
