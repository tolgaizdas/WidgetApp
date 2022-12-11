export default async function getWeatherData(city) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
  )
    .then((res) => res.json())
    .then((json) => {
      // console.clear();
      return json;
    });
}

export async function getCityFromCoord(lat, lon) {
  return fetch(
    `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
  )
    .then((res) => res.json())
    .then((json) => {
      // console.clear();
      return json;
    });
}
