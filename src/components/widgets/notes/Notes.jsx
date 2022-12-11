import React from "react";
import WidgetTemplate from "../WidgetTemplate";
import NoteWidget from "./NoteWidget";

export default function Notes() {
  return (
    <div className="widget">
      <WidgetTemplate
        widgetName={"Notes"}
        widgetDescription={"Enjoy taking notes!"}
      />
      <NoteWidget />
    </div>
  );
}
