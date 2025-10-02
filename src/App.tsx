import { useState } from "react";
import arcbookLogo from "/arcbooks-logo.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="#" target="_blank">
          <img src={arcbookLogo} className="logo" alt="Arcbooks logo" />
        </a>
      </div>
      <h1>No. 1 E-Commerce Platform</h1>
      <h2>Best Selling Books</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
