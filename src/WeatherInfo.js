import React from "react";
import FormatDate from "./FormatDate";

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
            <img src="" alt="" className="icon" />
            <div>
              <span className="temperature">{props.data.temperature} °</span>
              <span className="degrees"></span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <h2 className="text-capitalize">{props.data.description}</h2>
          <ul>
            <li>
              Humidity: <span className="humidity">{props.data.humidity} </span>
              %
            </li>
            <li>
              Wind Speed: <span className="wind">{props.data.wind}</span> km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
