import React from "react";

export default function WidgetTemplate(props) {
  return (
    <div className="widget-template">
      <h2>{props.widgetName}</h2>
      <p>{props.widgetDescription}</p>
    </div>
  );
}
