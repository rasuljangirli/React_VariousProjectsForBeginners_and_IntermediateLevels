import react from "react";
import "./App.css";
import useCounter from "./hooks/useCounter";

function App() {
  //TODO bu hesablamani uuseReducer ile yoxlayin :)
  const [count, increment, decrement, reset] = useCounter();
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
