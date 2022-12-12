import React from "react";
import Widget from "../Widget";
import WeatherWidget from "./WeatherWidget";

export default function Weather() {
  return (
    <Widget
      widgetName={"Weather"}
      widgetDescription={"No need to look at the sky..."}
      widget={<WeatherWidget />}
    />
  );
}
