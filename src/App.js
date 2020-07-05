import React from "react";
import "./App.css";
import Form from "./Components/Form";
import Hero from "./Components/Hero";
import WeatherContainer from "./Components/WeatherContainer";
import { getTodaysDate } from "./helpers/getTodaysDate";

const APIKEY = process.env.REACT_APP_API_KEY;
const BarcelonaWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=Barcelona&appid=${APIKEY}`;

function App() {
  const [city, setCity] = React.useState("");
  const [weatherResult, setWeatherResult] = React.useState([]);
  const todaysDate = getTodaysDate();

  // Get BCN weather on load
  React.useEffect(() => {
    fetch(BarcelonaWeatherUrl)
      .then((response) => response.json())
      .then((results) => {
        setWeatherResult(results);
      });
  }, []);

  const handleSearch = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`;
    fetch(weatherURL)
      .then((response) => response.json())
      .then((results) => {
        console.log(results);
        setWeatherResult(results);
      });

    setCity("");
  };

  return (
    <div className="App">
      <Form
        handleSubmition={handleSubmit}
        handleSearches={handleSearch}
        city={city}
      />
      <Hero city={weatherResult.name} date={todaysDate} />
      <WeatherContainer weatherInfo={weatherResult} />
    </div>
  );
}

export default App;
