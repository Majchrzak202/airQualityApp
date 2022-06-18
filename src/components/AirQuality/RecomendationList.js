import Card from "../UI/Card";
import "./RecomendationList.css";
import RecomendationItem from "./RecomendationItem";

const RecomendationList = () => {
  return (
    <section className="section-recomendation">
      <Card>
        <RecomendationItem />
      </Card>
    </section>
  );
};

export default RecomendationList;
