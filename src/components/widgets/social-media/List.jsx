import React from "react";
import Icon from "./Icon";

export default function List(props) {
  return (
    <li className="list-group-item">
      <div style={{ display: "inline-block", marginBottom: "0px" }}>
        <Icon src={props.socialMedia.icon} />
        <p
          style={{
            display: "inline-block",
            textAlign: "left",
            margin: "0",
            fontWeight: 500,
          }}
        >
          <a
            className="link-dark"
            style={{ textDecoration: "none", marginLeft: "8px" }}
            href={props.socialMedia.link}
          >
            {props.socialMedia.name}
          </a>
        </p>
      </div>
      <div style={{ display: "inline-block" }}>
        <button
          style={{
            borderRadius: "50px",
            fontSize: "11px",
            border: "0",
            padding: "4p 9px",
          }}
          className="btn btn-danger btn-md"
          onClick={props.deleteSocialMedia}
        >
          X
        </button>
      </div>
    </li>
  );
}
