import React, { useState, useContext, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [favoritepark, setFavoritepark] = useState([]);

  // const [theme, setTheme] = useState("dark");

  const isfavorite = (id) => favoritepark.includes(id);

  const addFavorite = (id) => {
    if (!favoritepark.includes(id)) {
      setFavoritepark([...favoritepark, id]);
    }
  };

  // useEffect(() => {
  //   if (theme === "dark") {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [theme]);

  // const toggleTheme = () => {
  //   setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  // };  
  

  

  const removeFavorite = (id) => {
    setFavoritepark(favoritepark.filter((favId) => favId !== id));
  };

  const navigate = useNavigate();

  const value = {
    navigate,
    favoritepark,
    setFavoritepark,
    isfavorite,
    addFavorite,
    removeFavorite,
    // theme,
    // toggleTheme,
    // setTheme,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
