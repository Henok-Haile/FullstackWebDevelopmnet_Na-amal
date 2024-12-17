import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="card">
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/300x450"
        }
        alt={movie.Title}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{movie.Title}</h5>
        <p className="card-text"><strong>Year:</strong> {movie.Year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
