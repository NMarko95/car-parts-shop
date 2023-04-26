import "./app.css";
import Register from "./pages/register/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
import Cart from "./pages/cart/Cart";
import Homepage from "./pages/homepage/Homepage";

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <AdminPanel />,
  },
  {
    path: "/parts",
    element: <PartsShow />,
  },
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/choose/:catid",
    element: <ChooseGroup />,
  },
  {
    path: "/products/:gid",
    element: <Products />,
  },
  {
    path: "/product/:pid",
    element: <SingleProduct />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

function App() {
  return (
    <AppProvider>
      <div className="app">
        <Navbar />
        <SelectNavbar />
        {/*<HelpHero />*/}
        <RouterProvider router={router} />
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
