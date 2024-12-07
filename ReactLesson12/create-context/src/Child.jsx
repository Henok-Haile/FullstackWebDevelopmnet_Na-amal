import React, { useContext } from "react";
import { AppContext } from "./App";
import './index.css';

function Child() {
    const contextValue = useContext(AppContext);

    return (
        <div className="child-container">
            <h2 className="child-title">Child</h2>
            <p className="child-message">{contextValue}</p>
        </div>
    );
};

export default Child;