import "./app.css";
import Register from "./pages/register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Navbar from "./components/navbar/Navbar";
import SelectNavbar from "./components/selectNavbar/SelectNavbar";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <SelectNavbar />
        <Routes>
          <Route element={<Register />} path="/register" />
          <Route element={<Login />} path="/login" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
