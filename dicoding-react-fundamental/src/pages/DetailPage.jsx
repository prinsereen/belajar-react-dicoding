import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { getNote } from "../utils/local-data";
import { showFormattedDate } from "../utils";

export const DetailPage = () => {
    const { id } = useParams()
    const note = getNote(id)

    return (
    <>
        <Header/>
        <div className="mx-40 mt-20 text-slate-600">            
            <h1 className="text-4xl">{note.title}</h1>
            <h3>{showFormattedDate(note.createdAt)}</h3>
            <p className="text-2xl">{note.body}</p>
        </div>
    </>
    );
}