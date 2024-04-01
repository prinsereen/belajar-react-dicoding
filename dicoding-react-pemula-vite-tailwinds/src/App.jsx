import React, { useState } from "react";
import { Header } from "./components/Header";
import { NoteForm } from "./components/NoteForm";
import { ActiveNotes } from "./components/ActiveNotes";
import { getInitialData } from "../utils";

const App = () => {
  const [notes, setNotes] = useState(getInitialData());

  const handleDeleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  const handleAddNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  return (
    <>
      <Header />
      <NoteForm notes={notes} onAddNote={handleAddNote} />
      <h1 className="text-4xl mx-40 my-4">Catatan Aktif</h1>
      <ActiveNotes notes={notes} onDeleteNote={handleDeleteNote} />
    </>
  );
};

export default App;
