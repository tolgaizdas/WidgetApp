import React from "react";

export default function Input(props) {
  return (
    <div>
      <input
        className="form-control"
        name={props.name}
        onChange={(event) => {
          return props.handleInput(event);
        }}
        value={props.value}
        placeholder={props.placeholder}
      ></input>
    </div>
  );
}
