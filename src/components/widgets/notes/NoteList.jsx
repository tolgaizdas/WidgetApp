import React from "react";
import List from "./List";

export default function NoteList(props) {
  return (
    <div>
      <ul className="list-group">
        {props.notes.map((note, index) => {
          return (
            <List
              key={index}
              note={note}
              deleteNote={() => {
                return props.deleteNote(index);
              }}
            />
          );
        })}
      </ul>
    </div>
  );
}
