import { showFormattedDate } from "../utils/index";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeCotext";

export const NotesList = ({ note, onDeleteNote }) => {
  const { theme } = useContext(ThemeContext); 

  const [notes, setNotes] = useState([]);
  const [filteredNote, setFilteredNote] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setNotes(note);
    setFilteredNote(note);
  }, [note]);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query === '') {
      setFilteredNote(notes);
    } else {
      const filteredNotes = notes.filter((note) =>
        note.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredNote(filteredNotes);
    }
  };

  const handleDelete = (id) => {
    onDeleteNote(id);
  };
  console.log(notes)

  return (
    <>
      <div className="mx-72">      
        <div className="">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Cari Catatan"
            className={`w-full p-2 border border-${theme === 'light' ? 'gray-300' : 'gray-700'} rounded-md text-gray-700 dark:text-white ${theme === 'light' ? '' : 'dark:bg-gray-900'}`}
          />
        </div>
        <div className="flex flex-wrap text-slate-600 dark:text-white justify-center">
          {filteredNote && filteredNote.length ? (
            filteredNote.map((n) => (
              <div key={n.id} className="border mt-4 flex flex-col py-2 w-1/4 px-2 mr-12 dark:bg-gray-800">
                <Link to={`/detail/${n.id}`}><h1 className="text-2xl">{n.title}</h1></Link>
                <h3>{showFormattedDate(n.createdAt)}</h3>
                <h2 className="my-2 text-xl">{n.body}</h2>
                <button className={`border hover:bg-red-300 mt-auto ${theme === 'light' ? '' : 'dark:bg-gray-700 dark:text-white'}`} onClick={() => handleDelete(n.id)}>Delete</button>
              </div>
            ))
          ) : (
            <div className="text-center text-slate-600 mt-8">
              Tidak ada catatan
            </div>
          )}
        </div>
      </div>
    </>
  );
};

NotesList.propTypes = {
  note: PropTypes.array.isRequired,
  onDeleteNote: PropTypes.func.isRequired
};
