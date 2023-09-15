import React, { useState } from "react";

const MovieSearch = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("Search Completed");
    onSearch(searchQuery);
  };
  return (
    <>
      <form class="mx-auto" onSubmit={handleSearchSubmit}>
        <div class="input-group">
          <input
            type="text"
            class="text-base form-control"
            placeholder="What do you want to watch?"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          <button className="input-group-text" id="basic-addon1" type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </form>
    </>
  );
};

export default MovieSearch;
