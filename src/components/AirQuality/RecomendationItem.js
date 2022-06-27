import React from "react";
import "./RecomendationItem.css";
import greenBike from "../assets/greenbike.png";
import greenWindow from "..//assets/greenwindow.png";
import greenMask from "..//assets/greenmask.png";
import orangeBike from "..//assets/orangebike.png";
import orangeWindow from "..//assets/orangewindow.png";
import orangeMask from "..//assets/orangemask.png";
import redBike from "..//assets/redmask.png";
import redWindow from "..//assets/redwindow.png";
import redMask from "..//assets/redmask.png";

const RecomendationItem = ({ aqiLevel }) => {
  let recoText = "";
  let recoImg = "";

  if (aqiLevel < 50) {
    recoText = ["Enjoy outdoor acitvities", "Open windows", "Mask not needed"];
    recoImg = [greenBike, greenWindow, greenMask];
  }

  if (aqiLevel > 50 && aqiLevel < 100) {
    recoText = [
      "Minimalize outdoor activities",
      "Avoid wide opening windows",
      "Consider wearing mask outdoor",
    ];
    recoImg = [orangeBike, orangeWindow, orangeMask];
  }

  if (aqiLevel > 100) {
    recoText = [
      "Avoid any outdoor activities",
      "Dont open windows",
      "Wear mask when outside",
    ];
    recoImg = [redBike, redWindow, redMask];
  }

  console.log(aqiLevel);

  return (
    <div className="grid-list">
      <div className="grid-item">
        <img alt="grid1" src={recoImg[0]} />
        <p>{recoText[0]}</p>
      </div>
      <div className="grid-item">
        <img alt="grid2" src={recoImg[1]} />
        <p>{recoText[1]}</p>
      </div>
      <div className="grid-item">
        <img alt="grid3" src={recoImg[2]} />
        <p>{recoText[2]}</p>
      </div>
    </div>
  );
};

export default RecomendationItem;
