import React, { useState } from "react";
import SearchResult from "./SearchResult";
import SearchBar from "../components/SearchBar";

const SearchResultPage = () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const [searchCity, setSearchCity] = useState("");

  const handleSearchCity = async (query) => {
    try {
      if (query === "Berlin") { 
        const response = await fetch(`https://yelpapi-bkck.onrender.com/api/restaurant?city=${query}`);
        const data = await response.json();
        setResults(data);
      } else {
        setResults([]); 
      }
    } catch (error) {
      setError("An error occurred while fetching data");
    }
  };

  const handleSearchRestaurant = (query) => {
    console.log("Searching for restaurant: ", query);
  };

  const handleSearchCuisine = (query) => {
    console.log("Searching for cuisine: ", query);
  };

  const handleCityInputChange = (value) => {
    setSearchCity(value);
  };

  return (
    <div>
      

      {error && <p style={{ color: "red" }}>{error}</p>}

      {results.map((result) => (
        <SearchResult key={result.id} result={result} />
      ))}
    </div>
  );
};

export default SearchResultPage;
