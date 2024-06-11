import { useContext, useEffect } from "react";
import CreateTodo from "./Components/CreateTodo";
import ListsTodo from "./Components/ListsTodo";
import "./App.css";
import { GlobalContex } from "./contaxt/GlobalState";

function App() {
  const { getTasks } = useContext(GlobalContex);
  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="container">
      <CreateTodo />
      <h1>Tasks</h1>
      <ListsTodo />
    </div>
  );
}

export default App;
