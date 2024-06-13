import React, { useContext } from "react";
import Language from "./Language";
import { GlobalContex } from "../contax/GlobalContax";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
function Languages() {
  const { languages, i, leftPlas, rightPlas } = useContext(GlobalContex);

  // console.log(languages[i]);
  return (
    <div className="containerLanguage">
      <button className="btn" onClick={leftPlas}>
        <FaAngleDoubleLeft />
      </button>
      <Language language={languages[i]} />
      <button className="btn" onClick={rightPlas}>
        <FaAngleDoubleRight />
      </button>
    </div>
  );
}

export default Languages;
