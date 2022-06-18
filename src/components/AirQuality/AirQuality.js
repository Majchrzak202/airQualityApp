import "./AirQuality.css";
import Card from "../UI/Card";

const AirQuality = ({ airQuality }) => {
  let aqiLevel = "";

  if (airQuality !== undefined) {
    aqiLevel = airQuality.data[0].aqi;
  }

  let imageUrl = "";

  if (aqiLevel < 50) {
    imageUrl = "https://cdn-icons.flaticon.com/png/512/4315/premium/4315445.png?token=exp=1655528969~hmac=2b699ba37aabb18338caea1a6a3ae406";
  }

  return (
    <section className="air-section">
      <Card>
        <img className="image" src={imageUrl} alt="img" />
        <div className="us-aqi">
          <h3>AQI LEVEL: {aqiLevel}</h3>
        </div>
        <ul className="air-list">
          <li className="air-list-li">
            <img alt="3" src={"./assets/green.png"}></img>
            <div>PM 2.5</div>
          </li>
          <li className="air-list-li">
            <img
              alt="2"
              src={
                "http://clipart-library.com/new_gallery/35-358537_green-circle-clipart.png"
              }
            ></img>
            <div>PM 2.5</div>
          </li>
          <li className="air-list-li">
            <img
              alt="1"
              src={
                "http://clipart-library.com/new_gallery/35-358537_green-circle-clipart.png"
              }
            ></img>
            <div>PM 2.5</div>
          </li>
        </ul>
      </Card>
    </section>
  );
};

export default AirQuality;
