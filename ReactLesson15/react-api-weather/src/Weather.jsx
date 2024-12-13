import React from "react";

function Weather({ weatherData }) {
  return (
    <div className="weather-container">
    <div className="weather-info">
        {/* Weather Info Section */}
        <div className="weather-main">
          <h1>{weatherData.name}</h1>
          <h2>{Math.round(weatherData.main.temp)}</h2>
        </div>
    
        {/* Weather Description */}
        <div className="weather-description">
          {weatherData.weather[0].description}
        </div>
    </div>

    {/* Weather Details Section */}
    <div className="weather-details">
      <div className="detail-item">
        <h5>{Math.round(weatherData.main.feels_like)}</h5>
        <p>Feels Like</p>
      </div>
      <div className="detail-item">
        <h5>{weatherData.main.humidity}</h5>
        <p>Humidity</p>
      </div>
      <div className="detail-item">
        <h5>{weatherData.wind.speed} KPH</h5>
        <p>Wind Speed</p>
      </div>
    </div>
  </div>
  );
}

export default Weather;