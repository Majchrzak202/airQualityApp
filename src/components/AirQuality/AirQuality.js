import "./AirQuality.css";
import Card from "../UI/Card";
import Green from "../assets/GREEN.png";
import Yellow from "../assets/YELLOW.png";
import Orange from "../assets/ORANGE.png";
import Red from "../assets/RED.png";
import Purple from "../assets/PURPLE.png";

const AirQuality = ({ airQuality }) => {
  let aqiLevel = "";
  let pm10Level = "";
  let pm25Level = "";
  let o3Level = ''

  if (airQuality !== undefined) {
    aqiLevel = airQuality.data[0].aqi;
    pm10Level = airQuality.data[0].pm10;
    pm25Level = airQuality.data[0].pm25;
    o3Level = airQuality.data[0].o3
  }

  let imageAqiUrl = "";

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

  return (
    <section className="air-section">
      <Card>
        <img className="image" src={imageAqiUrl} alt="img" />
        <div className="us-aqi">
          <h3>AQI LEVEL: {aqiLevel}</h3>
        </div>
        <ul className="air-list">
          <li className="air-list-li">
            <img alt="3" src={"./assets/green.png"}></img>
            <div>{pm10Level}</div>
          </li>
          <li className="air-list-li">
            <img alt="2" src=""></img>
            <div>{pm25Level}</div>
          </li>
          <li className="air-list-li">
            <img
              alt="1"
              src={
                "http://clipart-library.com/new_gallery/35-358537_green-circle-clipart.png"
              }
            ></img>
            <div>{o3Level}</div>
          </li>
        </ul>
      </Card>
    </section>
  );
};

export default AirQuality;
