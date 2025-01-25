import React from "react";
import "./App.css";
import useInput from "./hooks/useInput";

function App() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");

  const showAlert = (e) => {
    e.preventDefault();
    alert(`Hello : ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };
  return (
    <div>
      <form onSubmit={showAlert} action="">
        <input {...bindFirstName} />
        <input {...bindLastName} />
        <button>click me</button>
      </form>
    </div>
  );
}

export default App;
