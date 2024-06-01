import { useState, useContext } from "react";
import PropTypes from 'prop-types';
import { ThemeContext } from "../context/ThemeCotext";

export const NoteForm = ({ onAddNote }) => {
  const { theme } = useContext(ThemeContext);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [remainingChars, setRemainingChars] = useState(50);

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    const charsLeft = 50 - newTitle.length;
    if (charsLeft >= 0) {
      setTitle(newTitle);
      setRemainingChars(charsLeft);
    }
  };

  const handleSubmit = () => {
    const newNote = {
      title: title,
      body: body,
    };

    onAddNote(newNote);

    setTitle("");
    setBody("");
    setRemainingChars(50);
  };

  return (
    <div className={`flex flex-col items-center py-8 bg-${theme === 'light' ? 'white' : 'gray-800'} text-${theme === 'light' ? 'black' : 'white'} dark:bg-gray-800 dark:text-white`}>
      <h1 className="text-bold text-4xl w-1/2  dark:bg-gray-800 dark:text-white`}">Buat Catatan</h1>
      <h3 className="w-1/2 text-right text-slate-600 dark:text-white">Sisa Karakter: {remainingChars}</h3>
      <input
        className={`border text-2xl w-1/2 py-2 px-4 rounded-lg mb-4 ${theme === 'dark' ? 'bg-gray-900 text-white' : ''}`}
        placeholder="Buat Judul..."
        value={title}
        onChange={handleTitleChange}
      />
      <textarea
        className={`block border h-60 text-2xl w-1/2 py-2 px-4 rounded-lg mb-4 ${theme === 'dark' ? 'bg-gray-900 text-white' : ''}`}
        placeholder="Tuliskan Catatan"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      <button
        className={`border w-1/2 py-4 text-slate-600 hover:bg-slate-100 ${theme === 'dark' ? 'hover:bg-gray-700 text-white' : ''}`}
        onClick={handleSubmit}
      >
        Buat
      </button>
    </div>
  );
};

NoteForm.propTypes = {
  onAddNote: PropTypes.func.isRequired
};
