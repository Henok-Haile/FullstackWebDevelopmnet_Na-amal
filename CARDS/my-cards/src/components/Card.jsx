import React from "react";
import "../card.css";

function Card(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.title} className="card-image" />

      <div>
        <h2 className="card-title">{props.title}</h2>
        <p className="card-description">{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
