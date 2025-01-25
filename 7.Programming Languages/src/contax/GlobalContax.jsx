import React, { createContext, useState } from "react";
import axios from "axios";

export const GlobalContex = createContext();

export const GlobalContaxProvider = (props) => {
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchDataLanguges = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/languages");
      setLanguages(response.data);
      setLoading(false);
    } catch (error) {
      console.log("error mesajjjjjjjjj : ) " + error);
    }
  };

  const deleteItem = (id) => {
    const newLanguageArr = languages.filter((language) => language.id !== id);
    setLanguages(newLanguageArr);
    // console.log("deleted item :" + id);
  };

  const restartPage = () => {
    fetchDataLanguges();
  };

  return (
    <GlobalContex.Provider
      value={{ fetchDataLanguges, languages, deleteItem, restartPage, loading }}
    >
      {props.children}
    </GlobalContex.Provider>
  );
};
