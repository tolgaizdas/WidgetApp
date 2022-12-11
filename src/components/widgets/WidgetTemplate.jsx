import React from "react";

export default function WidgetTemplate(props) {
  return (
    <div className="widget-template">
      <h1>{props.widgetName}</h1>
      <p>{props.widgetDescription}</p>
    </div>
  );
}
