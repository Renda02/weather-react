import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcons from "./WeatherIcons";
import WeatherTemperature from "./WeatherTemperature";

const WeatherInfo = (props) => {
  return (
    <div>
      {" "}
      <div>
        <h1 className="city"> {props.data.city}</h1>
        <span className="updated">
          {" "}
          <small> Last Updated:</small>
          <FormatDate date={props.data.date} />
        </span>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <div className="float-left">
              <WeatherIcons code={props.data.icon} />
            </div>
            <div className="float-left">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
            <span className="text-capitalize">{props.data.description}</span>
          </div>
        </div>
      </div>
      <div className="col-6">
        <ul>
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
