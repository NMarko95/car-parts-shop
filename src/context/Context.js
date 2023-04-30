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
  const [cart, setCart] = useState(getFromLocalStorage("cart") || []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  useEffect(() => {
    if (cart) {
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      localStorage.removeItem("cart");
    }
  }, [cart]);

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
