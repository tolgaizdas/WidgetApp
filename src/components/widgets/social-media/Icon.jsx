import React from "react";

export default function Icon(props) {
  return (
    props.src.indexOf("https") !== -1 && <img alt="icon" src={props.src}></img>
  );
}
