import React from "react";
import List from "./List";

export default function SocialMediaList(props) {
  return (
    <div>
      <ul className="list-group">
        {props.socialMedias.map((socialMedia, index) => {
          return (
            <List
              key={index}
              socialMedia={socialMedia}
              deleteSocialMedia={() => {
                return props.deleteSocialMedia(index);
              }}
            />
          );
        })}
      </ul>
    </div>
  );
}
