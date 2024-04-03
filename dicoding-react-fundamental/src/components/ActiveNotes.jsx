import { showFormattedDate } from "../utils/index"
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export const ActiveNotes = ({ notes, onDeleteNote }) => {
  const handleDelete = (id) => {
    onDeleteNote(id);
  };

  return (
    <div className="flex flex-wrap mx-40 text-slate-600 justify-center">
      {notes.length ? (
        notes.map((note, index) => (
          <div key={index} className="border mt-4 flex flex-col py-2 w-1/4 px-2 mr-12">
            <Link to={`/detail/${note.id}`}><h1 className="text-2xl">{note.title}</h1></Link>
            <h3 className="">{showFormattedDate(note.createdAt)}</h3>
            <h2 className="my-2 text-xl">{note.body}</h2>
            <button className="border hover:bg-red-300 mt-auto" onClick={() => handleDelete(note.id)}>Delete</button>
          </div>
        ))
      ) : (
        <div className="text-center text-slate-600 mt-8">
          Tidak ada catatan
        </div>
      )}
    </div>
  );
};

ActiveNotes.propTypes = {
  notes: PropTypes.array.isRequired,
  onDeleteNote: PropTypes.func.isRequired
}
