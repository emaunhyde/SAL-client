import "./App.css";

// component imports
import Header from "./Components/Header.jsx";
import Navbar from "./Components/Navbar";
import Searchbar from "./Components/Searchbar";
import CategoryGallery from "./Components/CategoryGallery";
import SearchContext from "./Components/SearchContext.jsx";
import Footer from "./Components/Footer.jsx";
import ProjectsGallery from "./Components/ProjectsGallery";
import Project from "./Components/Project";

// library functionality
import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";

function App() {
  const [searching, setSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [searchComplete, setSearchComplete] = useState(false);

  return (
    <>
      <Header />
      <Navbar />
      <SearchContext.Provider
        value={{
          searching,
          setSearching,
          searchResults,
          setSearchResults,
          searchString,
          setSearchString,
          searchComplete,
          setSearchComplete,
        }}
      >
        <Route exact path="/">
          <Searchbar />
          <CategoryGallery />
        </Route>
        <Route exact path="/projects">
          <ProjectsGallery />
        </Route>
        <Route exact path="/project/:id" component={Project} />
      </SearchContext.Provider>
      <Footer />
    </>
  );
}

export default App;
