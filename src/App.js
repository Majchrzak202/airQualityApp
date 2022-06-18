import SearchBar from "./components/Search /SearchBar";
import AirQuality from "./components/AirQuality/AirQuality";
import RecomendationList from "./components/AirQuality/RecomendationList";
import Footer from "./components/UI/Footer";
import Navbar from "./components/UI/Navbar";

function App() {
  return (
    <div>
      <Navbar/> 
      <SearchBar/>
      <AirQuality/>
      <RecomendationList/>
      <Footer/>
    </div>
  );
}

export default App;
