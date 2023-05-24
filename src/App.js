import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <div>
        <h1>Counter</h1>
        <h2>Count: {count}</h2>

        <div className="buttons-container">
          <button className="btn" onClick={() => setCount(count + 1)}>
            Increase +
          </button>
          <button className="btn" onClick={() => setCount(count - 1)}>
            Decrease -
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
