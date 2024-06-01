import { NoteForm } from "../components/NoteForm";
import { Header } from "../components/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const accessToken = localStorage.getItem('accessToken')
  console.log(accessToken)
  const navigate = useNavigate()

  const handleAddNote = async(newNote) => {
    try {
      await axios.post('https://notes-api.dicoding.dev/v1/notes', newNote, {
        headers:{
          Authorization: `Bearer ${accessToken}`
        }
      });
      navigate('/active')
    } 
      catch (error) {
      window.alert(error)
    }
  };

  return (
    <>
    <Header/>
    <div className="dark:bg-gray-800">
      <NoteForm  onAddNote={handleAddNote} />
    </div>
    </>
  );
};
