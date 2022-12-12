import React from "react";
import Widget from "../Widget";
import NoteWidget from "./NoteWidget";

export default function Notes() {
  return (
    <Widget
      widgetName={"Notes"}
      widgetDescription={"Enjoy taking notes!"}
      widget={<NoteWidget />}
    />
  );
}
