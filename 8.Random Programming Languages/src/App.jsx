import { useState, useContext } from "react";
import "./App.css";
import { GlobalContex } from "./contax/GlobalContax";
import { useEffect } from "react";
import Languages from "./components/Languages";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";

function App() {
  //!HomeWorkunuz)) : Language page-de random buttona click edildiyi zaman ekranda olan languageni deilde ondan ferqli olani versin EX Java ekrandadi hal hazirda randoma vurduqda random i eger Java index ile beraberdirse onda ekran deyismiyecek mecburuq ki biz yeniden randoma click edek bunu hell etmeyiniz lazim
  const {
    fetchDataLanguges,
    languages,
    restartPage,
    loading,
    randomLanguageShowPage,
  } = useContext(GlobalContex);

  useEffect(() => {
    fetchDataLanguges();
  }, []);

  return (
    <div>
      {loading ? (
        <Stack
          className="loading"
          sx={{
            width: "100%",
            color: "grey.999",
          }}
          spacing={4}
        >
          <LinearProgress color="secondary" />
          <LinearProgress color="success" />
          <LinearProgress color="inherit" />
          <LinearProgress color="secondary" />
          <LinearProgress color="success" />
          <LinearProgress color="inherit" />
          <LinearProgress color="secondary" />
          <LinearProgress color="success" />
          <LinearProgress color="inherit" />
          <LinearProgress color="secondary" />
          <LinearProgress color="success" />
          <LinearProgress color="inherit" />
          <LinearProgress color="secondary" />
          <LinearProgress color="success" />
          <LinearProgress color="inherit" />
          <LinearProgress color="secondary" />
          <LinearProgress color="success" />
          <LinearProgress color="inherit" />
        </Stack>
      ) : (
        <div>
          {languages.length === 0 ? (
            <div style={{ textAlign: "center", marginTop: "30px" }}>
              <h1>All Data Deleted</h1>
              <button className="btnRestartANDbtnRandom" onClick={restartPage}>
                Restart
              </button>
            </div>
          ) : (
            <div>
              <div style={{ textAlign: "center", marginTop: "30px" }}>
                <h1>LANGUAGES</h1>
                <button
                  className="btnRestartANDbtnRandom"
                  onClick={randomLanguageShowPage}
                >
                  Random
                </button>
              </div>
              <Languages />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
