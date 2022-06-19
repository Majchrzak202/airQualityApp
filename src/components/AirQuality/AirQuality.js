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

const AirQuality = ({ airQuality }) => {
  let aqiLevel = "";
  let pm10Level = "";
  let pm25Level = "";
  let o3Level = "";

  if (airQuality !== undefined) {
    aqiLevel = airQuality.data[0].aqi;
    pm10Level = airQuality.data[0].pm10.toFixed(1);
    pm25Level = airQuality.data[0].pm25.toFixed(1);
    o3Level = airQuality.data[0].o3.toFixed(1);
  }

  let imageAqiUrl = "";
  let imagePM10 = "";
  let imagePM25 = "";
  let imageo3 = "";

  

  if (aqiLevel < 50) {
    imageAqiUrl = Green;
  }

  if (aqiLevel > 50 && aqiLevel < 100) {
    imageAqiUrl = Yellow;
  }

  if (aqiLevel > 100 && aqiLevel < 150) {
    imageAqiUrl = Orange;
  }

  if (aqiLevel > 150 && aqiLevel < 200) {
    imageAqiUrl = Red;
  }

  if (aqiLevel > 200 && aqiLevel < 300) {
    imageAqiUrl = Purple;
  }

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
      <Card>
        <img className="image" src={imageAqiUrl} alt="img" />
        <div className="us-aqi">
          <h3>AQI LEVEL: {aqiLevel}</h3>
        </div>
        <ul className="air-list">
          <li className="air-list-li">
            <img alt="3" src={imagePM10}></img>
            <div>{pm10Level}</div>
          </li>
          <li className="air-list-li">
            <img alt="2" src={imagePM25}></img>
            <div>{pm25Level}</div>
          </li>
          <li className="air-list-li">
            <img alt="1" src={imageo3}></img>
            <div>{o3Level}</div>
          </li>
        </ul>
      </Card>
    </section>
  );
};

export default AirQuality;
