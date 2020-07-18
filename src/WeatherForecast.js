import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import ForecastPreview from "./ForecastPreview";

const WeatherForecast = (props) => {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState("");

  function handleForecast(response) {
    //console.log(response.data);
    setForecast(response.data);
    setLoaded(true);
  }

  function forecastSearch() {
    const apiKey = "a5dc471873d618b50635e979e6f6c8fc";
    const urlKey = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(urlKey).then(handleForecast);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="Forest">
        <div className="row">
          <h4>
            {" "}
            <u>Hourly Forecast</u>
          </h4>
        </div>

        <div className="WeatherForecast col-2">
          <ForecastPreview data={forecast.list[0]} />
          <ForecastPreview data={forecast.list[1]} />
          <ForecastPreview data={forecast.list[2]} />
          <ForecastPreview data={forecast.list[3]} />
          <ForecastPreview data={forecast.list[4]} />
          <ForecastPreview data={forecast.list[5]} />
        </div>
      </div>
    );
  } else {
    forecastSearch();
    return null;
  }
};

export default WeatherForecast;
