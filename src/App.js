import "./app.css";
import Navbar from "./components/navbar/Navbar";
import SelectNavbar from "./components/selectNavbar/SelectNavbar";
import HelpHero from "./components/helpHero/HelpHero";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Navbar />
      <SelectNavbar />
      {/*<HelpHero />*/}
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
