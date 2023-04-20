import "./app.css";
import Register from "./pages/register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Navbar from "./components/navbar/Navbar";
import SelectNavbar from "./components/selectNavbar/SelectNavbar";
import PartsShow from "./components/partsShow/PartsShow";
import HelpHero from "./components/helpHero/HelpHero";
import AdminPanel from "./pages/adminPanel/AdminPanel";
import ChooseGroup from "./pages/chooseGroup/ChooseGroup";
import Footer from "./components/footer/Footer";
import Products from "./pages/products/Products";
import SingleProduct from "./pages/singleProduct/SingleProduct";
import { AppProvider } from "./context/Context";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <SelectNavbar />
          <HelpHero />
          <Routes>
            <Route element={<Register />} path={`/register`} />
            <Route element={<Login />} path="/login" />
            <Route element={<AdminPanel />} path="/admin" />
            <Route element={<PartsShow />} path="/parts" />
            <Route element={<ChooseGroup />} path="/choose" />
            <Route element={<Products />} path="/products" />
            <Route element={<SingleProduct />} path="/product" />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
