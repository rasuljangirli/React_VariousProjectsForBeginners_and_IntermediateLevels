import React, { useContext } from "react";
import { GlobalContex } from "../contax/GlobalContax";

function Language({ language }) {
  const { id, languageName, description } = language;
  const { deleteItem } = useContext(GlobalContex);

  const deleteItemID = () => {
    deleteItem(id);
    // console.log("gonderildi : " + id);
  };

  return (
    <div className="languageItem">
      <div>{languageName}</div>
      <div>{description}</div>
      <button className="btn" onClick={deleteItemID}>
        Delete
      </button>
    </div>
  );
}

export default Language;
