import React from "react";

import "./App.css";
import Form from "./Components/Form";
import Hero from "./Components/Hero";
import WeatherContainer from "./Components/WeatherContainer";

//https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&
//exclude={part}&appid={YOUR API KEY}

//1. Get users input
// 2. set in state and interpolate the city in the URL
// 3. on submit fetch that url and set data to another state
//const key = process.env.

function App() {
  const [city, setCity] = React.useState("");
  const [weatherResult, setWeatherResult] = React.useState([]);

  const APIKEY = process.env.REACT_APP_API_KEY;

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
      <Hero />
      <WeatherContainer weatherInfo={weatherResult} />
    </div>
  );
}

export default App;
