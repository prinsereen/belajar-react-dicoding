import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { LandingPage } from "./pages/LandingPage"
import { DetailPage } from './pages/DetailPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/detail/:id" element={<DetailPage/>}/>
      </Routes>
    </>
  );
}

export default App;