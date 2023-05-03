import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const getFromLocalStorage = (text) => {
  let item = localStorage.getItem(text);
  if (item) {
    return (item = JSON.parse(localStorage.getItem(text)));
  } else return null;
};

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(getFromLocalStorage("user"));
  const [cart, setCart] = useState([]);

  const baseURL = "https://localhost:7236";

  useEffect(() => {
    const getCart = async () => {
      const { data } = await axios.get(
        `${baseURL}/Cart/GetProductsFromCart/${user.id}`
      );
      setCart(data);
    };
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      getCart();
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  return (
    <AppContext.Provider value={{ user, setUser, cart, setCart }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
