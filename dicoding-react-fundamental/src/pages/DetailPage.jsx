import { useParams } from "react-router-dom";
import { getNote } from "../utils/local-data";
import { showFormattedDate } from "../utils";
import { Header } from "../components/Header";

export const DetailPage = () => {
    const { id } = useParams()
    const note = getNote(id)

    return (
    <>
        <Header/>
        <div className="dark:bg-gray-800">
            <div className="mx-40 pt-20 dark:text-white text-slate-600 ">            
                <h1 className="text-4xl">{note.title}</h1>
                <h3>{showFormattedDate(note.createdAt)}</h3>
                <p className="text-2xl">{note.body}</p>
            </div>
        </div>
    </>
    );
}