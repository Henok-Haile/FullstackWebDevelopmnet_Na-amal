import React, { useState, useEffect } from "react";
import "./index.css";

function MyCounter() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning) {
      document.title = "Counting...";
      timer = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    } else {
      document.title = "Counting Stopped";
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  function startCount() {
    setIsRunning(true);
  }

  function stopCount() {
    setIsRunning(false);
  }

  return (
    <div className="counter-container">
      <h1 className="counter-display">Counter: {count}</h1>
      <div className="button-group">
        <button className="counter-button start-button" onClick={startCount}>
          Start
        </button>
        <button className="counter-button stop-button" onClick={stopCount}>
          Stop
        </button>
      </div>
    </div>
  );
}

export default MyCounter;
