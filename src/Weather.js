import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

const Weather = (props) => {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  const handleSubmit = (event) => {
    event.preventDefault();
    search();
  };

  const updateCity = (event) => {
    event.preventDefault();
    setCity(event.target.value);
  };

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: Math.round(response.data.wind.speed),
      date: new Date(response.data.dt * 1000),
      maxTemp: Math.round(response.data.main.temp_max),
      minTemp: Math.round(response.data.main.temp_min),
      feelLike: Math.round(response.data.main.feels_like),
    });
  }

  function search() {
    const apiKey = "a5dc471873d618b50635e979e6f6c8fc";
    const units = "metric";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="wrapper">
        <div className="current-info">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="search-box">
              <input
                type="search"
                autoComplete="off"
                autoFocus="on"
                placeholder="Enter your location...."
                className="search-bar"
                onChange={updateCity}
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        </div>
        <WeatherForecast city={weatherData.city} />
      </div>
    );
  } else {
    search();
    return "Loading";
  }
};

export default Weather;
