import React from "react";
import Input from "../../Input";

export default function SearchWeather(props) {
  return (
    <div>
      <Input
        name="city"
        placeholder="City"
        handleInput={(event) => {
          return props.handleInput(event);
        }}
        value={props.city}
      />
      <button
        className="btn btn-primary btn-lg col-12"
        onClick={props.searchWeather}
      >
        +
      </button>
    </div>
  );
}
