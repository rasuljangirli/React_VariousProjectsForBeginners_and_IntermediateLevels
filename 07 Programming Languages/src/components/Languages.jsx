import React, { useContext } from "react";
import Language from "./Language";
import { GlobalContex } from "../contax/GlobalContax";

function Languages() {
  const { languages } = useContext(GlobalContex);

  return (
    <div className="containerLanguage">
      {languages &&
        languages.map((language) => (
          <Language key={language.id} language={language} />
        ))}
    </div>
  );
}

export default Languages;
