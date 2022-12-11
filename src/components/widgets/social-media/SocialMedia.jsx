import React from "react";
import WidgetTemplate from "../WidgetTemplate";
import SocialMediaWidget from "./SocialMediaWidget";

export default function SocialMedia() {
  return (
    <div className="widget">
      <WidgetTemplate
        widgetName="Social Media"
        widgetDescription="Do not forget to be social!"
      />
      <SocialMediaWidget />
    </div>
  );
}
