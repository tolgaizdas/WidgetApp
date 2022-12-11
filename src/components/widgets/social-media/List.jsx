import React from "react";
import Icon from "./Icon";

export default function List(props) {
  return (
    <li className="list-group-item">
      <div style={{ display: "inline-block", marginBottom: "0px" }}>
        <p style={{ textAlign: "left", margin: "0", fontWeight: 500 }}>
          {/* <Icon src={props.socialMedia.icon} /> */}
          <a
            className="link-dark"
            style={{ textDecoration: "none" }}
            href={props.socialMedia.link}
          >
            {props.socialMedia.name}
          </a>
        </p>
      </div>
      <div style={{ display: "inline-block" }}>
        <button
          style={{ borderRadius: "50px", fontSize: "15px", border: "0" }}
          className="btn btn-danger btn-md"
          onClick={props.deleteSocialMedia}
        >
          X
        </button>
      </div>
    </li>
  );
}
