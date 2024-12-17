import React, { useState, useEffect } from "react";
import { fetchMovies } from "./Api";
import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [movies, SetMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");

  const searchMovies = async (searchQuery) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchMovies(searchQuery);
      if (data.Response === "True") {
        SetMovies(data.Search);
      } else {
        SetMovies([]);
        setError(data.Error);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      searchMovies(query);
    }
  }, [query]);

  return (
    <div className="app-container">
      <h1>Movie Search App</h1>
      <SearchBar setQuery={setQuery} />
      {loading && <p className="text-center">loading...</p>}
      {error && <p className="text-danger text-center">{error}</p>}
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
