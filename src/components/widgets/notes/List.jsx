import React from "react";

export default function List(props) {
  return (
    <li className="list-group-item">
      <h4 style={{ textAlign: "left" }} className="card-title">
        {props.note.title}
      </h4>
      <p style={{ textAlign: "left" }} className="card-text">
        {props.note.content}
      </p>
      <p style={{ textAlign: "right" }}>
        {props.note.date.dd}/{props.note.date.mm}/{props.note.date.yyyy}
      </p>
      <button
        style={{ display: "flex" }}
        className="btn btn-danger"
        onClick={props.deleteNote}
      >
        DELETE
      </button>
    </li>
  );
}
