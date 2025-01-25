import React, { createContext, useState } from "react";
import axios from "axios";

export const GlobalContex = createContext();
//!
export const GlobalContaxProvider = (props) => {
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [i, setI] = useState(0);

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

    if (i === languages.length - 1) {
      setI(0);
    }

    // console.log(newLanguageArr);
  };

  const restartPage = () => {
    // debugger;
    fetchDataLanguges();
    // console.log(languages);
  };

  const rightPlas = () => {
    if (i < languages.length - 1) {
      setI(i + 1);
    } else {
      setI(0);
    }
  };

  const leftPlas = () => {
    if (i > 0) {
      setI(i - 1);
    } else {
      setI(languages.length - 1);
    }
  };
  const randomLanguageShowPage = () => {
    const randomNumber = Number(Math.floor(Math.random() * languages.length));
    // console.log(randomNumber);
    setI(randomNumber);
  };

  return (
    <GlobalContex.Provider
      value={{
        fetchDataLanguges,
        languages,
        deleteItem,
        restartPage,
        loading,
        i,
        leftPlas,
        rightPlas,
        randomLanguageShowPage,
      }}
    >
      {props.children}
    </GlobalContex.Provider>
  );
};
