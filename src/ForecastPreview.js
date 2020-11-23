import React from "react";
import WeatherIcons from "./WeatherIcons";

const ForecastPreview = (props) => {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp);
    return `${temperature}°C`;
  }

   function description() {
     let description = props.data.weather[0].description;
     return `${description}`;
   }

  return (
   
    <div className="ForecastPreview">
      <div className="col-">
        <h3>{hours()}</h3>
        <WeatherIcons code={props.data.weather[0].icon} />
        <h3>{description()}</h3>
        <h3>{temperature()}</h3>
      </div>
    </div>
  );
};

export default ForecastPreview;
