import React, { useEffect, useState } from "react";
import SearchWeather from "./SearchWeather";
import getWeatherData, {
  getCityFromCoord,
} from "../../../api/open-weather/openWeatherAPI";
import WeatherInformation from "./WeatherInformation";

export default function WeatherWidget() {
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

  const [city, setCity] = useState("");

  useEffect(() => {
    let currentLocation = null;
    let currentCity = null;
    let currentData = null;
    // only runs once
    function getCurrentLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          // console.log(position);
          currentLocation = position;
          if (currentLocation !== null) {
            currentCity = await getCityFromCoord(
              currentLocation.coords.latitude,
              currentLocation.coords.longitude
            );
            // console.log(currentCity);
            currentData = await getWeatherData(currentCity[0].name);
            // console.log(currentData);
          }
          setData(currentData !== null ? currentData : emptyData);
        });
      }
    }
    getCurrentLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // empty dependencies array

  const handleInput = (event) => {
    const query = event.target.value;
    setCity(query);
  };

  const searchWeather = async () => {
    if (city.trim() !== "") {
      const weatherData = await getWeatherData(city);
      // console.log(weatherData);
      setData(weatherData);
      setCity("");
      console.clear();
    }
  };

  return (
    <div>
      <SearchWeather
        city={city}
        handleInput={handleInput}
        searchWeather={searchWeather}
      />
      {data.cod !== "404" && data !== emptyData && data.name !== "" ? (
        <WeatherInformation
          city={data.name}
          temp={data.main.temp}
          feelsLike={data.main.feels_like}
          weather={data.weather[0].main}
          weatherDescription={data.weather[0].description}
          weatherIcon={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        />
      ) : (
        <h4>No city found.</h4>
      )}
    </div>
  );
}
