import React from "react";
import Card from "../UI/Card";
import "./RecomendationList.css";
import RecomendationItem from "./RecomendationItem";

const RecomendationList = ({ aqiLevel }) => {
  return (
    <section className="section-recomendation">
      <Card>
        <RecomendationItem aqiLevel={aqiLevel} />
      </Card>
    </section>
  );
};

export default RecomendationList;
