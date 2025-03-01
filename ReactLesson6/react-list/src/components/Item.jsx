import React from "react";
import "../styles/Item.css"

const Item = ({ item, onRemove}) => {
    return (
        <li className="item">
            {item}
            <button onClick={onRemove} style={{ marginLeft: '10px' }}>
                Remove Item
            </button>
        </li>
    );
};

export default Item;