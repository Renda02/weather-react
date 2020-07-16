import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";

import WeatherInfo from "./WeatherInfo";

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
    //console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
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
      <div>
        <form onClick={handleSubmit}>
          {" "}
          <InputBase placeholder="Enter City…" onChange={updateCity} />
          <Button variant="contained" color="primary">
            Search
          </Button>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading";
  }
};

export default Weather;
