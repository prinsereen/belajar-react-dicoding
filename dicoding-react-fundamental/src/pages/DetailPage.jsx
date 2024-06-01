import { useParams } from "react-router-dom";
import { showFormattedDate } from "../utils";
import { Header } from "../components/Header";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeCotext";

export const DetailPage = () => {
    const [note, setNote] = useState({});
    const { id } = useParams();
    const accessToken = localStorage.getItem('accessToken');
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://notes-api.dicoding.dev/v1/notes/${id}`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                });
                if (response.status === 200){
                    setNote(response.data.data);
                }
            } catch (error) {
                window.alert(error);
            }
        };
        fetchData();
    }, [id, accessToken]);

    return (
    <>
        <Header/>
        <div className={`min-h-screen ${theme === 'dark' ? 'dark:bg-gray-800 dark:text-white' : 'bg-white text-black'}`}>
            <div className="mx-40 pt-20">
                <h1 className="text-4xl">{note.title}</h1>
                <h3>{showFormattedDate(note.createdAt)}</h3>
                <p className="text-2xl">{note.body}</p>
            </div>
        </div>
    </>
    );
};
