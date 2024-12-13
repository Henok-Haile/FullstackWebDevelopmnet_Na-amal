import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";
import axios from "axios";
import "./App.css";
import { useState } from "react";

function App() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async (e) => {
    e.preventDefault();
    if (!location) return alert("Please enter a location!");

    const apiKey = "c6aa07340ab686de5d906628b8d4ccb7";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
    try {
      const response = await axios.get(apiUrl);
      setWeatherData(response.data);
    } catch (error) {
      alert("City not found!");
    }
  };

  return (
    <div className="app-container">
      <form className="location-input" onSubmit={fetchWeather}>
        <input
          type="text"
          className="form-control rounded-pill"
          placeholder="Enter Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </form>
      {weatherData && <Weather weatherData={weatherData} />}
    </div>
  );
}

export default App;
