import { useEffect, useState } from "react";
import { NotesList } from "../components/NoteLists";
import { Header } from "../components/Header";
import axios from "axios";

export const ActivePage = () => {
  const accessToken = localStorage.getItem('accessToken')
  console.log(accessToken)
  const [dataNote, setDataNote] = useState([]);

  useEffect(()=>{
    const fetchData = async() =>{
      try {        
        const response = await axios.get('https://notes-api.dicoding.dev/v1/notes',{
          headers:{
            Authorization: `Bearer ${accessToken}`
          }
        })
        if (response.data.status == 'success'){
          setDataNote(response.data.data)
          console.log(setDataNote)
        }
      } catch (error) {
        window.alert(error)
      }
    }
    fetchData()
  }, [accessToken])

  const handleDeleteNote = async(id) => {
    const confirmDelete = window.confirm('Apakah Anda yakin ingin menghapus Notes ini?');
    if (confirmDelete) {
      try {
        await axios.delete(`https://notes-api.dicoding.dev/v1/notes/${id}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });
        setDataNote(dataNote.filter((note) => note.id !== id));
      } catch (error) {
        window.alert(error)
      }
    }
  };

  console.log(dataNote)

  return (
    <>
    <Header/>
    <div className="dark:bg-gray-800">
      <h1 className="text-4xl mx-40 py-4 dark:bg-gray-800 dark:text-white text-slate-600">Catatan Aktif</h1>
      <NotesList note={dataNote} onDeleteNote={handleDeleteNote} />
    </div>
    </>
  );
};
