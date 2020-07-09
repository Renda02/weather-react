import React from "react";
import "./Main.css";

function Main() {
  let weatherData = {
    city: "Livingstone",
    date: "17 June 2020, 23h00",
    description: "Sunny",
    imgUrl: "https://img.icons8.com/ios/50/000000/sun.png",
    forecast: "25",
    humidity: "55",
    humidityUrl: "https://img.icons8.com/metro/26/000000/wet.png",
    wind: "6",
    windUrl: "https://img.icons8.com/ios-glyphs/30/000000/wind.png",
    feelLike: "26",
  };
  return (
    <div className="Main">
      <div className="city">{weatherData.city}</div>
      <div>
        <small>{weatherData.date}</small>
      </div>
      <div className="temperature">
        <img src={weatherData.imgUrl} alt="" />
        <span id="tempToday">{weatherData.forecast}</span>
        <span className="unit">
          <a href="/"> °C </a>|<a href="/">°F</a>
        </span>
      </div>
      <div className="description">{weatherData.description}</div>
      <br />
      <div id="more-info" className="row">
        <div className="col">Feels Like: {weatherData.feelLike} °C</div>
        <div className="col">
          {" "}
          <img src={weatherData.humidityUrl} alt="" /> :{weatherData.humidity} %
        </div>

        <div className="col">
          <img src={weatherData.windUrl} alt="" /> : {weatherData.wind} Km/h
        </div>
      </div>
    </div>
  );
}

export default Main;
