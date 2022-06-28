import React from "react";
import Card from "../UI/Card";
import "./RecomendationList.css";
import RecomendationItem from "./RecomendationItem";

const RecomendationList = ({ aqiLevel ,airQuality}) => {
  return (
    <section className="section-recomendation">
      <Card>
        <RecomendationItem airQuality={airQuality} aqiLevel={aqiLevel} />
      </Card>
    </section>
  );
};

export default RecomendationList;
