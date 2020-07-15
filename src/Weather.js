import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
    });
  }
  if (weatherData.ready) {
    return (
      <div>
        <div>
          <h1 className={weatherData.city}></h1>
          <span className="last-updated">
            Last Updated: {weatherData.date}{" "}
          </span>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <img src="" alt="" className="icon" />
              <div>
                <span className="temperature">{weatherData.temperature}</span>
                <span className="degrees"></span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <h2 className="text-capitalize">{weatherData.description}</h2>
            <ul>
              <li>
                Humidity:{" "}
                <span className="humidity">{weatherData.humidity} </span>%
              </li>
              <li>
                Wind Speed: <span className="wind">{weatherData.wind}</span>{" "}
                km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "a5dc471873d618b50635e979e6f6c8fc";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${apiKey}&units=metrics`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading";
  }
}

export default Weather;
