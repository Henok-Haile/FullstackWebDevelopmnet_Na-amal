import React, { useState } from "react";

const SearchBar = ({ setQuery }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(input);
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar text-center my-3">
      <input
        type="text"
        className="form-control w-25 mx-auto text-center"
        placeholder="Search for a movie..."
        value={input}
        onChange={(e) => setInput(e.target.value)
        }
      />
      <button type="submit" className="btn btn-primary mt-2 px-5">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
