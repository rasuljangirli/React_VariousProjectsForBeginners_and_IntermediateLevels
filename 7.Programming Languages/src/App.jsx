import { useState, useContext } from "react";
import "./App.css";
import { GlobalContex } from "./contax/GlobalContax";
import { useEffect } from "react";
import Languages from "./components/Languages";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";

function App() {
  const { fetchDataLanguges, languages, restartPage, loading } =
    useContext(GlobalContex);

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
            <div style={{ textAlign: "center" }}>
              <h2>All data deleted</h2>
              <button className="btn" onClick={restartPage}>
                Restart
              </button>
            </div>
          ) : (
            <div>
              <div style={{ textAlign: "center" }}>
                <h1>LANGUAGES</h1>
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
