import React from "react";
import Draggable from "react-draggable"; // The default

export default function Widget(props) {
  return (
    <Draggable>
      <div className="widget">
        <div className="widget-header">
          <h2>{props.widgetName}</h2>
          <p>{props.widgetDescription}</p>
        </div>
        <div>{props.widget}</div>
      </div>
    </Draggable>
  );
}
