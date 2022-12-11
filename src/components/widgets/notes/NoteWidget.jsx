import React, { useState } from "react";
import NewNote from "./NewNote";
import NoteList from "./NoteList";

export default function NoteWidget() {
  const [notes, setNotes] = useState([
    {
      title: "Hi there!",
      content: "Press + to add new notes.",
      date: {
        dd: new Date().getDate(),
        mm: String(new Date().getMonth() + 1), //January is 0!
        yyyy: new Date().getFullYear(),
      },
    },
  ]);

  const [note, setNote] = useState({
    title: "",
    content: "",
    date: null,
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    const time = new Date();
    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
        date: {
          dd: String(time.getDate()),
          mm: String(time.getMonth() + 1), //January is 0!
          yyyy: String(time.getFullYear()),
        },
      };
    });
  };

  const addNote = () => {
    if (note.title.trim() !== "" && note.content.trim() !== "") {
      setNotes((prev) => {
        return [...prev, note];
      });
      setNote({ title: "", content: "", date: {} });
    }
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note, index) => {
      return index !== id;
    });
    setNotes(newNotes);
  };

  return (
    <div>
      <NewNote handleInput={handleInput} note={note} addNote={addNote} />
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
}
