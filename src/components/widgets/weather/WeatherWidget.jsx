import React, { useEffect, useState } from "react";
import SearchWeather from "./SearchWeather";
import getWeatherData from "../../../api/openWeather/openWeatherAPI";
import WeatherInformation from "./WeatherInformation";

export default function WeatherWidget() {
  let currentLocation = null;
  useEffect(() => {
    // only runs once
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          //   console.log(position);
          currentLocation = position;
        });
      }
    }

    getLocation();
  }, []); // empty dependencies array

  const [city, setCity] = useState(
    currentLocation !== null ? currentLocation : ""
  );

  const emptyData = {
    name: "",
    main: {
      temp: 0,
      feels_like: 0,
    },
    weather: [
      {
        main: "",
        description: "",
      },
    ],
  };

  const [data, setData] = useState(emptyData);

  const handleInput = (event) => {
    const query = event.target.value;
    setCity(query);
  };

  const searchWeather = async () => {
    const weatherData = await getWeatherData(city);
    // console.log(weatherData);
    setData(weatherData);
    console.clear();
  };

  return (
    <div>
      <SearchWeather
        city={city}
        handleInput={handleInput}
        searchWeather={searchWeather}
      />
      {data.cod !== "404" && data !== emptyData ? (
        <WeatherInformation
          city={data.name}
          temp={data.main.temp}
          feelsLike={data.main.feels_like}
          weather={data.weather[0].main}
          weatherDescription={data.weather[0].description}
        />
      ) : (
        <h4>No city found.</h4>
      )}
    </div>
  );
}
