import React from "react";
import Input from "../../Input";

export default function NewSocialMedia(props) {
  return (
    <div className="form-group">
      <Input
        name="name"
        placeholder="Name"
        handleInput={(event) => {
          return props.handleInput(event);
        }}
        value={props.socialMedia.name}
      />
      <Input
        name="link"
        placeholder="Link of your social media"
        handleInput={(event) => {
          return props.handleInput(event);
        }}
        value={props.socialMedia.link}
      />

      <button
        className="btn btn-warning btn-lg col-12"
        onClick={props.addSocialMedia}
      >
        +
      </button>
    </div>
  );
}
