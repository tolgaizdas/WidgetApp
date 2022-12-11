import React from "react";

export default function TextArea(props) {
  return (
    <div>
      <textarea
        className="form-control"
        name={props.name}
        onChange={(event) => {
          return props.handleInput(event);
        }}
        value={props.value}
        placeholder={props.placeholder}
      ></textarea>
    </div>
  );
}
