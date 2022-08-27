import React, { useState, useEffect } from "react";
import Footer from "./components/UI/Footer";
import Navbar from "./components/UI/Navbar";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Info from "./components/Pages/Info";
import Home from "./components/Pages/Home";

import { useAqiTheme } from "./context/AqiLevelThemeContextProvider";

const api = {
  base: "https://api.weatherbit.io/v2.0",
  key: "870a35a5e9f34021b5ccab5f2de0e2ae",
};

const App = () => {
  const [search, setSearch] = useState("Warszawa");
  const [airQuality, setAirQuality] = useState();
  const [aqiLevel, setAqiLevel] = useState("");

  const { themeChangeHandler } = useAqiTheme();

  const searchHandler = (city) => {
    setSearch(city);
  };

  useEffect(() => {
    const fetchAirQuality = async () => {
      const response = await fetch(
        `${api.base}//current/airquality?city=${search}&key=${api.key}`
      );
      const data = await response.json();
      setAirQuality(5 /* data */);
      setAqiLevel(55 /* data.data[0].aqi */);
      themeChangeHandler(55 /* data.data[0].aqi */);
    };

    fetchAirQuality();
  }, [search]);

  return (
    <Router>
      <Navbar />
      <div >
        <Routes>
          <Route
            path="/"
            element={
              <Home
                aqiLevel={aqiLevel}
                searchHandler={searchHandler}
                airQuality={airQuality}
              />
            }
          ></Route>
          <Route path="About" element={<About />}></Route>
          <Route path="Contact" element={<Contact />}></Route>
          <Route path="Info" element={<Info />}></Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
