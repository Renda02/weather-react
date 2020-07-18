import React from "react";
import WeatherIcons from "./WeatherIcons";

const ForecastPreview = (props) => {
  function hours() {
    let date = new Date(props.data.dt * 100);
    let hours = date.getHours();
    if (hours < 10) return `0${hours}:00`;
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp);
    return `${temperature}°C`;
  }

  return (
    <div className=" WeatherForecast col">
      {hours()}
      <br />
      <WeatherIcons code={props.data.weather[0].icon} />
      <br />
      {temperature()}
    </div>
  );
};

export default ForecastPreview;
