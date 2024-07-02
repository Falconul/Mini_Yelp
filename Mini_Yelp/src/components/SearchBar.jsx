import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const SearchBar = ({ onSearchRestaurant, onSearchCuisine, onSearchCity }) => {
  const [searchRestaurant, setSearchRestaurant] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const [error, setError] = useState("");
  const [allCityData, setAllCityData] = useState([]);
  const navigate = useNavigate();

  const validCities = ["Madrid", "Berlin", "Zürich"];

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (searchRestaurant) {
        navigate(`/results?query=${encodeURIComponent(searchRestaurant)}`);
        if (onSearchRestaurant) onSearchRestaurant(searchRestaurant);
      } else if (searchCity && validCities.includes(searchCity)) {
        const response = await fetch(`https://yelpapi-bkck.onrender.com/api/restaurant?city=${searchCity}`);
        const cityRestaurants = await response.json();

        navigate(`/results?query=${encodeURIComponent(searchCity)}`);
        setAllCityData(cityRestaurants);
        if (onSearchCity) onSearchCity(searchCity);
      } else {
        setError("Sorry, no results found for the entered value");
        
        setAllCityData([]);
      }
    } catch (error) {
      setError("An error occurred while fetching data");
    }
  };

  return (
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', padding: '10px' }}>
        <input
          type="text"
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
          placeholder="Search for City"
          style={{ marginLeft: "10px", color: "gray", borderRadius: "5px" }}
        />

        <button
          type="submit"
          style={{ marginLeft: "10px" }}
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Search
        </button>
      </form>

      {allCityData.map((result) => (
        <div key={result._id}>
          <p>{result.name} - {result.cuisine} Cuisine</p>
          <p>Address: {result.address} | Rating: {result.rating} | Reviews: {result.reviews}</p>
          <img src={result.image} alt={result.name} />
        </div>
      ))}
    </div>
  );
};

export default SearchBar;
