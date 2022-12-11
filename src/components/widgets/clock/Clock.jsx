import React from "react";
import WidgetTemplate from "../WidgetTemplate";
import ClockWidget from "./ClockWidget";

export default function Clock() {
  return (
    <div className="widget">
      <WidgetTemplate
        widgetName={"Clock"}
        widgetDescription={"Time is money!"}
      />
      <ClockWidget />
    </div>
  );
}
