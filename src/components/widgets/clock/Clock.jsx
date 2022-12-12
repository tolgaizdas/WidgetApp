import React from "react";
import Widget from "../Widget";
import ClockWidget from "./ClockWidget";

export default function Clock() {
  return (
    <Widget
      widgetName={"Clock"}
      widgetDescription={"Time is money!"}
      widget={<ClockWidget />}
    />
  );
}
