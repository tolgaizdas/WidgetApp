import React from "react";

export default function WeatherInformation(props) {
  return (
    <div>
      <h2>{props.city}</h2>
      <div>
        <p>
          Temperature: {Math.round(props.temp)}
          <span>&#176;C</span>
        </p>
        <p>
          Feels Like: {Math.round(props.feelsLike)}
          <span>&#176;C</span>
        </p>
      </div>
      <div>
        <p>Weather: {props.weather}</p>
        {/* <p>{props.weatherDescription}</p> */}
      </div>
    </div>
  );
}
