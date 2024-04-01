import { showFormattedDate } from "../../utils";

export const ActiveNotes = ({ notes }) => {
    return (
      <div className="flex flex-wrap mx-40 text-slate-600 justify-center">
        {notes.map((note, index) => (
          <div key={index} className="border mt-4 flex flex-col py-2 w-1/4 px-2 mr-12">
            <h1 className="text-2xl">{note.title}</h1>
            <h3 className="">{showFormattedDate(note.createdAt)}</h3>
            <h2 className="my-2 text-xl">{note.body}</h2>
            <button className="border hover:bg-red-300 mt-auto">Delete</button>
          </div>
        ))}
      </div>
    );
  };
  