import React, { useState, useContext } from "react";
import SearchContext from "./SearchContext";
import ProjectsGallery from "./ProjectsGallery";

function Searchbar() {
  // imported context
  const {
    setSearching,
    searchResults,
    setSearchResults,
    searchComplete,
    setSearchComplete,
  } = useContext(SearchContext);

  // user input
  const [searchString, setSearchString] = useState("");

  // api searcher function
  const axios = require("axios");
  const url = "https://morning-taiga-97781.herokuapp.com";

  async function getResults(searchString) {
    const result = await axios.get(`${url}/project/search/${searchString}`);
    return result;
  }

  // when user clicks search button
  function handleSubmit(event) {
    event.preventDefault();
    getResults(searchString).then((result) => {
      setSearchResults(result);
    });
    setSearchComplete(true);
    setSearching(false);
    setSearchString("");
  }

  // when user types into form
  function handleChange(event) {
    setSearchString(event.target.value);
  }

  if (searchComplete === false) {
    return (
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="input"
            placeholder="what are we making today?"
            name="searchterm"
            onChange={handleChange}
            required
          />
          <button type="submit" className="searchbtn">
            search
          </button>
        </form>
      </div>
    );
  }
  return (
    <>
      <ProjectsGallery results={searchResults} />
    </>
  );
}

export default Searchbar;
