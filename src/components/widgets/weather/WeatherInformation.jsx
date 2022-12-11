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
        <p>
          Weather: {props.weather}{" "}
          <img
            style={{
              border: "1px solid black",
              borderRadius: "50px",
              backgroundColor: "#c4c4c4",
              width: "60px",
              margin: "5px",
            }}
            alt="weather-icon"
            src={props.weatherIcon}
          ></img>
        </p>

        {/* <p>{props.weatherDescription}</p> */}
      </div>
    </div>
  );
}
