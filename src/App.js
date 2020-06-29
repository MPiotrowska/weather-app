import React from 'react';


import './App.css';


import Form from './Components/Form';

// https://api.openweathermap.org/data/2.5/weather?q={city}&appid=${process.env.REACT_APP_API_KEY}

//1. Get users input
// 2. set in state and interpolate the city in the URL
// 3. on submit fetch that url and set data to another state

function App() {
  const [city, setCity] = React.useState('');
  const [weatherResult, setWeatherResult] = React.useState([])
  
  const key = process.env.REACT_APP_API_KEY

  const handleSearch =(event) => {
      setCity(event.target.value)   
    };

    const handleSubmit = (event)=> {
      event.preventDefault()
      const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
      fetch(weatherURL)
          .then(response => response.json())
          .then(data => {
            console.log(data)
            setWeatherResult(data)
          });
          setCity('');
    } 



  return (
    <div className="App">
     <Form  handleSearch={handleSearch} handleSubmit={handleSubmit} city={city}/>
    </div>
  );
}

export default App;
