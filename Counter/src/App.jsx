import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    //counter = counter + 1
    setCounter((prevCounter) => prevCounter + 1);
  };

  const removeValue = () => {
    setCounter((prevCounter) => Math.max(prevCounter - 1, 0));
  };

  return (
    <>
      <h1>COUNTER</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={removeValue} disabled={counter === 0}>
        remove value
      </button>
    </>
  );
}

export default App;
