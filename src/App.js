import "./app.css";
import Register from "./pages/register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Navbar from "./components/navbar/Navbar";
import SelectNavbar from "./components/selectNavbar/SelectNavbar";
import PartsShow from "./components/partsShow/PartsShow";
import HelpHero from "./components/helpHero/HelpHero";
import AdminPanel from "./pages/adminPanel/AdminPanel";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <SelectNavbar />
        <HelpHero />
        <PartsShow />
        <Routes>
          <Route element={<Register />} path="/register" />
          <Route element={<Login />} path="/login" />
          <Route element={<AdminPanel />} path="/admin" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
