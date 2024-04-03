import { useState } from "react";
import { Header } from "../components/Header";
import { NoteForm } from "../components/NoteForm";
import { ActiveNotes } from "../components/ActiveNotes";
import { getAllNotes, addNote, deleteNote } from "../utils/local-data";

export const LandingPage = () => {
  const [notes, setNotes] = useState(getAllNotes());

  const handleDeleteNote = (id) => {
    deleteNote(id); 
    setNotes(getAllNotes()); 
  };

  const handleAddNote = (newNote) => {
    addNote(newNote); 
    setNotes(getAllNotes()); 
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
