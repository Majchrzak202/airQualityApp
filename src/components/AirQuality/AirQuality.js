import "./AirQuality.css";
import Card from "../UI/Card";

const AirQuality = () => {
  return (
    <section className="air-section">
      <Card>
        <img
          className="image"
          src={
            "https://icon-library.com/images/gas-mask-icon/gas-mask-icon-10.jpg"
          }
          alt="img"
        />
        <div className="us-aqi">
          <h3>US AQI : 205</h3>
        </div>
        <ul className="air-list">
          <li className="air-list-li">
            <img
              alt="3"
              src={'./assets/green.png'
              }
            ></img>
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
