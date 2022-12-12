import React from "react";
import Widget from "../Widget";
import SocialMediaWidget from "./SocialMediaWidget";

export default function SocialMedia() {
  return (
    <Widget
      widgetName="Social Media"
      widgetDescription="Do not forget to be social!"
      widget={<SocialMediaWidget />}
    />
  );
}
