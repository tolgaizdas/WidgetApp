import React from "react";
import WidgetTemplate from "../WidgetTemplate";
import WeatherWidget from "./WeatherWidget";

export default function Weather() {
  return (
    <div className="widget">
      <WidgetTemplate
        widgetName={"Weather"}
        widgetDescription={"No need to look at the sky..."}
      />
      <WeatherWidget />
    </div>
  );
}
