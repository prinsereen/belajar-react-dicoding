import { Routes, Route }from 'react-router-dom';
import { ThemeProvider } from './context/ThemeCotext';
import { LandingPage } from "./pages/LandingPage";
import { DetailPage } from './pages/DetailPage';
import { Login } from './pages/LoginPage';
import { Register } from './pages/RegisterPage';
import { ActivePage } from "./pages/ActivePage"

function App() {
  return (
    <ThemeProvider>
        <div>
          <Routes>
            <Route path="/home" element={<LandingPage/>}/>
            <Route path="/detail/:id" element={<DetailPage/>}/>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/active" element={<ActivePage/>}/>
          </Routes>
        </div>
    </ThemeProvider>
  );
}

export default App;
