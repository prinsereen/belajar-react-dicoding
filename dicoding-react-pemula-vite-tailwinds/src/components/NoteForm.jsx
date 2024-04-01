import { useState } from "react";

export const NoteForm = ({ notes, onAddNote }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [remainingChars, setRemainingChars] = useState(50);

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    const charsLeft = 50 - newTitle.length;
    setRemainingChars(charsLeft >= 0 ? charsLeft : 0);
  };

  const handleSubmit = () => {
    const maxId = Math.max(...notes.map(note => note.id));
    const newId = maxId + 1;

    const newNote = {
      id: newId,
      title: title,
      body: body,
      archived: false,
      createdAt: new Date().toISOString() 
    };

    onAddNote(newNote);

    setTitle("");
    setBody("");
    setRemainingChars(50);
  };

  return (
    <div className="border mt-8 flex flex-col items-center py-8">
      <h1 className="text-bold text-4xl w-1/2 text-slate-600">Buat Catatan</h1>
      <h3 className="w-1/2 text-right text-slate-600">Sisa Karakter: {remainingChars}</h3>
      <input
        className="border text-2xl w-1/2 py-2 px-4 rounded-lg mb-4"
        placeholder="Buat Judul..."
        value={title}
        onChange={handleTitleChange}
      />
      <textarea
        className="block border h-60 text-2xl w-1/2 py-2 px-4 rounded-lg mb-4"
        placeholder="Tuliskan Catatan"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      <button
        className="border w-1/2 py-4 text-slate-600 hover:bg-slate-100"
        onClick={handleSubmit}
      >
        Buat
      </button>
    </div>
  );
};
