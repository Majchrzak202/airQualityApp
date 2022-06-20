import React, { useState, useEffect } from "react";
import Footer from "./components/UI/Footer";
import Navbar from "./components/UI/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Info from "./components/Pages/Info";
import Home from "./components/Pages/Home";

const api = {
  base: "https://api.weatherbit.io/v2.0",
  key: "41cb93e265444a3ebfcd6344bda909f5",
};

const App = () => {
  const [search, setSearch] = useState("Warszawa");
  const [airQuality, setAirQuality] = useState();
  const [aqiLevel, setAqiLevel] = useState("");

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
      setAqiLevel(data.data[0].aqi);
      console.log(aqiLevel);
    };

    fetchAirQuality();
  }, [search]);

  return (
    <Router>
      <Navbar />
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
      <Footer />
    </Router>
  );
};

export default App;
