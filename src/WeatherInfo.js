import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcons from "./WeatherIcons";
import WeatherTemperature from "./WeatherTemperature";

const WeatherInfo = (props) => {
  return (
    <div className="Weather">
      {" "}
      <div className="current">
        <h1 className="city"> {props.data.city}</h1>
        <span className="date">
          <FormatDate date={props.data.date} />
        </span>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <div className="float-left">
              <WeatherIcons code={props.data.icon} />
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
            <span className="minMax">
              {Math.round(props.data.minTemp)}°{""}|{""}
              {Math.round(props.data.maxTemp)}°
            </span>
            <br />
            <span className="description">{props.data.description}</span>
          </div>
        </div>
      </div>
      <div className="col-6">
        <ul>
          <li>
            Feels like:<span className="feels">{props.data.feelLike}°</span>
          </li>
          <li>
            Humidity: <span className="humidity">{props.data.humidity} </span>%
          </li>
          <li>
            Wind : <span className="wind">{props.data.wind}</span> km/h
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WeatherInfo;
