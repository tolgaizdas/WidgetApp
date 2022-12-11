import React from "react";
import Input from "../../Input";
import TextArea from "../../TextArea";

export default function NewNote(props) {
  return (
    <div className="form-group">
      <Input
        name="title"
        placeholder="Title"
        handleInput={(event) => {
          return props.handleInput(event);
        }}
        value={props.note.title}
      />
      <TextArea
        name="content"
        placeholder="Take a note..."
        handleInput={(event) => {
          return props.handleInput(event);
        }}
        value={props.note.content}
      />

      <button className="btn btn-warning btn-lg col-12" onClick={props.addNote}>
        +
      </button>
    </div>
  );
}
