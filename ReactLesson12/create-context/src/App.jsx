import React, { createContext } from "react";
import Child from './Child';
import './App.css';

export const AppContext = createContext();

function App() {
  const message = "Hello My Child";

  return (
    <AppContext.Provider value={message}>
      <div className="app-container">
        <h1 className="app-title">Parent</h1>
        <Child />
      </div>
    </AppContext.Provider>
  );
};

export default App;