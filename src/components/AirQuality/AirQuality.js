import React, { useState, useEffect } from "react";
import "./AirQuality.css";
import Card from "../UI/Card";
import Green from "../assets/GREEN.png";
import Yellow from "../assets/YELLOW.png";
import Orange from "../assets/ORANGE.png";
import Red from "../assets/RED.png";
import Purple from "../assets/PURPLE.png";

import otherGreen from "../assets/OTHER-GREEN.png";
import otherOrange from "../assets/OTHER_ORANGE.png";
import otherRed from "../assets/OTHER_RED.png";

const AirQuality = ({ airQuality, aqiLevel }) => {
  const [aqiImage, setAqiImage] = useState("");
  const [airCondition, setAirCondition] = useState("");

  let pm10Level = "";
  let pm25Level = "";
  let o3Level = "";

  if (airQuality !== undefined) {
    pm10Level = airQuality.data[0].pm10.toFixed(1);
    pm25Level = airQuality.data[0].pm25.toFixed(1);
    o3Level = airQuality.data[0].o3.toFixed(1);
  }

  useEffect(() => {
    const aqiImageHandler = () => {
      switch (true) {
        case aqiLevel <= 50:
          setAqiImage(Green);
          setAirCondition("Good");
          break;
        case aqiLevel >= 51 && aqiLevel <= 99:
          setAqiImage(Yellow);
          setAirCondition("Moderate");
          break;
        case aqiLevel >= 100 && aqiLevel <= 149:
          setAqiImage(Orange);
          setAirCondition("Unhealthy for sensitive");
          break;
        case aqiLevel >= 150 && aqiLevel <= 199:
          setAqiImage(Red);
          setAirCondition("Unhealthy");
          break;
        case aqiLevel >= 200:
          setAqiImage(Purple);
          setAirCondition("Hazardous");
          break;
        default:
          setAqiImage("");
      }
    };
    aqiImageHandler();
  }, [aqiLevel]);

  if (airQuality === undefined) {
    return null;
  }

  const cityname = airQuality["city_name"];

  let imagePM10 = "";
  let imagePM25 = "";
  let imageo3 = "";

  if (pm10Level < 55) {
    imagePM10 = otherGreen;
  }

  if (pm10Level > 55 && pm10Level < 254) {
    imagePM10 = otherOrange;
  }

  if (pm10Level > 254) {
    imagePM10 = otherRed;
  }

  if (pm25Level < 12) {
    imagePM25 = otherGreen;
  }

  if (pm25Level > 12 && pm25Level < 55.4) {
    imagePM25 = otherOrange;
  }

  if (pm25Level > 55.4) {
    imagePM25 = otherRed;
  }

  if (o3Level < 50) {
    imageo3 = otherGreen;
  }

  if (o3Level > 50 && o3Level < 150) {
    imageo3 = otherOrange;
  }

  if (o3Level > 150) {
    imageo3 = otherRed;
  }

  return (
    <section className="air-section">
      <Card aqiLevel={aqiLevel}>
        <div className="air-quality">
          <div className="city">
            <h4>{cityname} </h4>
            <h4>Air qulaity: {airCondition}</h4>
          </div>
          <div className="data">
            <img className="image" src={aqiImage} alt="img" />
            <div className="us-aqi">
              <h3>AQI LEVEL: {aqiLevel}</h3>
            </div>
            <ul className="air-list">
              <li className="air-list-li">
                <div className="itemdiv">
                  <p className="marker">PM10</p>
                  <img className="markerimg" alt="3" src={imagePM10}></img>
                  <p>{pm10Level}</p>
                </div>
              </li>
              <li className="air-list-li">
                <div className="itemdiv">
                <p className="marker">PM25</p>
                  <img  className="markerimg" alt="2" src={imagePM25}></img>
                  <p>{pm25Level}</p>
                </div>
              </li>
              <li className="air-list-li">
                <div className="itemdiv">
                <p className="marker">o3   .....</p>
                  <img  className="markerimg" alt="1" src={imageo3}></img>
                  <p>{o3Level}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default AirQuality;
