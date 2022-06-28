import React from "react";
import "./Info.css";

const Info = () => {
  return (
    <div className="info">
      <div className="text">
        <h2>What is the U.S. Air Quality Index (AQI)?</h2>
        <p>The U.S. AQI is EPA’s index for reporting air quality. </p>
        <h2>How does the AQI work?</h2>
        <p>
          Think of the AQI as a yardstick that runs from 0 to 500. The higher
          the AQI value, the greater the level of air pollution and the greater
          the health concern. For example, an AQI value of 50 or below
          represents good air quality, while an AQI value over 300 represents
          hazardous air quality. For each pollutant an AQI value of 100
          generally corresponds to an ambient air concentration that equals the
          level of the short-term national ambient air quality standard for
          protection of public health. AQI values at or below 100 are generally
          thought of as satisfactory. When AQI values are above 100, air quality
          is unhealthy: at first for certain sensitive groups of people, then
          for everyone as AQI values get higher. The AQI is divided into six
          categories. Each category corresponds to a different level of health
          concern. Each category also has a specific color. The color makes it
          easy for people to quickly determine whether air quality is reaching
          unhealthy levels in their communities.
        </p>
        <h2>Five major pollutants</h2>
        <p>
          EPA establishes an AQI for five major air pollutants regulated by the
          Clean Air Act. Each of these pollutants has a national air quality
          standard set by EPA to protect public health:
        </p>
        <ul>
          <li>ground-level ozone particle pollution</li>
          <li> carbon</li>
          <li>monoxide</li>
          <li>sulfur</li>
          <li>dioxide</li>
          <li> nitrogen dioxide</li>
        </ul>
      </div>
    </div>
  );
};

export default Info;
