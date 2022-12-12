import React from "react";
import Draggable from "react-draggable"; // The default
import DragHandleIcon from "@mui/icons-material/DragHandle";

export default function Widget(props) {
  return (
    <Draggable handle="strong">
      <div className="widget">
        <div className="widget-header">
          <strong style={{ alignItems: "right" }}>
            <DragHandleIcon fontSize="large" />
          </strong>
          <h2>{props.widgetName}</h2>
          <p>{props.widgetDescription}</p>
        </div>
        <div>{props.widget}</div>
      </div>
    </Draggable>
  );
}
